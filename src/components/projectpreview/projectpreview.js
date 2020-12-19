import React from 'react';
import { Link } from 'react-router-dom';

import './projectpreview.css';

function ProjectPreview({ type, id, name, owner, secondarystyle }){
	return (
		<Link to={`/projects/${type}/${id}`}>
			<div className={`project-preview-container ${secondarystyle ? 'project-preview-container-2' : null}`}>
				<h3 className="project-preview-title">{name}</h3>
				<p className="project-preview-owner">by: {owner}</p>
			</div>
		</Link>
	)
}

export default ProjectPreview;
