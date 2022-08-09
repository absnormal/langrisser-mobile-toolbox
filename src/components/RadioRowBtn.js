import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

function RadioRowBtn(props) {
	const list = props.list;

	const handleChange = (event) => {
		// get option index
		var valueIndex = null;
		list.map(function (name, index) {
			if (name === event.target.value) valueIndex = index;
		});
		if (valueIndex === null) {
			console.log(event)
			console.log("RadioRowBtn: can't find event.target.value in list");
		}

		const inputObject = {
			id: props.inputId,
			value: valueIndex
		};

		// callback to parent component
		props.onHandleChange(inputObject);
	}

	return (
		<FormControl id={props.inputId}>
			<FormLabel id="demo-row-radio-buttons-group-label">
				{props.label}
			</FormLabel>
			<RadioGroup
				row
				aria-labelledby="demo-row-radio-buttons-group-label"
				defaultValue={list[props.defaultIndex]}
				name="row-radio-buttons-group"
			>
				{list.map((value, index) => (
					<FormControlLabel
						control={<Radio />}
						label={list[index]}
						value={list[index]}
						onChange={handleChange}
					/>
				))}
			</RadioGroup>
		</FormControl >
	);
}

export default RadioRowBtn;
