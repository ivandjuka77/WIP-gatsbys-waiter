const JWT = require('jsonwebtoken');
const asyncHandler = require('express-async-handler');
const User = require('../models/userModel');

const protect = asyncHandler(async (req, res, next) => {
	let token;

	if (
		req.headers.authorization &&
		req.headers.authorization.startsWith('Bearer')
	) {
		try {
			// Get token from header
			token = req.headers.authorization.split(' ')[1]; // The authorization is written as 'Bearer {token}' so by splitting this with space we create an array [Bearer, {token}] and [1] will access the 1st index or the token in this case.

			// Verify token
			const decoded = JWT.verify(token, process.env.JWT_SECRET);

			// Get user from token
			req.user = await User.findById(decoded.id).select('-password');

			// Goes to next middleware
			next();
		} catch (error) {
			console.log(error);
			res.status(401);
			throw new Error('Not authorized');
		}
	}

	if (!token) {
		res.status(401);
		throw new Error('Not authorized, no token');
	}
});

module.exports = { protect };
