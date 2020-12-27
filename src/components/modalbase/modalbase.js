import React from 'react';

import './modalbase.css';

const ModalBase = ({ className, children, exitFunction }) => (
	<div className="modal-container">
		<div className="modal-background" onClick={exitFunction}>
		</div>
		<div className={`modal ${className}`}>
			{
				children
			}
		</div>
	</div>
)

export default ModalBase;
