import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useProductStore from "../store/product";
import { toast } from "react-toastify";

const ViewDetails = () => {
	const location = useLocation();
	const navigate = useNavigate();
	const { deleteProduct, updateProduct } = useProductStore();

	// Get product from location state
	const product = location.state?.product;

	// Redirect if no product is found
	useEffect(() => {
		if (!product) {
			navigate("/");
			toast.error("Product not found");
		}
	}, [product, navigate]);

	if (!product) return null; // Prevent rendering if product is undefined

	const handleDeleteProduct = async (id) => {
		try {
			await deleteProduct(id);
			toast.success("Product deleted successfully!");
			navigate("/");
		} catch (error) {
			toast.error(error.message || "Failed to delete product.");
		}
	};

	const handleUpdateProduct = async () => {
		navigate(`/edit-product/${product._id}`, { state: { product } });
	};

	return (
		<div className="container mx-auto flex flex-col items-center justify-center p-4 sm:p-8 md:p-12 lg:p-16">
			<div className="card w-full md:w-2/3 lg:w-1/2 bg-white shadow-lg rounded-xl p-6">
				{/* Product Image */}
				<figure className="w-full h-72 bg-gray-100 rounded-xl overflow-hidden">
					<img
						src={product.image}
						alt={product.name}
						className="w-full h-full object-cover"
					/>
				</figure>

				{/* Product Details */}
				<div className="card-body text-center">
					<h2 className="text-2xl font-bold text-gray-800">{product.name}</h2>
					<p className="text-gray-600 text-sm">
						Premium quality {product.name} available at the best price.
					</p>
					<span className="text-xl font-semibold text-primary mt-4 block">
						${product.price}
					</span>
				</div>

				{/* Action Buttons */}
				<div className="flex justify-between mt-4">
					<button
						className="btn btn-outline btn-error btn-sm transition-all duration-200 hover:scale-105"
						onClick={() => handleDeleteProduct(product._id)}
					>
						Delete
					</button>
					<button
						className="btn btn-outline btn-success btn-sm transition-all duration-200 hover:scale-105"
						onClick={handleUpdateProduct}
					>
						Edit
					</button>
				</div>
			</div>

			{/* Back Button */}
			<div className="flex justify-center mt-8">
				<button className="btn btn-primary" onClick={() => navigate("/")}>
					Back to Home
				</button>
			</div>
		</div>
	);
};

export default ViewDetails;
