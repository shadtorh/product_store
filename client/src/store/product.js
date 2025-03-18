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

		if (!newProduct.name) {
			return { success: false, message: "Name is required" };
		}
		if (!newProduct.price) {
			return { success: false, message: "Price is required" };
		}
		if (!newProduct.image) {
			return { success: false, message: "Image is required" };
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
			set((state) => ({ products: [...state.products, data.data] }));

			return { success: true, message: "Product created successfully" };
		} catch (error) {
			return { success: false, message: error.message };
		} finally {
			set({ loading: false });
		}
	},
	deleteProduct: async (id) =>
		set({ loading: true, error: null }, async () => {
			try {
				await fetch(`${API_URL}/${id}`, {
					method: "DELETE",
				});
				set({ products: products.filter((product) => product._id !== id) });
			} catch (error) {
				set({ "error message": error.message });
			}
			set({ loading: false });
		}),
	fetchProducts: async () => {
		set({ loading: true, error: null });
		try {
			const response = await fetch(API_URL);
			const data = await response.json();

			set({ products: data.data });
		} catch (error) {
			set({ "error message": error.message });
		}
		set({ loading: false });
	},
}));

export default useProductStore;
