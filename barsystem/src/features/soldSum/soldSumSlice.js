import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	value: {
		drinksSold: 0,
		soldSum: 0,
	},
};

export const soldSumSlice = createSlice({
	name: 'soldSum',
	initialState: initialState,
	reducers: {
		drinksSold: (state, action) => {
			state.value.drinksSold += action.payload;
		},
		soldSum: (state, action) => {
			state.value.soldSum += action.payload;
		},
	},
});

export const { drinksSold, soldSum } = soldSumSlice.actions;

export default soldSumSlice.reducer;
