import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import './formcontrol.css';

const FormControl = ({ title, description, icon, iconClass, handler }) => (
	<div className="fc-container" onClick={handler} >
		<h4 className="fc-title">{title}</h4>
		<FontAwesomeIcon className={`fc-icon ${iconClass}`} icon={icon} />
		<p className="fc-description">{description}</p>
	</div>
)

export default FormControl;
