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
// import PortfolioArtKidGarden from './components/Portfolio_Art_Kid_Garden';

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
					// { path: "Portfolio_Art_Kid_Garden", element: <PortfolioArtKidGarden /> },
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
