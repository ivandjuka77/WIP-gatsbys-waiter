import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { drinksSold, soldSum } from '../../features/soldSum/soldSumSlice';
import { returnDrinks } from '../../features/drinks/drinksSlice';
import { display } from '../../features/drinkInfo/drinkInfoSlice';

import './PopupDrink.scss';

const PopupDrink = () => {
	const dispatch = useDispatch();

	dispatch(returnDrinks());

	// State for drink order amount
	const [amountForm, setAmountForm] = useState(0);

	// Get drinks from localStorage
	const data = JSON.parse(localStorage.getItem('drinks'));

	const drinkInfo = useSelector((state) => state.drinkInfo.value);
	const popupDisplay = useSelector((state) => state.drinkInfo.display);

	// Set currentDrink to the clicked drink, get data from localStorage
	let currentDrink = {};
	data.forEach((x) => {
		if (x.drinkName === drinkInfo.drinkName) {
			currentDrink = x;
		}
	});

	// Close popup
	const onClick = () => {
		dispatch(display(false));
	};

	const addSum = (e) => {
		e.preventDefault();

		if (currentDrink.amount < amountForm || currentDrink.amount < 0) {
			alert('Please order more drinks');
		} else {
			dispatch(drinksSold(Number(amountForm)));
			dispatch(soldSum(Number(currentDrink.price * amountForm)));

			//POSTMAN Fetch API PUT request to update drink amount
			var myHeaders = new Headers();
			myHeaders.append('Content-Type', 'application/x-www-form-urlencoded');

			var urlencoded = new URLSearchParams();
			urlencoded.append('amount', currentDrink.amount - amountForm);

			var requestOptions = {
				method: 'PUT',
				headers: myHeaders,
				body: urlencoded,
				redirect: 'follow',
			};

			fetch(`/api/inventory/update/${currentDrink._id}`, requestOptions)
				.then((response) => response.text())
				.then((result) => console.log(result))
				.catch((error) => console.log('error', error));

			// Close popup
			dispatch(display(false));
		}
	};

	return popupDisplay ? (
		<div className='popup-drink'>
			<div className='popup-drink-inner'>
				<h1>{currentDrink.drinkName}</h1>
				<h2>Type: {currentDrink.type}</h2>
				<h2>Size: {currentDrink.mlSize}ml</h2>
				<h2>Carbonated: {currentDrink.carbonated ? 'Yes' : 'No'}</h2>
				<h2>Alcoholic: {currentDrink.alcoholic ? 'Yes' : 'No'}</h2>
				<h2>Price: €{currentDrink.price}</h2>
				<h2>In stock: {currentDrink.amount}</h2>
				<button
					className='info-btn-close'
					onClick={onClick}
				>
					Close
				</button>
				<form
					className='order-form'
					onSubmit={addSum}
				>
					<label htmlFor='num'>Order amount </label>
					<input
						id={'num'}
						type='number'
						onChange={(e) => setAmountForm(e.target.value)}
					/>
					<button>Order</button>
				</form>
			</div>
		</div>
	) : (
		''
	);
};

export default PopupDrink;
