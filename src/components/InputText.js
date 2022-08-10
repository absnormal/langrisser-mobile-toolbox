import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';

function onlyNumbers(str) {
	return /^[0-9.-]+$/.test(str);
}

function InputText(props) {
	return (
		<TextField fullWidth
			error={!onlyNumbers(props.value)}
			helperText={!onlyNumbers(props.value) ? props.helper : false}
			id={props.inputId}
			label={props.label}
			value={props.value}
			onChange={props.handleValueChanged(props.inputId)}
			// https://github.com/mui/material-ui/issues/5393
			onKeyPress={(ev) => {
				if (ev.key === 'Enter') {
					ev.preventDefault();
				}
			}}
		/>
	);
}

export default InputText;