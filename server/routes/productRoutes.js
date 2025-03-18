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

export default router;
