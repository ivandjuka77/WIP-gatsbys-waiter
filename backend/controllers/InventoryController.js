const asyncHandler = require('express-async-handler');
const Drinks = require('../models/drinksModel');

// @desc Get all drinks from DB
// @route get /api/inventory/
// @access PRIVATE
const getDrinks = asyncHandler(async (req, res) => {
	const drinks = await Drinks.find();
	res.status(200).json(drinks);
});

// @desc Update drink from DB
// @route get /api/inventory/update/:id
// @access PRIVATE
const updateDrinks = asyncHandler(async (req, res) => {
	const drink = await Drinks.findById(req.params.id);

	if (!drink) {
		throw new Error('Drink not found.');
	}

	const updatedDrink = await Drinks.findByIdAndUpdate(req.params.id, req.body);
	res.status(200).json({ message: `Updated drink ${req.params.id}` });
});

module.exports = {
	getDrinks,
	updateDrinks,
};
