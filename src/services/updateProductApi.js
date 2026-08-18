import axios from "axios";

const API_URL = "http://localhost:5000/api/products";

export const updateProduct = async (id, data) => {
  try {
    const response = await axios.put(
      `${API_URL}/${id}`,
      {
        name: data.name,
        category: data.category,
        rating: Number(data.rating),
      }
    );

    return response.data;

  } catch (error) {
    console.error(
      "UPDATE PRODUCT API ERROR:",
      error.response?.data || error.message
    );

    throw error;
  }
};