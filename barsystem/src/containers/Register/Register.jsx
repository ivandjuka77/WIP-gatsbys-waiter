import { useState, useEffect } from 'react';

import { useNavigate } from 'react-router-dom';

import { toast } from 'react-toastify';

import { useSelector, useDispatch } from 'react-redux';
import { register, reset } from '../../features/auth/authSlice';

import './Register.scss';

const Register = () => {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		password: '',
		confirmPassword: '',
	});

	const { name, email, password, confirmPassword } = formData;

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

		if (password !== confirmPassword) {
			toast.error('Passwords do not match');
		} else {
			const userData = {
				name,
				email,
				password,
			};

			dispatch(register(userData));
		}
	};

	return (
		<div className='register'>
			<h1> Register User </h1>
			<h2> Please register your account to use our services.</h2>
			<form onSubmit={onSubmit}>
				<input
					type='text'
					placeholder='Your Name'
					className='name'
					name='name'
					value={name}
					onChange={onChange}
				/>
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
				<input
					type='password'
					placeholder='Your password'
					className='confirmPassword'
					name='confirmPassword'
					value={confirmPassword}
					onChange={onChange}
				/>
				<button className='button-27'>Register</button>
			</form>
		</div>
	);
};

export default Register;
