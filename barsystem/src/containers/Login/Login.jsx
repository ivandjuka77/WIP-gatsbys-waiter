import { useState, useEffect } from 'react';

import { useNavigate } from 'react-router-dom';

import { toast } from 'react-toastify';

import { useSelector, useDispatch } from 'react-redux';
import { login, reset } from '../../features/auth/authSlice';

import './Login.scss';

const Login = () => {
	// Set user state
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		password: '',
		confirmPassword: '',
	});

	const { email, password } = formData;

	const navigate = useNavigate();
	const dispatch = useDispatch();

	const { user, isError, isSuccess, message } = useSelector(
		(state) => state.auth
	);

	useEffect(() => {
		if (isError) {
			toast.error(message);
		}
		if (isSuccess || user) {
			navigate('/');
		}

		dispatch(reset());
	}, [user, isError, isSuccess, message, navigate, dispatch]);

	const onChange = (e) => {
		setFormData((prevState) => ({
			...prevState,
			[e.target.name]: e.target.value,
		}));
	};

	const onSubmit = (e) => {
		e.preventDefault();

		const userData = {
			email,
			password,
		};

		dispatch(login(userData));
	};

	return (
		<div className='login'>
			<h1>Login User</h1>
			<h2> demo account: email: 'demo@gatsby.com' password: 'demo123'</h2>
			<form onSubmit={onSubmit}>
				<input
					type='email'
					placeholder='Your Email'
					className='email'
					name='email'
					value={email}
					onChange={onChange}
				/>
				<input
					type='password'
					placeholder='Your Password'
					className='password'
					name='password'
					value={password}
					onChange={onChange}
				/>
				<button className='button-27'>Log in</button>
			</form>
		</div>
	);
};

export default Login;
