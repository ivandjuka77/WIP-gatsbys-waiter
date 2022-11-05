import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import drinksReducer from '../features/drinks/drinksSlice';
import drinkInfoReducer from '../features/drinkInfo/drinkInfoSlice';
import soldSumReducer from '../features/soldSum/soldSumSlice';

export const store = configureStore({
	reducer: {
		auth: authReducer,
		drink: drinksReducer,
		drinkInfo: drinkInfoReducer,
		soldSum: soldSumReducer,
	},
});
