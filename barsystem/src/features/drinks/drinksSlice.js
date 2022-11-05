import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import drinksService from './drinksService';

// Get drinks from local storage
const drinks = JSON.parse(localStorage.getItem('drinks'));

const initialState = {
	isError: false,
	isSuccess: false,
	isLoading: false,
	message: '',
};

// Return drinks
export const returnDrinks = createAsyncThunk(
	'drinks/returnDrinks',
	async (user, thunkAPI) => {
		try {
			return await drinksService.getDrinks();
		} catch (error) {
			const message =
				(error.response &&
					error.response.data &&
					error.response.data.message) ||
				error.message ||
				error.toString();
			return thunkAPI.rejectWithValue(message);
		}
	}
);

// Drink slice
export const drinkSlice = createSlice({
	name: 'drinks',
	initialState,
	reducers: {
		reset: (state) => initialState,
	},
	extraReducers: (builder) => {
		builder
			.addCase(returnDrinks.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(returnDrinks.fulfilled, (state, action) => {
				state.isLoading = false;
				state.isSuccess = true;
				state.goals = action.payload;
			})
			.addCase(returnDrinks.rejected, (state, action) => {
				state.isLoading = false;
				state.isError = true;
				state.message = action.payload;
			});
	},
});

export const { reset } = drinkSlice.actions;
export default drinkSlice.reducer;
