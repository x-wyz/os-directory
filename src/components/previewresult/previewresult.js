import React from 'react';

import './previewresult.css'

const PreviewResult = ({ title, owner, description, type, id, handler, creationDate }) => (
	<div className="preview-container" onClick={ handler }>
		<div className="preview-header">
			<h3 className="preview-title"><span className="preview-title-type">{`${type === 'project' ? '' : `[${type}]`}`}</span>  { title } </h3>
			<h3 className="preview-owner">by: { owner } | { creationDate }</h3>
		</div>
		<div className="preview-body">
			<p className="preview-body"> { description } </p>
		</div>
	</div>
)

export default PreviewResult;
