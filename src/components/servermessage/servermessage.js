import React from 'react';
import './servermessage.css';

function ServerMessage({ message, error }){
	return (
		<div className={`servermessage-container ${error ? 'server-message-error' : 'server-message-success'}`}>
			<p className="server-message">{message}</p>
		</div>
	)
}

export default ServerMessage;
