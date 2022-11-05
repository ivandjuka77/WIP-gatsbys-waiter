import { useEffect } from 'react';

import { useNavigate } from 'react-router-dom';

import { toast } from 'react-toastify';

import { useSelector, useDispatch } from 'react-redux';
import { logout, reset } from '../../features/auth/authSlice';

import './Payout.scss';

const Payout = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const score = useSelector((state) => state.soldSum.value);
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

	// Logout user, end shift
	const endShift = () => {
		dispatch(logout());
		dispatch(reset());
		navigate('/login');
		toast.success('Finished Shift', {
			toastId: 'endShift',
		});
	};

	return (
		<div className='payout'>
			<div className='payout-inner'>
				<h1>Hello, {user.name}</h1>
				<h2> Shift details:</h2>
				<h3>Drinks sold: {score.drinksSold}</h3>
				<h3>Value of drinks sold: €{score.soldSum}</h3>
				<h3>Personal earnings: €{Math.floor(score.soldSum * 0.11)}</h3>
				<button
					className='button-27'
					onClick={endShift}
				>
					End shift
				</button>
			</div>
		</div>
	);
};

export default Payout;
