import React, { useEffect } from "react";
import ProductsList from "../components/ProductsList";
import useProductStore from "../store/product";

const Home = () => {
	const { fetchProducts, products, loading, error } = useProductStore();

	useEffect(() => {
		fetchProducts();
	}, [fetchProducts]);

	return (
		<div className="container mx-auto p-4 sm:p-8 md:p-12 lg:p-16">
			<h1 className="text-4xl font-extrabold mb-10 text-center text-primary">
				Products
			</h1>

			{loading && (
				<p className="loading  text-9xl text-primary animate-spin"></p>
			)}
			{error && <p className="text-center text-lg text-red-500">{error}</p>}

			{/* Responsive Grid for Products */}
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
				{!loading &&
					!error &&
					products.map((product) => (
						<ProductsList key={product._id} product={product} />
					))}
			</div>
		</div>
	);
};

export default Home;
