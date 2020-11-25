import React from 'react';

import './navigationlink.css';

import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function NavigationLink({ icon, text, addText, link, iconClass, onClick }){
	const location = useLocation().pathname.split('/')[1].search(text.toLowerCase());
	console.log(location)

	return (
		<Link className={`navigation-link ${location !== -1 ? 'current-nav' : null}`} to={link} onClick={onClick}>
			<FontAwesomeIcon className={`nav-item-icon ${iconClass}`} icon={icon} />
			{
				addText ? <p className="nav-item-text">{text}</p> : null
			}
		</Link>
	)
}

export default NavigationLink;
