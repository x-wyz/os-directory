import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import './navigationlink.css';

function NavigationLink({ icon, text, link, iconClass, onClick }){
	const location = useLocation().pathname.split('/')[1].search(text.toLowerCase());

	return (
		<Link className={`nav-link ${ location !== -1 ? 'current-nav' : null }`} to={ link } onClick={ onClick }>
			<FontAwesomeIcon className={`nav-item-icon ${ iconClass }`} icon={icon} />
			{
				text ? <p className="nav-item-text"> { text } </p> : null
			}
		</Link>
	)
}

export default NavigationLink;
