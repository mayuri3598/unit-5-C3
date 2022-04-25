import { Link } from 'react-router-dom';
import { useContext } from 'react';
import React,{useState,useEffect} from 'react';

export const Navbar = () => {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	
	const handleAuth = () => {
		setIsLoggedIn(!isLoggedIn);
	};

	return (
		<div className='navbar'
			style={{
				background: '#fafafa',
				padding: '10px',
				margin: '10px',
				borderRadius: '5px',
			}}>
			<Link style={{
				textDecoration: 'none',
				padding: '10px',
				color: '#000',
			}} className='nav-home' to='/'>
				Home
			</Link>
			<Link
				style={{
					textDecoration: 'none',
					color: '#000',
					padding: '10px',
				}}
				className='nav-list' to='/employees'>
				Employee List
			</Link>
			<Link
				style={{
					textDecoration: 'none',
					color: '#000',
					padding: '10px',
				}}
				className='nav-admin' to='/admin'>
				Admin
			</Link>
			{/* Show Either logout or login based on auth context. DO NOT show both */}
			{isLoggedIn ? (
				<Link
					style={{
						textDecoration: 'none',
						color: '#000',
						padding: '10px',
					}}
					className='nav-logout' to='/' onClick={handleAuth}>
					Logout
				</Link>
			) : (
				<Link
					style={{
						textDecoration: 'none',
							color: '#000',
							padding: '10px',
					}}
						className='nav-login' to='/login' onClick={handleAuth}>
						Login
				</Link>
			)}
		</div>
	);
};
