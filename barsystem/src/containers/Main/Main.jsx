import { useEffect } from 'react';

import { Link, useNavigate } from 'react-router-dom';

import { toast } from 'react-toastify';

import { useSelector } from 'react-redux';

import './Main.scss';

export default function Main() {
	const navigate = useNavigate();

	const { user } = useSelector((state) => state.auth);

	// Check if user is logged in
	useEffect(() => {
		if (!user) {
			navigate('/login');
			toast.error('Please Log In', {
				toastId: 'main',
			});
		}
	}, [user, navigate]);

	return (
		<div className='main'>
			<h1>Welcome to the Gatsby Bar System. Please select your menu.</h1>
			<Link to='/tables'>
				<button
					className='button-27'
					id='main-btn1'
				>
					Tables Overview
				</button>
			</Link>
			<Link to='/inventory'>
				<button
					className='button-27'
					id='main-btn2'
				>
					Inventory
				</button>
			</Link>
			<Link to='/payout'>
				<button
					className='button-27'
					id='main-btn3'
				>
					Payout
				</button>
			</Link>
		</div>
	);
}
