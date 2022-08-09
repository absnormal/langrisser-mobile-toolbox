import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { auth } from "../utils/Firebase"
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const Login = () => {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [displayName, setDisplayName] = useState(false);
	const [photoURL, setPhotoURL] = useState(false);

	const signInWithGoogle = () => {
		const provider = new GoogleAuthProvider();
		signInWithPopup(auth, provider)
			.then((result) => {
				// This gives you a Google Access Token. You can use it to access the Google API.
				const credential = GoogleAuthProvider.credentialFromResult(result);
				const token = credential.accessToken;
				// The signed-in user info.
				const user = result.user;
				// hook set loggedin
				setIsLoggedIn(true);
				setDisplayName(user.displayName);
				setPhotoURL(user.photoURL);
				console.log(result);
			}).catch((error) => {
				// Handle Errors here.
				const errorCode = error.code;
				const errorMessage = error.message;
				// The email of the user's account used.
				const credential = GoogleAuthProvider.credentialFromError(error);
			});
	}

	const [anchorElUser, setAnchorElUser] = React.useState(null);

	const handleOpenUserMenu = (event) => {
		setAnchorElUser(event.currentTarget);
	};

	const handleCloseUserMenu = () => {
		setAnchorElUser(null);
	};

	return (
		<div>
			{isLoggedIn === false &&
				<Button variant="contained" color="secondary" onClick={signInWithGoogle}>
					Login
				</Button>
			}
			{isLoggedIn === true &&
				<Box sx={{ flexGrow: 0 }}>
					<Tooltip title="Open settings">
						<IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
							<Avatar alt={displayName} src={photoURL} />
						</IconButton>
					</Tooltip>
					<Menu
						sx={{ mt: '45px' }}
						id="menu-appbar"
						anchorEl={anchorElUser}
						anchorOrigin={{
							vertical: 'top',
							horizontal: 'right',
						}}
						keepMounted
						transformOrigin={{
							vertical: 'top',
							horizontal: 'right',
						}}
						open={Boolean(anchorElUser)}
						onClose={handleCloseUserMenu}
					>
						{settings.map((setting) => (
							<MenuItem key={setting} onClick={handleCloseUserMenu}>
								<Typography textAlign="center">{setting}</Typography>
							</MenuItem>
						))}
					</Menu>
				</Box>
			}
		</div>
	);
}

export default Login;