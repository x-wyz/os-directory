const express = require('express');
const router = express.Router();

const Project = require('../schema/projectos');
const User = require('../schema/user');

router.post('/createproject', async (req, res) => {
	let { name, owner, description, requirements, others, type, links, status } = req.body;
	const errors = [];

	if (!name) {
		errors.push('Project must have a name.')
	}

	if (!description) {
		errors.push('Project must have a description.')
	}

	if (!status) {
		status = 'new';
	}

	if (!type) {
		type = 'public-open'
	}

	if (errors.length === 0) {
		const project = new Project({
			publiclinks: links,
			name, owner, description, requirements, others, type, status
		})

		try {
			const savedProject = await project.save();
			const user = await User.findOne({email: owner });
			const projects = user.projects;

			projects.push({
				id: savedProject._id,
				owner: savedProject.owner,
				name: savedProject.name
			});

			const updatedUser = await User.updateOne({email: owner}, {$set: {projects}})

			res.json({
				error: false,
				message: savedProject
			})
		}
		catch(err){
			res.json({
				error: true,
				message: err 
			})
		}
	}
	else {
		res.json({
			error: true,
			message: errors
		})
	}
})

router.post('/removeproject', async (req, res) => {
	let { id } = req.body;

	try {
		const deletedProject = await Project.deleteOne({_id: id});

		res.json({
			error: false,
			message: deletedProject.n > 0 ? "Project has been successfully deleted." : "Project does not exsist."
		})
	}
	catch (err) {
		res.json({
			error: true,
			message: "There was an error when trying to delete this project."
		})
	}

})

router.post('/editproject', async (req, res) => {
	let { id, name, description, requirements, others, type, links:publiclinks, status } = req.body;
	const errors = [];

	if (!name) {
		errors.push('Project must have a name.')
	}

	if (!description) {
		errors.push('Project must have a description.')
	}

	if (errors.length === 0){
		try {
			const updatedProject = await Project.updateOne({_id: id}, {$set: {
				name, description, requirements, others, type, publiclinks, status
			}})

			const project = await Project.findOne({_id:id});

			res.json({
				error: false,
				message: "Project has been successfully updated.",
				project: project
			})
		}
		catch (err) {
			res.json({
				error: true,
				message: "There was an error when trying to edit this project."
			})
		}
	} 
	else {
		res.json({
			error: true,
			message: errors
		})
	}

})

router.post('/archiveproject', async (req, res) => {
	let { id } = req.body;

	try {
		const archiveproject = await Project.updateOne({_id: id}, {$set: {status: 'archive'}});

		res.json({
			error: false,
			message: archiveproject.n > 0 ? "Project has been archived." : "Project has already been archived or does not exsist."
		})
	}
	catch (err) {
		res.json({
			error: true,
			message: "There was an error when trying to archive this project."
		})
	}

})

// The below are individual project endpoints.

router.post('/addmessage', async (req, res) => {
	const { id, message, name } = req.body;
	const errors = [];

	if (!message) {
		errors.push('Message can not be blank.');
	}

	if (!name) {
		errors.push('Name can not be blank.')
	}

	if (errors.length === 0) {
		try {
			const project = await Project.findOne({_id: id});
			const messages = project.messages;
			const newmessage = { name, message };
			messages.push(newmessage);

			const updatedmessages = await Project.updateOne({_id: id}, {$set: {messages}})
			
			res.json({
				error: false,
				message: newmessage
			})

		}
		catch (err) {
			req.json({
				error: true,
				message: "There was an error when trying to send your message."
			})
		}
	}
	else {
		req.json({
			error: true,
			message: errors
		})
	}

})

router.post('/addtask', async (req, res) => {
	const { id, task } = req.body;
	const errors = [];

	if (!id) {
		errors.push('Needs to be a valid project.')
	}

	if (!task) {
		errors.push('Task can not be blank.')
	}

	if (errors.length === 0) {
		try {
			const newtask = { task };
			const project = await Project.findOne({_id: id});
			const currenttasks = project.tasks;
			currenttasks.push(newtask);

			const updatedtasks = await Project.updateOne({_id:id}, {$set: {tasks: currenttasks}});

			res.json({
				error: false,
				message: "Task has been added."
			})
		}
		catch (err) {
			res.json({
				error: true,
				message: "There was an error when trying to add task."
			})
		}
	}
	else {
		res.json({
			error: true,
			message: errors
		})
	}
})

router.post('/taskadduser', async (req, res) => {
	const { email, id, name, taskid }  = req.body;
	try {
		const currentTasks = await Project.findOne({_id: id}, 'tasks');
		const taskmembers = currentTasks.tasks.filter(task => task.taskid === taskid)[0].users;
		taskmembers.push({email, name});

		const addUserToTask = await Project.updateOne({_id: id, 'tasks.taskid': taskid}, {$set: {
			'tasks.$.users': taskmembers
		}})

		res.json({
			error: false,
			message: "Added user to task."
		});
	}
	catch(err){
		res.json({
			error: true,
			message: 'Unable to add user to task.',
			err: err
		})
	}
})

router.post('/removetask', async (req, res) => {
	const { id, taskid } = req.body;
	const errors = [];

	if (!id) {
		errors.push('Needs to be a valid project.')
	}

	if (!taskid) {
		errors.push('Needs to be a valid task.')
	}

	if (errors.length === 0) {
		try {
			const project = await Project.findOne({_id: id});
			let tasks = project.tasks;
			tasks = tasks.filter(task => task.taskid !== taskid);
			const updatedtasks = await Project.updateOne({_id: id}, {$set: {tasks}});

			res.json({
				error: false,
				message: "Task has been deleted."
			})
		}
		catch (err) {
			res.json({
				error: true,
				message: "There was an error when trying to delete the task."
			})
		}
	}
	else {
		res.json({
			error: true,
			message: errors
		})
	}

})

router.post('/archivetask', async (req, res) => {
	const { id, taskid } = req.body;
	const errors = [];

	if (!id) {
		errors.push('Needs to be a valid project.')
	}

	if (!taskid) {
		errors.push('Needs to be a valid task.')
	}

	if (errors.length === 0) {
		try {
			const project = await Project.findOne({ _id: id });
			let tasks = project.tasks;
			tasks = tasks.map(task => {
				if (task.taskid === taskid) {
					return {
						// why does destructuring not work here? ...task, status:'archive'
						// If i had to guess behind the scenes it has more properties and the layer i'm trying to access is nested within
						// hence why it does not update properly with destructuring. I think this is a library(mongoose) specific problem and 
						// has nothing to do with vanilla javascript.
						taskid: task.taskid,
						task: task.task,
						messages: task.messages,
						users: task.users,
						status: 'archive'
					};
				}
				else {
					// This works properly because there were 0 modification to the object?
					return task;
				}
			})

			const updatedtasks = await Project.updateOne({ _id: id }, {$set: {tasks}});

			res.json({
				error: false,
				message: "Task archived."
			})
		}
		catch (err) {
			res.json({
				error: true,
				message: 'There was an error when archiving this task.'
			})
		}
	}
	else {
		res.json({
			error: true,
			message: errors
		})
	}

})

const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

router.post('/adduser', async (req, res) => {
	const { id, name, email, force } = req.body;
	const errors = [];

	if (!id) {
		errors.push('Must be a valid project.')
	}

	if (!name) {
		errors.push('Your name can not be blank.')
	}

	if (!emailRegex.test(email)) {
		errors.push('You must have a valid email.')
	}

	if (errors.length === 0) {
		try {
			const project = await Project.findOne({ _id: id});
			const projecttype = project.type;

			const newuser = { 
				role: 'user',
				name,
				email	
			}

			if (projecttype !== 'public-appl' || force === true) {
				let pendingusers = project.pendingusers;
				const users = project.users;
				users.push(newuser);

				if (force === true) {
					pendingusers = pendingusers.filter(user => user.email !== email);
				}

				const updatedproject = await Project.updateOne({_id:id}, {$set: {users, pendingusers}});

				res.json({
					error: false,
					message: "Added user to server."
				})
			}
			else {
				const pendingusers = project.pendingusers;
				pendingusers.push(newuser);

				const updatedproject = await Project.updateOne({_id:id}, {$set: {pendingusers}});

				res.json({
					error: false,
					message: "Your request has been sent."
				})
			}
		}
		catch (err) {
			res.json({
				error: true,
				message: "There was an error when trying to add this user."
			})
		}
	}
	else {
		res.json({
			error: true,
			message: errors
		})
	}
})

const urlRegex = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/;

router.post('/editlinks', async (req, res) => {
	const { id, links } = req.body;
	const errors = [];

	if (links.length > 0){
		links.forEach(link => {
			if (!urlRegex.test(link.link)){
				errors.push(`Invalid link. (${link.link})`)
			}
		})
	}

	if (errors.length === 0) {
		try {
			const project = await Project.updateOne({_id: id}, {$set: {
				internallinks: links
			}});

			res.json({
				error: false,
				message: "Links have been updated."
			})
		}
		catch (err) {
			res.json({
				error: true,
				message: "An error occurred when trying to update links."
			})
		}
	}
	else {
		res.json({
			error: true,
			message: errors
		})
	}

})

module.exports = router;
