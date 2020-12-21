import React from 'react';
import './selectinput.css';

function SelectInput({ options, handler }){
	return (
		<select onChange={handler} className="selectinput">
			{
				options.map(option => <option value={option}>{option}</option>)
			}
		</select>
	)
}

export default SelectInput;
