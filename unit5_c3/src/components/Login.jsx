import { useContext, useState } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export const Login = () => {
	//  use reqres to log user in.
	const { handleAuth } = useContext(AuthContext);
	const [loginData, setLoginData] = useState({});

	const navigate = useNavigate();

	const handleChange = e => {
		const { name, value } = e.target;
		setLoginData({
			...loginData,
			[name]: value,
		});
	};
	const handleSubmit = async e => {
		e.preventDefault();
		const { data } = await axios.post(
			'https://reqres.in/api/register',
			loginData
		);
		if (data.token) {
			handleAuth(true);
			navigate(-2, { replace: true });
		}
	};

	return (
		<form className='loginform' onSubmit={handleSubmit}>
			<input
				name='username'
				type='text'
				placeholder='Enter username'
				className='login_username'
				style={{
					border: '1px solid #ccc',
					borderRadius: '5px',
					padding: '10px',
					margin: '10px',
					backgroundColor: '#fafafa',
					// height: '40px',
				}}
				onChange={handleChange}
			/>
			<input
				name='password'
				type='text'
				placeholder='Enter password'
				className='login_password'
				style={{
					marginTop: '10px',
					border: '1px solid #ccc',
					borderRadius: '5px',
					padding: '10px',
					margin: '10px',
					
										
				}}
				onChange={handleChange}
			/>
			<input style={{
				backgroundColor: '#00b894',
				color: 'white',
				border: 'none',
				padding: '10px 15px',
				borderRadius: '3px',
			}} type='submit' value='SIGN IN' className='login_submit' />
		</form>
	);
};
