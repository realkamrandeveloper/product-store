import { create } from "zustand";

export const useProductStore = create((set) => ({
  products: [],

  setProducts: (products) => set({ products }),

  createProduct: async (newProduct) => {
    if (!newProduct.name || !newProduct.price || !newProduct.image) {
      return { success: false, message: "Please fill in all fields." };
    }

    try {
      const res = await fetch("/api/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newProduct),
      });

      const data = await res.json();

      if (!data.success) {
        return { success: false, message: data.message || "Failed to create." };
      }

      set((state) => ({ products: [...state.products, data.data] }));
      return { success: true, message: "Product created successfully" };
    } catch (error) {
      return { success: false, message: error.message || "Server error" };
    }
  },

  fetchProducts: async () => {
    try {
      const res = await fetch("/api/products");
      const data = await res.json();

      if (!data.success) {
        return { success: false, message: data.message || "Failed to fetch." };
      }

      set({ products: data.data });
      return { success: true, message: "Fetched" };
    } catch (error) {
      return { success: false, message: error.message || "Server error" };
    }
  },

  deleteProduct: async (pid) => {
    try {
      const res = await fetch(`/api/products/${pid}`, { method: "DELETE" });
      const data = await res.json();

      if (!data.success) {
        return { success: false, message: data.message || "Failed to delete." };
      }

      set((state) => ({
        products: state.products.filter((p) => p._id !== pid),
      }));

      return { success: true, message: "Product deleted" };
    } catch (error) {
      return { success: false, message: error.message || "Server error" };
    }
  },

  updateProduct: async (pid, updatedProduct) => {
    try {
      const res = await fetch(`/api/products/${pid}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedProduct),
      });

      const data = await res.json();

      if (!data.success) {
        return { success: false, message: data.message || "Failed to update." };
      }

      set((state) => ({
        products: state.products.map((p) => (p._id === pid ? data.data : p)),
      }));

      return { success: true, message: "Product updated" };
    } catch (error) {
      return { success: false, message: error.message || "Server error" };
    }
  },
}));
