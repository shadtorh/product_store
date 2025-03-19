import React, { useEffect } from "react";
import ProductsList from "../components/ProductsList";
import useProductStore from "../store/product";
import { Link } from "react-router-dom";

const Home = () => {
	const { fetchProducts, products, loading, error } = useProductStore();

	// Fetch products when the component mounts
	useEffect(() => {
		if (fetchProducts) fetchProducts();
	}, [fetchProducts]);

	return (
		<div className="container mx-auto p-4 sm:p-8 md:p-12 lg:p-16">
			<h1 className="text-4xl font-extrabold mb-10 text-center text-primary">
				Products
			</h1>

			{/* Loading Indicator */}
			{loading && (
				<div className="flex justify-center items-center">
					<div className="animate-spin rounded-full h-12 w-12 border-t-4 border-primary"></div>
				</div>
			)}

			{/* Error Message */}
			{error && <p className="text-center text-lg text-red-500">{error}</p>}

			{/* Show Products or "No Products Found" */}
			{!loading && !error && (
				<>
					{products.length > 0 ? (
						<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
							{products.map((product) => (
								<ProductsList key={product._id} product={product} />
							))}
						</div>
					) : (
						<div className="flex flex-col items-center mt-8">
							<p className="text-lg text-primary">No products found</p>
							<Link to="/add-product" className="btn btn-primary mt-4">
								Create Product
							</Link>
						</div>
					)}
				</>
			)}
		</div>
	);
};

export default Home;
