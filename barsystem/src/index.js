import React from 'react';

import App from './App';
import { store } from './app/store';

import { createRoot } from 'react-dom/client';

import { Provider } from 'react-redux';

import './index.css';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>
);
