import React from "react";
import Navbar from "./components/Navbar";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import AddProduct from "./pages/AddProduct";
import Layout from "./pages/Layout";
import Error from "./components/Error";
import ViewDetails from "./components/ViewDetails";
import { ToastContainer } from "react-toastify"; // Import ToastContainer
import "react-toastify/dist/ReactToastify.css"; // Import Toastify CSS

const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		errorElement: <Error />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "/add-product",
				element: <AddProduct />,
			},
			{
				path: "product/:id",
				element: <ViewDetails />,

				// Add more routes as needed...
			},
		],
	},
]);

const App = () => {
	return (
		<>
			<ToastContainer
				position="top-right"
				autoClose={3000}
				hideProgressBar={false}
			/>

			<RouterProvider router={router} />
		</>
	);
};

export default App;
