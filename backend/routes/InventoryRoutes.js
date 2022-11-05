const express = require('express');
const router = express.Router();
const {
	getDrinks,
	updateDrinks,
} = require('../controllers/InventoryController');

// Routes
router.get('/', getDrinks);
router.put('/update/:id', updateDrinks);

module.exports = router;
