import React from 'react';
import './inputfield.css';

function InputField({ label, onChange, className, type, value }) {
	return (
		<div className="inputfield-container">
			{
				label ? <label className="inputfield-label"> { label } </label> : null
			}
			<input name={name} onChange={onChange} className={`input-editor ${inputClass}`} type={type} value={value} />
		</div>
	)
}

export default ImportField;
