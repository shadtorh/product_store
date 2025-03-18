import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const ViewDetails = () => {
	const location = useLocation();
	const navigate = useNavigate();

	// Get product from location state
	const product = location.state?.product;

	// If no product found, go back to home
	if (!product) {
		navigate("/");
		return null;
	}

	return (
		<div className="container mx-auto flex flex-col items-center justify-center p-4 sm:p-8 md:p-12 lg:p-16">
			<div className="card w-full md:w-2/3 lg:w-1/2 bg-white shadow-lg rounded-xl p-6">
				<figure className="w-full h-72 bg-gray-100 rounded-xl overflow-hidden">
					<img
						src={product.image}
						alt={product.name}
						className="w-full h-full object-cover"
					/>
				</figure>
				<div className="card-body text-center">
					<h2 className="text-2xl font-bold text-gray-800">{product.name}</h2>
					{/* <p className="text-gray-600 mt-2">
						{product.description || "No description available."}
					</p> */}
					<p className="text-gray-600 text-sm">
						Premium quality {product.name} available at the best price.
					</p>
					<span className="text-xl font-semibold text-primary mt-4 block">
						${product.price}
					</span>
				</div>
				<button
					className="btn btn-outline btn-error btn-sm transition-all duration-200 hover:scale-105"
					onClick={() => deleteProduct(product._id)}
				>
					Delete
				</button>
				<button
					className="btn btn-outline btn-success btn-sm transition-all duration-200 hover:scale-105"
					onClick={() => updateProduct(product._id)}
				>
					Edit
				</button>
			</div>
			<div className="flex justify-center mt-8">
				<button className="btn btn-primary" onClick={() => navigate("/")}>
					Back to Home
				</button>
			</div>
		</div>
	);
};

export default ViewDetails;
