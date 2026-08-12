import axios from "axios";

const API_URL = "http://localhost:5000/api/products";

// Get products
export const getProducts = async () => {
  const response = await axios.get(API_URL);

  return response.data;
};

// Add product
export const createProduct = async (formData) => {
  const response = await axios.post(
    API_URL,
    formData
  );

  return response.data;
};