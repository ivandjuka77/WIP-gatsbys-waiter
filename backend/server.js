const path = require('path');
const express = require('express');
const dotenv = require('dotenv').config();
const colors = require('colors');
const { errorHandler } = require('./middleware/errorMiddleware');
const connectDB = require('./config/db');
const cors = require('cors');
const port = process.env.PORT || 5000;

// Connects to DB
connectDB();

// Initializes express
const app = express();

// Fixes cors error
app.use(cors());

// Middleware that allows express to read from body (eg. console.log(req.body) won't work without these lines)
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Sets up routes
app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/inventory', require('./routes/inventoryRoutes'));

// Serve frontend
if (process.env.NODE_ENV === 'production') {
	app.use(express.static(path.join(__dirname, '../barsystem/build')));

	app.get('*', (req, res) =>
		res.sendFile(
			path.resolve(__dirname, '../', 'barsystem', 'build', 'index.html')
		)
	);
}
// Replaces default error handler
app.use(errorHandler);

// Express listens if server is started
app.listen(port, () => console.log(`Port running on ${port}`));
