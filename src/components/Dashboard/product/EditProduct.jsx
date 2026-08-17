import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";


import {
  getProductById,
  updateProduct,
} from "../../../services/productApi";

const EditProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    category: "",
    rating: "",
  });

  const [loading, setLoading] = useState(true);
  const [updating, setUpdating] = useState(false);
  const [error, setError] = useState("");

  // GET PRODUCT
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await getProductById(id);

        console.log("EDIT PRODUCT:", response);

        const product = response.product;

        setFormData({
          name: product.name || "",
          category: product.category || "",
          rating: product.rating ?? "",
        });
      } catch (error) {
        console.error(
          "GET PRODUCT ERROR:",
          error.response?.data || error
        );

        setError(
          error.response?.data?.message ||
            "Failed to load product"
        );
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  // INPUT CHANGE
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // UPDATE
  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");

    if (!formData.name.trim()) {
      setError("Product name is required");
      return;
    }

    if (!formData.category.trim()) {
      setError("Category is required");
      return;
    }

    if (formData.rating === "") {
      setError("Rating is required");
      return;
    }

    try {
      setUpdating(true);

      const data = {
        name: formData.name.trim(),
        category: formData.category.trim(),
        rating: Number(formData.rating),
      };

      console.log("UPDATE DATA:", data);

      const response = await updateProduct(id, data);

      console.log("UPDATE RESPONSE:", response);

      if (response.success) {
        alert("Product updated successfully");

        navigate("/admin-dashboard");
      } else {
        setError(
          response.message || "Update failed"
        );
      }
    } catch (error) {
      console.error(
        "UPDATE PRODUCT ERROR:",
        error.response?.data || error
      );

      setError(
        error.response?.data?.message ||
          "Failed to update product"
      );
    } finally {
      setUpdating(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Loading product...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">

      <div className="max-w-xl mx-auto bg-white rounded-2xl shadow p-8">

        <h1 className="text-2xl font-bold mb-6">
          Edit Product
        </h1>

        <form onSubmit={handleSubmit}>

          {/* NAME */}
          <div className="mb-5">
            <label className="block mb-2 font-semibold">
              Product Name
            </label>

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border rounded-lg p-3"
            />
          </div>

          {/* CATEGORY */}
          <div className="mb-5">
            <label className="block mb-2 font-semibold">
              Category
            </label>

            <input
              type="text"
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full border rounded-lg p-3"
            />
          </div>

          {/* RATING */}
          <div className="mb-5">
            <label className="block mb-2 font-semibold">
              Rating
            </label>

            <input
              type="number"
              name="rating"
              value={formData.rating}
              onChange={handleChange}
              min="0"
              max="5"
              step="0.1"
              className="w-full border rounded-lg p-3"
            />
          </div>

          {/* ERROR */}
          {error && (
            <div className="mb-5 bg-red-50 text-red-600 p-3 rounded-lg">
              {error}
            </div>
          )}

          {/* BUTTONS */}
          <div className="flex gap-3">

            <button
              type="button"
              onClick={() =>
                navigate("/admin-dashboard")
              }
              className="px-5 py-3 bg-gray-200 rounded-lg"
            >
              Cancel
            </button>

            <button
              type="submit"
              disabled={updating}
              className="px-5 py-3 bg-blue-600 text-white rounded-lg"
            >
              {updating
                ? "Updating..."
                : "Update Product"}
            </button>

          </div>

        </form>

      </div>

    </div>
  );
};

export default EditProduct;