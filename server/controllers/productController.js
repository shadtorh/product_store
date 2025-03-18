import Product from "../models/Product.js";
import mongoose from "mongoose";

// Create a new product
export const createProduct = async (req, res) => {
	try {
		const { name, price, image } = req.body;

		if (!areFieldsValid(name, price, image)) {
			return res
				.status(400)
				.json({ success: false, message: "All fields are required" });
		}

		const newProduct = await Product.create({ name, price, image });

		res.status(201).json({
			success: true,
			message: "Product created successfully",
			data: newProduct,
		});
	} catch (error) {
		res.status(500).json({ success: false, message: error.message });
	}
};

const areFieldsValid = (name, price, image) => {
	return !(!name || !price || !image);
};

// Get all products
export const getAllProducts = async (req, res) => {
	try {
		const getProducts = await Product.find();
		// console.log("Fetched products:", getProducts);

		res.status(200).json({
			success: true,
			message: "Products fetched successfully",
			data: getProducts,
		});
	} catch (error) {
		res.status(500).json({ success: false, message: error.message });
	}
};

// Get a single product by ID
export const getSingleProduct = async (req, res) => {
	const { id } = req.params;

	if (!mongoose.Types.ObjectId.isValid(id)) {
		return res
			.status(404)
			.json({ success: false, message: "Invalid product ID" });
	}

	try {
		const product = await Product.findById(id);
		if (!product) {
			return res
				.status(404)
				.json({ success: false, message: "Product not found" });
		}

		res.status(200).json({
			success: true,
			message: "Product fetched successfully",
			data: product,
		});
	} catch (error) {
		res.status(500).json({ success: false, message: error.message });
	}
};

// Update a product
export const updateProduct = async (req, res) => {
	const { id } = req.params;
	const { name, price, image } = req.body;

	if (!mongoose.Types.ObjectId.isValid(id)) {
		return res
			.status(404)
			.json({ success: false, message: "Invalid product ID" });
	}

	try {
		const updatedProduct = await Product.findByIdAndUpdate(
			id,
			{ name, price, image },
			{ new: true }
		);

		if (!updatedProduct) {
			return res
				.status(404)
				.json({ success: false, message: "Product not found" });
		}

		res.status(200).json({
			success: true,
			message: "Product updated successfully",
			data: updatedProduct,
		});
	} catch (error) {
		res.status(500).json({ success: false, message: error.message });
	}
};

// Delete a product
export const deleteProduct = async (req, res) => {
	const { id } = req.params;

	if (!mongoose.Types.ObjectId.isValid(id)) {
		return res
			.status(404)
			.json({ success: false, message: "Invalid product ID" });
	}

	try {
		const deletedProduct = await Product.findByIdAndDelete(id);
		if (!deletedProduct) {
			return res
				.status(404)
				.json({ success: false, message: "Product not found" });
		}

		res.status(200).json({
			success: true,
			message: "Product deleted successfully",
			data: deletedProduct,
		});
	} catch (error) {
		res.status(500).json({ success: false, message: error.message });
	}
};
