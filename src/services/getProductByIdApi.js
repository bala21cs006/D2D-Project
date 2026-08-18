import axios from "axios";

const API_URL = "http://localhost:5000/api/products";

export const getProductById = async (id) => {
  try {
    const response = await axios.get(
      `${API_URL}/${id}`
    );

    return response.data;

  } catch (error) {
    console.error(
      "GET PRODUCT BY ID API ERROR:",
      error.response?.data || error.message
    );

    throw error;
  }
};