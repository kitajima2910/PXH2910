import './App.css';
import {
	createBrowserRouter,
	RouterProvider,
} from "react-router-dom";
import ErrorPage from './components/ErrorPage';
import Home from './components/Home';
import Games from './components/Games';
import Tools from './components/Tools';
import Pages from "./components/Pages";
import Gallery from './components/Gallery';

const router = createBrowserRouter([
	{
		path: "/",
		element: <Home />,
		errorElement: <ErrorPage />,
		children: [
			{ path: "Games", element: <Games /> },
			{ path: "Tools", element: <Tools /> },
			{ 
				path: "Pages", 
				element: <Pages /> ,
				children: [
					{ path: "Gallery", element: <Gallery /> },
				]
			},

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
