import React from 'react';
import './modalbase.css';

function ModalBase({ className, children, exitFunction }){
	return (
		<div className="modal-container" onClick={exitFunction ? exitFunction : () => {console.log('no exit function')} }>
			<div className={`modal ${className}`}>
			{
				children
			}
			</div>
		</div>
	)
}

export default ModalBase;
