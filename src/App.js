import './App.css';
import {
	createBrowserRouter,
	RouterProvider,
} from "react-router-dom";
import ErrorPage from './components/ErrorPage';
import Home from './components/Home';
import Games from './components/Games';
import Tools from './components/Tools';

const router = createBrowserRouter([
	{
		path: "/",
		element: <Home />,
		errorElement: <ErrorPage />,
		children: [
			{ path: "/Games", element: <Games /> },
			{ path: "/Tools", element: <Tools /> },
		]

	},

]);

function App() {
	return (
		<div className='App'>
			<RouterProvider router={router} />
		</div>
	);
}

export default App;
