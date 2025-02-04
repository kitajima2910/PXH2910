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
import Code from './components/Code';
import GetYoutubeVideoThumbnailImage from './components/Get_Youtube_Video_Thumbnail_Image';
// import PortfolioArtKidGarden from './components/Portfolio_Art_Kid_Garden';

const router = createBrowserRouter([
	{
		path: "/",
		element: <Home />,
		errorElement: <ErrorPage />,
		children: [
			{ path: "Games", element: <Games /> },
			{ 
				path: "Tools", 
				element: <Tools />,
				children: [
					{ path: "Get-YouTube-Video-Thumbnail-Image", element: <GetYoutubeVideoThumbnailImage /> },
				]
			},
			{ 
				path: "Pages", 
				element: <Pages /> ,
				children: [
					{ path: "Gallery", element: <Gallery /> },
					// { path: "Portfolio_Art_Kid_Garden", element: <PortfolioArtKidGarden /> },
				]
			},
			{
				path: "Code",
				element: <Code />
			}

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
