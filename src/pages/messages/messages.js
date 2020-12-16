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
					sent: '1-22-2020',
					basis: 'Firebox',
					message: 'Vivamus a lacinia mauris, id malesuada massa. Pellentesque ut cursus mauris. Donec at dui ut ante tempus tincidunt. Nunc porttitor vulputate urna, et blandit est convallis ut.'
				},
				{
					sender: 'AcerS',
					sent: '1-22-2020',
					basis: 'Firebox',
					message: 'Vivamus a lacinia mauris, id malesuada massa. Pellentesque ut cursus mauris. Donec at dui ut ante tempus tincidunt. Nunc porttitor vulputate urna, et blandit est convallis ut.'
				},
				{
					sender: 'AcerS',
					sent: '1-22-2020',
					basis: 'Firebox',
					message: 'Vivamus a lacinia mauris, id malesuada massa. Pellentesque ut cursus mauris. Donec at dui ut ante tempus tincidunt. Nunc porttitor vulputate urna, et blandit est convallis ut.'
				},
				{
					sender: 'AcerS',
					sent: '1-22-2020',
					basis: 'Firebox',
					message: 'Vivamus a lacinia mauris, id malesuada massa. Pellentesque ut cursus mauris. Donec at dui ut ante tempus tincidunt. Nunc porttitor vulputate urna, et blandit est convallis ut.'
				},
				{
					sender: 'AcerS',
					sent: '1-22-2020',
					basis: 'Firebox',
					message: 'Vivamus a lacinia mauris, id malesuada massa. Pellentesque ut cursus mauris. Donec at dui ut ante tempus tincidunt. Nunc porttitor vulputate urna, et blandit est convallis ut.'
				},
				{
					sender: 'AcerS',
					sent: '1-22-2020',
					basis: 'Firebox',
					message: 'Vivamus a lacinia mauris, id malesuada massa. Pellentesque ut cursus mauris. Donec at dui ut ante tempus tincidunt. Nunc porttitor vulputate urna, et blandit est convallis ut.'
				},
				{
					sender: 'AcerS',
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
				{
					messages.map((message,idx) => <MessagePreview sender={message.sender} basis={message.basis} sent={message.sent} message={message.message} />)
				}
			</div>
		)
	}
}

export default Messages;
