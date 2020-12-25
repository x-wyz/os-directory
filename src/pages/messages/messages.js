import React, { Component } from 'react';

import MessagePreview from '../../components/messagepreview/messagepreview';

import './messages.css';

class Messages extends Component {
	constructor(props){
		super(props);

		this.state = {
			messages: [
				{
					sender: 'AcerS',
					title: 'firebox news',
					sent: '1-22-2020',
					basis: 'Firebox',
					message: 'Vivamus a lacinia mauris, id malesuada massa. Pellentesque ut cursus mauris. Donec at dui ut ante tempus tincidunt. Nunc porttitor vulputate urna, et blandit est convallis ut.'
				},
				{
					sender: 'AcerS',
					title: 'firebox news',
					sent: '1-22-2020',
					basis: 'Firebox',
					message: 'Vivamus a lacinia mauris, id malesuada massa. Pellentesque ut cursus mauris. Donec at dui ut ante tempus tincidunt. Nunc porttitor vulputate urna, et blandit est convallis ut.'
				},
				{
					sender: 'AcerS',
					title: 'firebox news',
					sent: '1-22-2020',
					basis: 'Firebox',
					message: 'Vivamus a lacinia mauris, id malesuada massa. Pellentesque ut cursus mauris. Donec at dui ut ante tempus tincidunt. Nunc porttitor vulputate urna, et blandit est convallis ut.'
				},
				{
					sender: 'AcerS',
					title: 'firebox news',
					sent: '1-22-2020',
					basis: 'Firebox',
					message: 'Vivamus a lacinia mauris, id malesuada massa. Pellentesque ut cursus mauris. Donec at dui ut ante tempus tincidunt. Nunc porttitor vulputate urna, et blandit est convallis ut.'
				},
				{
					sender: 'AcerS',
					title: 'firebox news',
					sent: '1-22-2020',
					basis: 'Firebox',
					message: 'Vivamus a lacinia mauris, id malesuada massa. Pellentesque ut cursus mauris. Donec at dui ut ante tempus tincidunt. Nunc porttitor vulputate urna, et blandit est convallis ut.'
				},
				{
					sender: 'AcerS',
					title: 'firebox news',
					sent: '1-22-2020',
					basis: 'Firebox',
					message: 'Vivamus a lacinia mauris, id malesuada massa. Pellentesque ut cursus mauris. Donec at dui ut ante tempus tincidunt. Nunc porttitor vulputate urna, et blandit est convallis ut.'
				},
				{
					sender: 'AcerS',
					title: 'firebox news',
					sent: '1-22-2020',
					basis: 'Firebox',
					message: 'Vivamus a lacinia mauris, id malesuada massa. Pellentesque ut cursus mauris. Donec at dui ut ante tempus tincidunt. Nunc porttitor vulputate urna, et blandit est convallis ut.'
				}
			]
		}
	}

	render(){
		const { messages } = this.state;

		return (
			<div className="messages-container">
				<h2 className="messages-title">Messages</h2>
				<div className="messages-preview-container">
					{
						messages.map((message,idx) => <MessagePreview key={idx} title={message.title} sender={message.sender} basis={message.basis} sent={message.sent} message={message.message} />)
					}
				</div>
			</div>
		)
	}
}

export default Messages;
