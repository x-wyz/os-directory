import React from 'react';

import './previewresult.css'

function PreviewResult({ title, owner, description, type, id, handler, creationDate }){
	return (
		<div className="search-preview-container" onClick={handler}>
			<div className="search-preview-header">
				<h3 className="search-preview-title"><span className="search-preview-title-type">{`${type === 'project' ? '' : `[${type}]`}`}</span>  {title}</h3>
				<h3 className="search-preview-owner">by: {owner} | {creationDate}</h3>
			</div>
			<div className="search-preview-body">
				<p className="search-preview-body">{description}</p>
			</div>
		</div>
	)
}

export default PreviewResult;
