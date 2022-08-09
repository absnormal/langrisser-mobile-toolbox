import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import ResponsiveAppBar from '../components/ResponsiveAppBar';
import SimpleCalc from '../components/SimpleCalc';

function DmgCalc() {
	const [value, setValue] = useState('SimpleCalc');

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<div className="DmgCalc">
			<ResponsiveAppBar />
			<Box sx={{ width: '100%', typography: 'body1' }}>
				<TabContext value={value}>
					<Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
						<TabList onChange={handleChange} aria-label="lab API tabs example">
							<Tab label="簡易計算" value="SimpleCalc" />
							<Tab label="進階計算" value="ComplexCalc" />
						</TabList>
					</Box>
					<TabPanel value="SimpleCalc">
						<SimpleCalc />
					</TabPanel>
					<TabPanel value="ComplexCalc">
						Item Two
					</TabPanel>
				</TabContext>
			</Box>
		</div>
	);
}

export default DmgCalc;