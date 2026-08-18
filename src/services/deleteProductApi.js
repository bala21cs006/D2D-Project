import axios from "axios";

const API_URL = "http://localhost:5000/api/products";

export const deleteProduct = async (id) => {
  try {
    const response = await axios.delete(
      `${API_URL}/${id}`
    );

    return response.data;

  } catch (error) {
    console.error(
      "DELETE PRODUCT API ERROR:",
      error.response?.data || error.message
    );

    throw error;
  }
};