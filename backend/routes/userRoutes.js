const express = require('express');
const router = express.Router();
const {
	registerUser,
	loginUser,
	getMe,
} = require('../controllers/userController');
const { protect } = require('../middleware/authMiddleware');

// Routes
router.post('/login', loginUser);
router.post('/', registerUser);
router.get('/info', protect, getMe);

module.exports = router;
