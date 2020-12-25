import React from 'react';

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
				['Something', 'google.com'],
				['Elzes', 'youtube.com']
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
					]
				}
			]
		}
	}

	render(){

	}
}

export default ProjectGroup;
