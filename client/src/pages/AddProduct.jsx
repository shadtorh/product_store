import React, { useState } from "react";
import { toast } from "react-toastify"; // Import toast
import useProductStore from "../store/product";
import { useNavigate } from "react-router-dom"; // ✅ Correct React Router hook

const AddProduct = () => {
	const [product, setProduct] = useState({
		name: "",
		price: "",
		image: "",
	});

	const [isSubmitting, setIsSubmitting] = useState(false);
	const { addProduct } = useProductStore();
	const navigate = useNavigate(); // ✅ UseNavigate hook

	// Handle form input changes
	const handleChange = (e) => {
		setProduct({ ...product, [e.target.name]: e.target.value });
	};

	const handleAddProduct = async (e) => {
		e.preventDefault();
		setIsSubmitting(true);

		const { success, message } = await addProduct(product);

		if (success) {
			toast.success("Product added successfully! 🎉"); // Success toast
			setProduct({ name: "", price: "", image: "" }); // Reset form
			setTimeout(() => {
				navigate("/"); // ✅ Redirect to Home page after success
			}, 1000); // Add a slight delay for better UX
		} else {
			toast.error(message || "Failed to add product."); // Error toast
		}
		setIsSubmitting(false); // Stop loading
	};

	return (
		<div className="w-full min-h-screen flex items-center justify-center bg-base-200 p-4">
			<div className="bg-base-100 shadow-lg rounded-lg p-6 w-full max-w-lg">
				<h1 className="text-3xl font-bold text-center text-primary mb-6">
					Add New Product
				</h1>
				<form onSubmit={handleAddProduct} className="space-y-4">
					{/* Product Name */}
					<div>
						<label className="label text-lg font-semibold">Product Name</label>
						<input
							type="text"
							name="name"
							value={product.name}
							onChange={handleChange}
							placeholder="Enter product name"
							className="input input-bordered w-full"
							required
						/>
					</div>

					{/* Price */}
					<div>
						<label className="label text-lg font-semibold">Price ($)</label>
						<input
							type="number"
							name="price"
							value={product.price}
							onChange={handleChange}
							placeholder="Enter price"
							className="input input-bordered w-full"
							required
						/>
					</div>

					{/* Image URL */}
					<div>
						<label className="label text-lg font-semibold">Image URL</label>
						<input
							type="text"
							name="image"
							value={product.image}
							onChange={handleChange}
							placeholder="Enter product image URL"
							className="input input-bordered w-full"
						/>
					</div>

					{/* Submit Button or Spinner */}
					<div className="flex justify-center">
						{isSubmitting ? (
							<div className="flex justify-center items-center space-x-2">
								<div className="w-8 h-8 border-4 border-t-4 border-primary rounded-full animate-spin"></div>
								<span>Submitting...</span>
							</div>
						) : (
							<button
								type="submit"
								className="btn btn-primary w-full hover:scale-105 transition-all duration-200"
							>
								Add Product
							</button>
						)}
					</div>
				</form>
			</div>
		</div>
	);
};

export default AddProduct;
