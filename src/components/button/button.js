import React from 'react';
import './button.css';

function Button({ type, text, onClick, color, className }){
	return (
		<button className={`button ${className}`} type={type ? type : 'button'} onClick={onClick}>
			{ text }
		</button>
	)
}

export default Button;
