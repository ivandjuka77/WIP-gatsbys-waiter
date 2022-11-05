import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Login, Main, Register, Tables, Inventory, Payout } from './containers';
import { Header } from './components';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App() {
	return (
		<>
			<Router>
				<div>
					<Header />
					<Routes>
						<Route
							path='/'
							element={<Main />}
						/>
						<Route
							path='/login'
							element={<Login />}
						/>
						<Route
							path='/register'
							element={<Register />}
						/>
						<Route
							path='/tables'
							element={<Tables />}
						/>
						<Route
							path='/inventory'
							element={<Inventory />}
						/>
						<Route
							path='/payout'
							element={<Payout />}
						/>
					</Routes>
				</div>
			</Router>
			<ToastContainer />
		</>
	);
}
