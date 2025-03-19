import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";

import productRoutes from "./routes/productRoutes.js";
import cors from "cors";
import path from "path";

dotenv.config();
connectDB();

const app = express();

const PORT = process.env.PORT || 5000;

const __dirname = path.resolve();

app.use(cors());
app.use(express.json());

app.use("/api/products", productRoutes);

if (process.env.NODE_ENV === "production") {
	app.use(express.static(path.join(__dirname, "/client/dist")));

	app.get("*", (req, res) =>
		res.sendFile(path.resolve(__dirname, "client", "dist", "index.html"))
	);
} else {
	app.get("/", (req, res) => {
		res.send("API is running");
	});
}

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
