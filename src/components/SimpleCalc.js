import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import RadioRowBtn from './RadioRowBtn';
import InputText from './InputText';
import SimpleOutput from './SimpleOutput';

function SimpleCalc() {
	const [calcData, setCalcData] = useState({
		ATKTYPE: "單點",
		ATKINT: "1000",
		ATKINTPERC: "50",
		DEFMDEFPERC: "0",
		DEFMDEF: "500",
		DMGINC1: "30",
		DMGINC2: "0",
		DMGINC3: "20",
		DMGDEC1: "30",
		DMGDEC2: "0",
		DMGDEC3: "0",
		SKILLRATE: "1.5",
		COUNTER: "0.3",
		TERRAIN: "20",
		MELEE: "1"
	});

	const handleValueChanged = (name) => (event) => {
		setCalcData({ ...calcData, [name]: event.target.value });
	};

	return (
		<Box sx={{ flexGrow: 1 }}>
			<Grid container spacing={2}>
				<Grid item xs={6} md={12} >
					<Paper
						sx={{
							display: 'flex',
							flexWrap: 'wrap',
							'& > :not(style)': {
								mx: 10, my: 1
							},
							textAlign: 'center',
							justifyContent: 'center'
						}}
					>
						<RadioRowBtn handleValueChanged={handleValueChanged}
							inputId="ATKTYPE" label="攻擊方式" defaultIndex="0" list={["單點", "範圍"]} />
					</Paper>
				</Grid>
				<Grid item xs={6} md={6}>
					<Paper
						sx={{
							display: 'flex',
							flexWrap: 'wrap',
							'& > :not(style)': {
								mx: 10, my: 1
							},
							textAlign: 'center',
							justifyContent: 'center'
						}}
					>
						<InputText
							inputId="ATKINT"
							label="攻擊/智力進場白字"
							helper="只能包含數字"
							value={calcData.ATKINT}
							handleValueChanged={handleValueChanged}
						/>
						<InputText
							inputId="ATKINTPERC"
							label="攻擊/智力(%)"
							helper="只能包含數字"
							value={calcData.ATKINTPERC}
							handleValueChanged={handleValueChanged}
						/>
						<InputText
							inputId="DMGINC1"
							label="一般增傷(%)"
							helper="只能包含數字"
							value={calcData.DMGINC1}
							handleValueChanged={handleValueChanged}
						/>
						<InputText
							inputId="DMGINC2"
							label="技能增傷(%)"
							helper="只能包含數字"
							value={calcData.DMGINC2}
							handleValueChanged={handleValueChanged}
						/>
						<InputText
							inputId="DMGINC3"
							label="暴擊增減傷(%)"
							helper="只能包含數字"
							value={calcData.DMGINC3}
							handleValueChanged={handleValueChanged}
						/>
						<InputText
							inputId="SKILLRATE"
							label="技能倍率"
							helper="只能包含數字"
							value={calcData.SKILLRATE}
							handleValueChanged={handleValueChanged}
						/>
						<InputText
							inputId="MELEE"
							label="近戰減免"
							helper="只能包含數字"
							value={calcData.MELEE}
							handleValueChanged={handleValueChanged}
						/>
					</Paper>
				</Grid>
				<Grid item xs={6} md={6}>
					<Paper
						sx={{
							display: 'flex',
							flexWrap: 'wrap',
							'& > :not(style)': {
								mx: 10, my: 1
							},
							textAlign: 'center',
							justifyContent: 'center'
						}}
					>
						<InputText
							inputId="DEFMDEF"
							label="防禦/魔防進場白字"
							helper="只能包含數字"
							value={calcData.DEFMDEF}
							handleValueChanged={handleValueChanged}
						/>
						<InputText
							inputId="DEFMDEFPERC"
							label="防禦/魔防(%)"
							helper="只能包含數字"
							value={calcData.DEFMDEFPERC}
							handleValueChanged={handleValueChanged}
						/>
						<InputText
							inputId="DMGDEC1"
							label="一般減傷(%)"
							helper="只能包含數字"
							value={calcData.DMGDEC1}
							handleValueChanged={handleValueChanged}
						/>
						<InputText
							inputId="DMGDEC2"
							label="天賦減傷(%)"
							helper="只能包含數字"
							value={calcData.DMGDEC2}
							handleValueChanged={handleValueChanged}
						/>
						<InputText
							inputId="DMGDEC3"
							label="光環減傷(%)"
							helper="只能包含數字"
							value={calcData.DMGDEC3}
							handleValueChanged={handleValueChanged}
						/>
						<InputText
							inputId="COUNTER"
							label="克制倍率"
							helper="只能包含數字"
							value={calcData.COUNTER}
							handleValueChanged={handleValueChanged}
						/>
						<InputText
							inputId="TERRAIN"
							label="地形倍率(%)"
							helper="只能包含數字"
							value={calcData.TERRAIN}
							handleValueChanged={handleValueChanged}
						/>
					</Paper>
				</Grid>
				<Grid item xs={6} md={12}>
					<Paper
						sx={{
							display: 'flex',
							flexWrap: 'wrap',
							'& > :not(style)': {
								mx: 10, my: 1
							},
							textAlign: 'center',
							justifyContent: 'center'
						}}
					>
						<SimpleOutput calcData={calcData}
							outputList={["DAMAGE", "CRITDAMAGE"]} labelList={["傷害", "暴擊傷害"]} defaultList={["415.8", "665.28"]} />
					</Paper>
				</Grid>
			</Grid>
		</Box>

	);
}

export default SimpleCalc;