import React from 'react';
import './formcontrol.css';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function FormControl({ title, description, icon, iconClass, handler }){
	return (
		<div className="form-control-container" onClick={handler} >
			<h4 className="form-control-title">{ title }</h4>
			<FontAwesomeIcon className={`formcontrol-icon ${iconClass}`} icon={icon} />
			<p className="form-control-description">{ description }</p>
		</div>
	)
}

export default FormControl;
