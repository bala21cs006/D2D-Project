import axios from "axios";

const API_URL = "http://localhost:5000/api/products";

export const createProduct = async (formData) => {
  try {
    const response = await axios.post(
      API_URL,
      formData
    );

    return response.data;
  } catch (error) {
    console.error(
      "CREATE PRODUCT API ERROR:",
      error.response?.data || error.message
    );

    throw error;
  }
};