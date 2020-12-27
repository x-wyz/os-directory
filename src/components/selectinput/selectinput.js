import React from 'react';

import './selectinput.css';

const SelectInput = ({ options, handler }) => (
	<select onChange={(event) => handler(event.target.value)} className="selectinput">
		{
			options.map(option => <option value={option}>{option}</option>)
		}
	</select>
)

export default SelectInput;
