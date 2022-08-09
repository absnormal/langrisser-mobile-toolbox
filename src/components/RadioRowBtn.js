import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

function RadioRowBtn(props) {
	const list = props.list;

	return (
		<FormControl>
			<FormLabel id="demo-row-radio-buttons-group-label">{props.label}</FormLabel>
			<RadioGroup row aria-labelledby="demo-row-radio-buttons-group-label" defaultValue={list[props.defaultIndex]} name="row-radio-buttons-group">
				{list.map((value, index) => (
					<FormControlLabel value={list[index]} control={<Radio />} label={list[index]} />
				))}
			</RadioGroup>
		</FormControl >
	);
}

export default RadioRowBtn;
