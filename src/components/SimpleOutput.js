import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

function CalcOutput({ outputList, labelList, defaultList, calcData }) {
	const [result, setResult] = useState('0');
	const [critResult, setCritResult] = useState('0');

	useEffect(() => {
		// whole calculation
		var dmg, critdmg;
		dmg = ((Number(calcData.ATKINT) * (1 + 0.01 * Number(calcData.ATKINTPERC))) * (1 + Number(calcData.COUNTER))
			- (Number(calcData.DEFMDEF) * (1 + 0.01 * Number(calcData.DEFMDEFPERC))) * (1 + 0.01 * Number(calcData.TERRAIN)))
			* (1 + 0.01 * Number(calcData.DMGINC1) - 0.01 * Number(calcData.DMGDEC1))
			* (1 + 0.01 * Number(calcData.DMGINC2)) * (1 - 0.01 * Number(calcData.DMGDEC2)) * (1 - 0.01 * Number(calcData.DMGDEC3))
			* Number(calcData.SKILLRATE) * Number(calcData.MELEE);

		critdmg = dmg * (1.3 + 0.01 * Number(calcData.DMGINC3));

		// TypeSingle: times 1/2, TypeAOE: times 10 
		if (calcData.ATKTYPE === "單點") {
			dmg *= 0.5;
			critdmg *= 0.5;
		} else if (calcData.ATKTYPE === "範圍") {
			dmg *= 10;
			critdmg *= 10;
		}

		// Round to last 2 digit
		dmg = Math.round((dmg + Number.EPSILON) * 100) / 100;
		critdmg = Math.round((critdmg + Number.EPSILON) * 100) / 100;

		// if dmg < 1 return 1
		if (dmg < 1) dmg = 1;
		if (critdmg < 1) critdmg = 1;

		console.log(calcData)
		console.log("DMG: " + dmg);
		console.log("CRITDMG: " + critdmg);

		setResult(dmg);
		setCritResult(critdmg);

	}, [calcData]);

	return (
		<>
			<Box component="form" sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }} noValidate autoComplete="off" >
				<div>
					<TextField
						disabled
						id={outputList[0]}
						label={labelList[0]}
						value={result}
					/>
				</div>
			</Box>
			<Box component="form" sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }} noValidate autoComplete="off" >
				<div>
					<TextField
						disabled
						id={outputList[1]}
						label={labelList[1]}
						value={critResult}
					/>
				</div>
			</Box>
		</>
	);
}

export default CalcOutput;