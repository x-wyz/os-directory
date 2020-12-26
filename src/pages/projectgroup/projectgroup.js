import React, { Component } from 'react';

import Button from '../../components/button/button';
// import TaskModal from '../../modals/taskmodal/taskmodal';

import './projectgroup.css';

class ProjectGroup extends Component {
	constructor(props){
		super(props);
		this.state = {
			name: 'Firevox',
			owner: 'Somerando',
			description: 'Sed laoreet nunc libero, vel lobortis mi ullamcorper at. Nunc rhoncus sit amet nisl eu venenatis. Duis lacinia leo ac mi tincidunt, ac ornare augue commodo. Pellentesque purus odio, euismod nec elementum ut, convallis nec ex. In vel sem sit amet nulla bibendum tincidunt et in massa.',
			requirements: ['Nunc non lacus consectetur, gravida magna tempor, laoreet arcu.', 'Ut libero justo, molestie in augue finibus.', 'Aliquam mattis, ex a imperdiet pulvinar.'],
			creationdate: '20-20-2020::11:32',
			others: 'Nunc non lacus consectetur, gravida magna tempor, laoreet arcu. Ut libero justo, molestie in augue finibus, commodo rutrum quam. In cursus odio velit. Nulla viverra viverra eros quis aliquam. Curabitur commodo arcu ut metus porttitor maximus. Vestibulum bibendum euismod velit quis congue. Aliquam nibh nunc, mollis nec tincidunt nec, ornare vitae nulla. Cras in lacus nec metus semper vehicula.',
			type: 'public-open',
			links: [
				['Discord', 'google.com'],
				['YT Channel', 'youtube.com']
			],
			internallinks: [
				['Discord', 'google.com'],
				['YT Channel', 'youtube.com']
			],
			status: 'ongoing',
			users: [
				{
					name: 'user1',
					role: 'member'
				},
				{
					name: 'user2',
					role: 'member'
				},
				{
					name: 'user3',
					role: 'member'
				},
				{
					name: 'user4',
					role: 'member'
				},
				{
					name: 'user5',
					role: 'admin'
				},
				{
					name: 'user6',
					role: 'member'
				},
				{
					name: 'user7',
					role: 'member'
				},
				{
					name: 'user8',
					role: 'moderator'
				},
			],
			pendingusers: [
				{
					name: 'user9'
				},
				{
					name: 'user10'
				}
			],
			messages: [
				{
					name: 'user2',
					date: '20-20-2020::11:12',
					message: 'Donec consequat odio vitae diam laoreet, eu volutpat diam suscipit. Vivamus mauris sapien, rhoncus vel dignissim eu, gravida sed dolor.'
				},
				{
					name: 'user2',
					date: '20-20-2020::11:12',
					message: 'Donec consequat odio vitae diam laoreet, eu volutpat diam suscipit. Vivamus mauris sapien, rhoncus vel dignissim eu, gravida sed dolor.'
				},
				{
					name: 'user2',
					date: '20-20-2020::11:12',
					message: 'Donec consequat odio vitae diam laoreet, eu volutpat diam suscipit. Vivamus mauris sapien, rhoncus vel dignissim eu, gravida sed dolor.'
				},
				{
					name: 'user2',
					date: '20-20-2020::11:12',
					message: 'Donec consequat odio vitae diam laoreet, eu volutpat diam suscipit. Vivamus mauris sapien, rhoncus vel dignissim eu, gravida sed dolor.'
				},
				{
					name: 'user2',
					date: '20-20-2020::11:12',
					message: 'Donec consequat odio vitae diam laoreet, eu volutpat diam suscipit. Vivamus mauris sapien, rhoncus vel dignissim eu, gravida sed dolor.'
				},
			],
			tasks: [
				{
					task: 'Donec consequat odio vitae diam laoreet',
					status: 'active',
					messages: [
						{
							name: 'user2',
							date: '20-20-2020::11:12',
							message: 'Donec consequat odio vitae diam laoreet, eu volutpat diam suscipit. Vivamus mauris sapien, rhoncus vel dignissim eu, gravida sed dolor.'
						},
						{
							name: 'user2',
							date: '20-20-2020::11:12',
							message: 'Donec consequat odio vitae diam laoreet, eu volutpat diam suscipit. Vivamus mauris sapien, rhoncus vel dignissim eu, gravida sed dolor.'
						}
					],
					users: [
						{
							name: 'user9'
						},
						{
							name: 'user10'
						}
					]
				},
				{
					task: 'Donec consequat odio vitae diam laoreet',
					status: 'active',
					messages: [
						{
							name: 'user2',
							date: '20-20-2020::11:12',
							message: 'Donec consequat odio vitae diam laoreet, eu volutpat diam suscipit. Vivamus mauris sapien, rhoncus vel dignissim eu, gravida sed dolor.'
						},
						{
							name: 'user2',
							date: '20-20-2020::11:12',
							message: 'Donec consequat odio vitae diam laoreet, eu volutpat diam suscipit. Vivamus mauris sapien, rhoncus vel dignissim eu, gravida sed dolor.'
						}
					],
					users: [
						{
							name: 'user9'
						},
						{
							name: 'user10'
						}
					],
					newmessage: ""
				},
				{
					task: 'Donec consequat odio vitae diam laoreet',
					status: 'archive',
					messages: [
						{
							name: 'user2',
							date: '20-20-2020::11:12',
							message: 'Donec consequat odio vitae diam laoreet, eu volutpat diam suscipit. Vivamus mauris sapien, rhoncus vel dignissim eu, gravida sed dolor.'
						},
						{
							name: 'user2',
							date: '20-20-2020::11:12',
							message: 'Donec consequat odio vitae diam laoreet, eu volutpat diam suscipit. Vivamus mauris sapien, rhoncus vel dignissim eu, gravida sed dolor.'
						}
					],
					users: [
						{
							name: 'user9'
						},
						{
							name: 'user10'
						}
					]
				},
			]
		}

		this.grouptask = this.grouptask.bind(this);
		this.groupmessage = this.groupmessage.bind(this);
		this.grouplink = this.grouplink.bind(this);
		this.groupuser = this.groupuser.bind(this);

		this.update = this.update.bind(this);
		this.sendMessage = this.sendMessage.bind(this);
	}

	update(event){
		this.setState({
			[event.target.name]: event.target.value
		})
	}

	sendMessage(event){
		event.preventDefault();
	}

	grouptask(task){
		return (
			<div className={`group-task task-status-${task.status}`}>
				<h4 className="group-task-status">{task.status}</h4>
				<p className="group-task-text">{task.task}</p>
				<div className="group-task-footer">
					<p className="group-task-users-count">Users: {task.users.length}</p>
					<p className="group-task-messages-count">Messages: {task.messages.length}</p>
				</div>
			</div>
		)
	}

	groupmessage(msg){
		return (
			<div className="group-message">
				<p className="group-message-header"><span className="group-message-sender">{msg.name}</span> <span className="group-at">	&nbsp;&nbsp;|&nbsp;&nbsp; </span> {msg.date}</p>
				<p className="group-message-text">{msg.message}</p>
			</div>
		)
	}

	grouplink(link){
		return <a href={link[1]} target="_blank" className="group-link">{link[0]}</a>
	}

	groupuser(usr){
		return <p className="group-user">{usr.name}</p>
	}

	render(){
		const { internallinks, users, tasks, messages } = this.state;

		return (
			<div className="group-container">
				<div className="group-tasks-container">
					<h3 className="group-section-heading">Tasks</h3>
					{
						tasks.map(task => this.grouptask(task))
					}
				</div>
				<div className="group-messages-container">
					<h3 className="group-section-heading">Messages</h3>
					{
						messages.map(message => this.groupmessage(message))
					}
				</div>
				<div className="group-information-container">
					<div className="group-users">
						<h3 className="group-section-heading">Users</h3>
						{
							users.map(user => this.groupuser(user))
						}
					</div>
					<div className="group-links-container">
						<h3 className="group-section-heading">Links</h3>
						{
							internallinks.map(link => this.grouplink(link))
						}
					</div>
				</div>
			</div>
		)
	}
}

export default ProjectGroup;
