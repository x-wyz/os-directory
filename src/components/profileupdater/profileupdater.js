import React from 'react';

import './profileupdater.css';

const ProfileUpdater = ({ label, type, handler, name, value }) => (
	<div className="profileupdater-container">
		<label htmlFor={name} className="profileupdater-label"> {label} </label>
		{
			type === 'text' 
			?
			<input className="profileupdater-input" id={name} type="text" value={value} onChange={handler} name={name} />
			:
			type === 'textarea'
			?
			<textarea className="profileupdater-textarea" onChange={handler} id={name} value={value} name={name} />
			:
			null
		}
	</div>
)

export default ProfileUpdater;
