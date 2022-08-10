import React, { useState, useEffect } from 'react';

function shadowCopy(originalObj) {
	let clonedObj = {};
	for (const key in originalObj) {
		clonedObj[key] = originalObj[key];
	}
	return clonedObj;
}

export default shadowCopy;