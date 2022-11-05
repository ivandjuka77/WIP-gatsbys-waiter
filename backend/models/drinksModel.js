const mongoose = require('mongoose');

const drinksSchema = mongoose.Schema({
	drinkName: {
		type: String,
		required: true,
	},
	type: {
		type: String,
		required: true,
	},
	mlSize: {
		type: Number,
		required: true,
	},
	alcoholic: {
		type: Boolean,
		required: true,
	},
	carbonated: {
		type: Boolean,
		required: true,
	},
	amount: {
		type: Number,
		required: true,
	},
	price: {
		type: Number,
		required: true,
	},
});

module.exports = mongoose.model('Drinks', drinksSchema);
