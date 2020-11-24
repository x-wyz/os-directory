const express = require('express');
const router = express.Router();

const PublicForm = require('../schema/publicform');
const User = require('../schema/user');

router.post('/createform', async (req, res) => {
	const { owner, end:endDate, name, description, form } = req.body;
	const errors = [];

	if (!owner) {
		errors.push('Owner must exsist.')
	}

	if (!endDate) {
		// This should out live the site assuming it even goes live.
		// January 01 2400
		endDate = new Date('2400-01-01T00:00');
	}

	if (!description) {
		errors.push('Description can not be empty.');
	}

	if (!name) {
		errors.push('Name can not be empty');
	}

	if (!form) {
		errors.push('Your form needs atleast one element.')
	}

	if (errors.length === 0) {
		const newform = new PublicForm({
			owner, endDate, name, description, form
		})

		try {
			const user = await User.findOne({email: owner});
			const savedProject = await newform.save();

			const datacollection = user.datacollection;
			datacollection.push({
				id: newform._id,
				name: name,
				owner: owner,
				description: description
			})

			const updateuser = await User.updateOne({email: owner}, {$set: {datacollection}})

			res.json({
				error: false,
				message: "Your form has been created."
			})
		}
		catch (err){
			res.json({
				error: true,
				message: "There was an error in creating your form please try again later."
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

router.post('/updateform', async (req, res) => {
	const { id, end:endDate, description, form } = req.body;
	const errors = [];

	if (!endDate) {
		// This should out live the site assuming it even goes live.
		// January 01 2400
		endDate = new Date('2400-01-01T00:00');
	}

	if (!description) {
		errors.push('Description can not be empty.');
	}

	if (!form) {
		errors.push('Your form needs atleast one element.');
	}

	if (errors.length === 0) {
		try {
			const updateform = PublicForm.updateOne({_id: id}, {$set: {
				endDate, description, form
			}})

			res.json({
				error: false,
				message: "Form has been updated."
			})
		}
		catch (err){
			res.json({
				error: false,
				message: "Unable to edit the form. Try again later/make sure all form fields are valid."
			})
		}
	}
	else {
		res.json({
			error: false,
			message: errors
		})
	}

})

module.exports = router;
