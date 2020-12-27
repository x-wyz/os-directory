import React from 'react';

import './button.css';

const Button = ({ type, text, onClick, className }) => (
	<button className={`button ${className}`} type={type ? type : 'button'} onClick={onClick}>
		{text}
	</button>
)

export default Button;
