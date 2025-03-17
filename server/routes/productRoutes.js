import express from "express";
import Product from "../models/Product.js";
import {
	createProduct,
	getAllProducts,
	getSingleProduct,
	updateProduct,
	deleteProduct,
} from "../controllers/productController.js";
const router = express.Router();

// Create a new product
router.post("/", createProduct);

router.get("/", getAllProducts);

router.get("/:id", getSingleProduct);

router.put("/:id", updateProduct);

// Delete a product
router.delete("/:id", deleteProduct);

// Get a product by name
// router.get("/name/:name", async (req, res) => {
// 	const product = await Product.findOne({ name: req.params.name });
// 	res.status(200).json(product);
// });

export default router;
