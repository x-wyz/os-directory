import React from 'react';

function MessagePreview({ sender, basis, sent, message }) {
	return (
		<div className="messagepreview-container">
			<p className="messagepreview">S: {sender} F: {basis} </p>
			<p className="messagepreview-datesent">{sent}</p>
		</div>
	)
}

export default MessagePreview;
