import axios from 'axios';

const API_URL = 'http://localhost:5000/api/inventory/';

// Get drinks
const getDrinks = async (drinks) => {
	const response = await axios.get(API_URL, drinks);
	if (response.data) {
		localStorage.setItem('drinks', JSON.stringify(response.data));
	}

	return response.data;
};

const drinksService = {
	getDrinks,
};

export default drinksService;
