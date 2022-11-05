import React from 'react';
import { useDispatch } from 'react-redux';
import { selected, display } from '../../features/drinkInfo/drinkInfoSlice';

import './Table.scss';

const Table = () => {
	const dispatch = useDispatch();

	// Get drinks from local storage
	const data = JSON.parse(localStorage.getItem('drinks'));

	// Display popup
	let onClick = (e) => {
		dispatch(selected({ drinkName: e.target.id }));
		dispatch(display(true));
	};

	return (
		<table className='styled-table'>
			<thead>
				<tr className='first-row'>
					<th>Drink</th>
					<th>Price</th>
					<th>Amount</th>
				</tr>
			</thead>
			<tbody>
				{data.map((el) => (
					<tr key={el._id}>
						<th
							onClick={onClick}
							style={{ cursor: 'pointer' }}
							id={el.drinkName}
						>
							{el.drinkName}
						</th>
						<th>€ {el.price}</th>
						<th>{el.amount}</th>
					</tr>
				))}
			</tbody>
		</table>
	);
};

export default Table;
