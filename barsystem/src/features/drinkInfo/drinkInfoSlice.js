import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	display: false,
	value: {
		drinkName: 'Coca Cola',
		type: 'juice',
		mlSize: 250,
		alcoholic: false,
		carbonated: true,
		amount: 100,
		price: 2.5,
	},
};

export const drinkInfoSlice = createSlice({
	name: 'drinkInfo',
	initialState: initialState,
	reducers: {
		selected: (state, action) => {
			state.value = action.payload;
		},
		display: (state, action) => {
			state.display = action.payload;
		},
	},
});

export const { selected, display } = drinkInfoSlice.actions;

export default drinkInfoSlice.reducer;
