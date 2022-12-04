import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Article from './component/Article';
import Connexion from './component/Connexion';
import Inscription from './component/Inscription';
import './index.css';
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
	},
	{
		path: '/articles/:id',
		element: <Article />,
	},
	{
		path: '/connexion',
		element: <Connexion/>,
	},
	{
		path: '/inscription',
		element: <Inscription/>,
	}
]);

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
