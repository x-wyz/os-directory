import React from 'react';
import './modalbase.css';

function ModalBase({ className, children, exitFunction }){
	return (
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
}

export default ModalBase;
