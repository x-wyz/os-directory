import React from 'react';
import './messagepreview.css';

function MessagePreview({ sender, basis, sent, message, title }) {
	const previewMessage = message.slice(0, 120);
	return (
		<div className="messagepreview-container">
			<p className="messagepreview-title">{title}</p>
			<p className="messagepreview-sender">S: {sender} F: {basis} </p>
			<p className="messagepreview-datesent">{sent}</p>
			<p className="messagepreview-preview-message">{previewMessage}</p>
		</div>
	)
}

export default MessagePreview;
