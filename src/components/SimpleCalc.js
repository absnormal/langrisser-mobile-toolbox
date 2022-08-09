import React, { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

function SimpleCalc() {
	const Item = styled(Paper)(({ theme }) => ({
		backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
		...theme.typography.body2,
		padding: theme.spacing(1),
		textAlign: 'center',
		color: theme.palette.text.secondary,
	}));

	return (
		<Box sx={{ flexGrow: 1 }}>
			<Grid container spacing={2}>
				<Grid item xs={6} md={6}>
					<Item>
						xs=6 md=8
					</Item>
				</Grid>
				<Grid item xs={6} md={6}>
					<Item>
						xs=6 md=4
					</Item>
				</Grid>
				<Grid item xs={6} md={12}>
					<Item>
						xs=6 md=12
					</Item>
				</Grid>
			</Grid>
		</Box>

	);
}

export default SimpleCalc;