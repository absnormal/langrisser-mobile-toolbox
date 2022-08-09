import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

function onlyNumbers(str) {
	return /^[0-9.]+$/.test(str);
}

function InputText(props) {
	const [text, setText] = useState(props.defaultValue);
	const [textType, setTextType] = useState(null);

	const handleChange = (event) => {
		setText(event.target.value);
		if (onlyNumbers(event.target.value)) setTextType("number");
		else setTextType("notNumber");
	}

	return (
		<Box
			component="form"
			sx={{
				'& .MuiTextField-root': { m: 1, width: '25ch' },
			}}
			noValidate
			autoComplete="off"
		>
			<div>
				<TextField
					error={textType !== props.expectType && textType !== null}
					id={props.inputId}
					label={props.label}
					helperText={textType !== props.expectType && textType !== null ? props.helper : false}
					variant="standard"
					value={text}
					onChange={handleChange}
					// prevent hit enter
					// https://github.com/mui/material-ui/issues/5393
					onKeyPress={(ev) => {
						if (ev.key === 'Enter') {
							ev.preventDefault();
						}
					}}
				/>
			</div>
		</Box>
	);
}

export default InputText;