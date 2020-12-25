import React from 'react';
import './selectinput.css';

function SelectInput({ options, handler }){
	return (
		<select onChange={(event) => handler(event.target.value)} className="selectinput">
			{
				options.map(option => <option value={option}>{option}</option>)
			}
		</select>
	)
}

export default SelectInput;
