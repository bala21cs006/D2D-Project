import axios from "axios";

const API_URL = "http://localhost:5000/api/products";

// ==================================================
// ADD PRODUCT
// ==================================================

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

// ==================================================
// GET ALL PRODUCTS
// ==================================================

export const getProducts = async () => {
  try {
    const response = await axios.get(
      API_URL
    );

    return response.data;

  } catch (error) {
    console.error(
      "GET PRODUCTS API ERROR:",
      error.response?.data || error.message
    );

    throw error;
  }
};

// ==================================================
// GET SINGLE PRODUCT
// ==================================================

export const getProductById = async (id) => {
  try {
    const response = await axios.get(
      `${API_URL}/${id}`
    );

    return response.data;

  } catch (error) {
    console.error(
      "GET SINGLE PRODUCT API ERROR:",
      error.response?.data || error.message
    );

    throw error;
  }
};

// ==================================================
// UPDATE PRODUCT
// ==================================================

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

// ==================================================
// DELETE PRODUCT
// ==================================================

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