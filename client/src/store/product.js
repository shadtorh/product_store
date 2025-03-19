import { create } from "zustand";

const API_URL = "http://localhost:5000/api/products";

const useProductStore = create((set) => ({
	products: [],
	loading: false,
	error: null,

	setProducts: (products) => set({ products }),
	setLoading: (loading) => set({ loading }),
	setError: (error) => set({ error }),

	addProduct: async (newProduct) => {
		set({ loading: true, error: null });

		// Validate input fields
		if (!newProduct.name || !newProduct.price || !newProduct.image) {
			return { success: false, message: "All fields are required" };
		}

		try {
			const response = await fetch(API_URL, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(newProduct),
			});
			const data = await response.json();

			if (!response.ok)
				throw new Error(data.message || "Failed to add product");

			set((state) => ({ products: [...state.products, data.data] }));
			return { success: true, message: "Product created successfully" };
		} catch (error) {
			set({ error: error.message });
			return { success: false, message: error.message };
		} finally {
			set({ loading: false });
		}
	},

	deleteProduct: async (id) => {
		set({ loading: true, error: null });

		try {
			const response = await fetch(`${API_URL}/${id}`, {
				method: "DELETE",
			});
			const data = await response.json();

			if (!response.ok)
				throw new Error(data.message || "Failed to delete product");

			set((state) => ({
				products: state.products.filter((product) => product._id !== id),
			}));

			return { success: true, message: "Product deleted successfully" };
		} catch (error) {
			set({ error: error.message });
			return { success: false, message: error.message };
		} finally {
			set({ loading: false });
		}
	},

	fetchProducts: async () => {
		set({ loading: true, error: null });

		try {
			const response = await fetch(API_URL);
			const data = await response.json();

			if (!response.ok)
				throw new Error(data.message || "Failed to fetch products");

			set({ products: data.data });
		} catch (error) {
			set({ error: error.message });
			return; // Stop execution if error occurs
		} finally {
			set({ loading: false });
		}
	},

	updateProduct: async (id, updatedProduct) => {
		set({ loading: true, error: null });

		try {
			const response = await fetch(`${API_URL}/${id}`, {
				method: "PUT",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(updatedProduct),
			});
			const data = await response.json();

			if (!response.ok)
				throw new Error(data.message || "Failed to update product");

			set((state) => ({
				products: state.products.map((product) =>
					product._id === id ? data.data : product
				),
			}));

			return { success: true, message: "Product updated successfully" };
		} catch (error) {
			set({ error: error.message });
			return { success: false, message: error.message };
		} finally {
			set({ loading: false });
		}
	},
}));

export default useProductStore;
