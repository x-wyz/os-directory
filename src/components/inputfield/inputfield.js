import React from 'react';
import './inputfield.css';

function InputField({ label, onChange, className, type, value, errorChecker, errorMessage, name, inputClass }) {
	let hasError;

	if (errorChecker) {
		hasError = errorChecker(value);
	}

	return (
		<div className={`inputfield-container ${className}`}>
			{
				label ? <label className="inputfield-label" htmlFor={name}> { label } </label> : null
			}
			<input id={name} name={name} onChange={onChange} className={`input-editor ${inputClass} ${hasError ? 'input-error' : 'input-pass'}`} type={type} value={value} />
			{
				hasError ? <p className="error-message"> {errorMessage} </p> : null
			}
		</div>
	)
}

export default InputField;
