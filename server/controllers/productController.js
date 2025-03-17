import Product from "../models/Product.js";
import mongoose from "mongoose";

// Create a new product
export const createProduct = async (req, res) => async (req, res) => {
	const product = req.body;

	if (!product.name) {
		return res.status(400).json({ message: "Name is required" });
	}

	if (!product.price) {
		return res.status(400).json({ message: "Price is required" });
	}

	if (!product.image) {
		return res.status(400).json({ message: "Image is required" });
	}

	const newProduct = new Product(product);
	try {
		await newProduct.save();
		res
			.status(201)
			.json({ message: "Product created successfully", newProduct });
	} catch (error) {
		console.log(error);
		res.status(500).json({ message: error.message });
	}
};
// Get all products
export const getAllProducts = async (req, res) => {
	try {
		const getProducts = await Product.find();
		res.status(200).json(getProducts);
	} catch (error) {
		console.log(error);
		res.status(500).json({ message: error.message });
	}
};
// Get a single product
export const getSingleProduct = async (req, res) => {
	const { id } = req.params;

	try {
		const getSingleProduct = await Product.findById(id);
		res.status(200).json(getSingleProduct);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};
// Update a product
export const updateProduct = async (req, res) => {
	const { id } = req.params;
	const { name, price, image } = req.body;

	// 404 if product not found using mongoose.Types.ObjectId.isValid
	if (!mongoose.Types.ObjectId.isValid(id)) {
		return res.status(404).json({ message: "Product not found" });
	}

	try {
		const updatedProduct = await Product.findByIdAndUpdate(
			id,
			{
				name,
				price,
				image,
			},
			{ new: true }
		);
		res
			.status(200)
			.json({ message: "Product updated successfully", updatedProduct });
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};
// Delete a product
export const deleteProduct = async (req, res) => {
	const { id } = req.params;

	try {
		const deletedProduct = await Product.findByIdAndDelete(id);
		res
			.status(200)
			.json({ message: "Product deleted successfully", deletedProduct });
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};
