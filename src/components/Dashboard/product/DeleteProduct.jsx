import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FiTrash2 } from "react-icons/fi";
import { deleteProduct } from "../../../services/deleteProductApi";

const DeleteProduct = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleDelete = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await deleteProduct(id);

      console.log("DELETE RESPONSE:", response);

      if (response.success) {
        alert("Product deleted successfully");
        navigate("/admin-dashboard");
      } else {
        setError(
          response.message || "Failed to delete product"
        );
      }
    } catch (error) {
      console.error("DELETE PRODUCT ERROR:", error);

      setError(
        error.response?.data?.message ||
          "Failed to delete product"
      );
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = () => {
    navigate("/admin-dashboard");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">

      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg border border-slate-200 p-8 text-center">

        <div className="w-16 h-16 mx-auto rounded-full bg-red-50 flex items-center justify-center text-red-500">
          <FiTrash2 size={30} />
        </div>

        <h1 className="text-2xl font-bold text-slate-800 mt-5">
          Delete Product
        </h1>

        <p className="text-slate-500 mt-3">
          Are you sure you want to delete this product?
        </p>

        <p className="text-sm text-red-500 mt-2">
          This action cannot be undone.
        </p>

        {error && (
          <div className="mt-5 rounded-lg bg-red-50 p-3 text-red-600 text-sm">
            {error}
          </div>
        )}

        <div className="flex gap-4 mt-7">

          <button
            type="button"
            onClick={handleCancel}
            disabled={loading}
            className="flex-1 rounded-lg border border-gray-300 px-5 py-3 font-semibold text-gray-700 hover:bg-gray-100 disabled:opacity-50"
          >
            Cancel
          </button>

          <button
            type="button"
            onClick={handleDelete}
            disabled={loading}
            className="flex-1 rounded-lg bg-red-600 px-5 py-3 font-semibold text-white hover:bg-red-700 disabled:opacity-50"
          >
            {loading ? "Deleting..." : "Delete"}
          </button>

        </div>

      </div>

    </div>
  );
};

export default DeleteProduct;