import React, { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import RadioRowBtn from './RadioRowBtn';
import InputText from './InputText';

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
				<Grid item xs={6} md={12}>
					<Item>
						<RadioRowBtn label="攻擊方式" defaultIndex="0" list={["單點", "範圍"]} />
					</Item>
				</Grid>
				<Grid item xs={6} md={6}>
					<Item>
						<InputText inputId="ATKINT" label="攻擊/智力" defaultValue="1000" helper="只能包含數字" expectType="number" />
						<InputText inputId="DMGINC1" label="一般增傷" defaultValue="30" helper="只能包含數字" expectType="number" />
						<InputText inputId="DMGINC2" label="技能增傷" defaultValue="10" helper="只能包含數字" expectType="number" />
						<InputText inputId="DMGINC3" label="暴擊增傷" defaultValue="30" helper="只能包含數字" expectType="number" />
						<InputText inputId="SKILLRATE" label="技能倍率" defaultValue="1.5" helper="只能包含數字" expectType="number" />
					</Item>
				</Grid>
				<Grid item xs={6} md={6}>
					<Item>
						<InputText inputId="DEFMDEF" label="防禦/魔防" defaultValue="500" helper="只能包含數字" expectType="number" />
						<InputText inputId="DMGDEC1" label="一般減傷" defaultValue="30" helper="只能包含數字" expectType="number" />
						<InputText inputId="DMGDEC2" label="天賦減傷" defaultValue="10" helper="只能包含數字" expectType="number" />
						<InputText inputId="DMGDEC3" label="指揮減傷" defaultValue="30" helper="只能包含數字" expectType="number" />
						<InputText inputId="COUNTER" label="克制倍率" defaultValue="0.3" helper="只能包含數字" expectType="number" />
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