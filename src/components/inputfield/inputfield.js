import React from 'react';
import './inputfield.css';

function InputField({ label, onChange, className, type, value, errorChecker, errorMessage, name, inputClass }) {
	let hasError;

	if (errorChecker) {
		hasError = errorChecker(value);
	}

	return (
		<div className="inputfield-container">
			{
				label ? <label className="inputfield-label"> { label } </label> : null
			}
			<input name={name} onChange={onChange} className={`input-editor ${inputClass} ${hasError ? 'input-error' : 'input-pass'}`} type={type} value={value} />
			{
				hasError ? <p className="error-message"> {errorMessage} </p> : null
			}
		</div>
	)
}

export default InputField;
