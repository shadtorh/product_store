import React from "react";
import { Link } from "react-router-dom";
// import useProductStore from "../store/product";
// import Pagination from "./Pagination";

const ProductsList = ({ product, deleteProduct, updateProduct }) => {
	return (
		<div className="card w-full bg-base-100 shadow-md rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl">
			{/* Product Image */}
			<figure className="h-56 bg-gray-200">
				<img
					src={product.image}
					alt={product.name}
					className="w-full h-full object-cover"
				/>
			</figure>

			{/* Product Info */}
			<div className="card-body p-5">
				<h2 className="card-title text-lg font-bold text-gray-800">
					{product.name}
				</h2>
				<p className="text-gray-600 text-sm">
					Premium quality {product.name} available at the best price.
				</p>

				{/* Price & Actions */}
				<div className="card-actions flex justify-between items-center mt-4">
					<span className="text-xl font-semibold text-primary">
						${product.price}
					</span>

					{/* Action Buttons */}
					<div className="flex gap-2">
						<Link
							to={`/product/${product._id}`}
							state={{ product }}
							className="btn btn-outline btn-primary btn-sm transition-all duration-200 hover:scale-105"
						>
							View
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProductsList;
