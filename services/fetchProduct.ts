import axios from "axios";
export const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || "https://fakestoreapi.com",
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000,
});

export async function fetchAllProducts() {
  try {
    const response = await apiClient.get(`/products`);
    return response.data;
  } catch (error) {
    console.error("Error fetching product:", error);
    throw error;
  }
}
