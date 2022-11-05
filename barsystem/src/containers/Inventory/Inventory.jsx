import { useEffect } from 'react';

import { useNavigate } from 'react-router-dom';

import { PopupDrink, Table } from '../../components';

import { toast } from 'react-toastify';

import { useSelector, useDispatch } from 'react-redux';
import { returnDrinks } from '../../features/drinks/drinksSlice';

import './Inventory.scss';

const Inventory = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const { user } = useSelector((state) => state.auth);

	// Check if user is logged in
	useEffect(() => {
		if (!user) {
			navigate('/login');
			toast.error('Please Log In', {
				toastId: 'inventory',
			});
		}

		dispatch(returnDrinks());
	}, [user, navigate, dispatch]);

	return (
		<div className='inventory'>
			<PopupDrink />
			<Table />
		</div>
	);
};

export default Inventory;
