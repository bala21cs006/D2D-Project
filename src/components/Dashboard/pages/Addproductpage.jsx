import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createProduct } from "../../../services/productApi";

const Addproductpage = () => {
  const navigate = useNavigate();

  // =========================
  // FORM DATA
  // =========================

  const [formData, setFormData] = useState({
    name: "",
    category: "",
    rating: "",
  });

  // =========================
  // IMAGE
  // =========================

  const [image, setImage] = useState(null);

  // =========================
  // STATUS
  // =========================

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  // =========================
  // HANDLE INPUT
  // =========================

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // =========================
  // HANDLE IMAGE
  // =========================

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];

    if (selectedImage) {
      setImage(selectedImage);
    }
  };

  // =========================
  // SUBMIT PRODUCT
  // =========================

  const handleSubmit = async (e) => {
    e.preventDefault();

    setMessage("");
    setError("");

    // Validate name
    if (!formData.name.trim()) {
      setError("Please enter product name");
      return;
    }

    // Validate category
    if (!formData.category) {
      setError("Please select category");
      return;
    }

    // Validate rating
    if (
      formData.rating === "" ||
      formData.rating === null
    ) {
      setError("Please enter rating");
      return;
    }

    // Validate rating range
    if (
      Number(formData.rating) < 0 ||
      Number(formData.rating) > 5
    ) {
      setError("Rating must be between 0 and 5");
      return;
    }

    // Validate image
    if (!image) {
      setError("Please select a product image");
      return;
    }

    try {
      setLoading(true);

      // =========================
      // CREATE FORMDATA
      // =========================

      const data = new FormData();

      data.append(
        "name",
        formData.name.trim()
      );

      data.append(
        "category",
        formData.category
      );

      data.append(
        "rating",
        formData.rating
      );

      data.append(
        "image",
        image
      );

      console.log(
        "NAME:",
        formData.name
      );

      console.log(
        "CATEGORY:",
        formData.category
      );

      console.log(
        "RATING:",
        formData.rating
      );

      console.log(
        "IMAGE:",
        image
      );

      // =========================
      // API CALL
      // =========================

      const response =
        await createProduct(data);

      console.log(
        "PRODUCT CREATED:",
        response
      );

      if (response.success) {
        setMessage(
          "Product added successfully!"
        );

        // Clear form
        setFormData({
          name: "",
          category: "",
          rating: "",
        });

        setImage(null);

        // Reset file input
        const fileInput =
          document.getElementById(
            "product-image"
          );

        if (fileInput) {
          fileInput.value = "";
        }

        // Go dashboard
        setTimeout(() => {
          navigate("/admin-dashboard");
        }, 1000);

      } else {
        setError(
          response.message ||
            "Failed to add product"
        );
      }

    } catch (error) {
      console.error(
        "ADD PRODUCT ERROR:",
        error
      );

      console.error(
        "SERVER RESPONSE:",
        error.response?.data
      );

      setError(
        error.response?.data?.message ||
          "Something went wrong"
      );

    } finally {
      setLoading(false);
    }
  };

  // =========================
  // UI
  // =========================

  return (
    <div className="min-h-screen bg-gray-50 p-6">

      {/* HEADER */}

      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900">
          Add Product
        </h1>

        <p className="mt-2 text-gray-500">
          Add a new product to your store.
        </p>
      </div>

      {/* FORM CARD */}

      <div className="max-w-3xl rounded-2xl bg-white p-8 shadow-sm">

        <form onSubmit={handleSubmit}>

          {/* PRODUCT NAME */}

          <div className="mb-5">

            <label className="mb-2 block font-semibold text-gray-700">
              Product Name
            </label>

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter product name"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
            />

          </div>

          {/* CATEGORY */}

          <div className="mb-5">

            <label className="mb-2 block font-semibold text-gray-700">
              Category
            </label>

            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
            >

              <option value="">
                Select Category
              </option>

              <option value="T-Shirts">
                T-Shirts
              </option>

              <option value="Shirts">
                Shirts
              </option>

              <option value="Pants">
                Pants
              </option>

              <option value="Jeans">
                Jeans
              </option>

              <option value="Shoes">
                Shoes
              </option>

              <option value="Accessories">
                Accessories
              </option>

            </select>

          </div>

          {/* RATING */}

          <div className="mb-5">

            <label className="mb-2 block font-semibold text-gray-700">
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
              placeholder="Enter rating"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
            />

          </div>

          {/* IMAGE */}

          <div className="mb-6">

            <label className="mb-2 block font-semibold text-gray-700">
              Product Image
            </label>

            <input
              id="product-image"
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="w-full rounded-lg border border-gray-300 p-3"
            />

            {image && (
              <p className="mt-2 text-sm text-gray-500">
                Selected: {image.name}
              </p>
            )}

          </div>

          {/* ERROR */}

          {error && (
            <div className="mb-5 rounded-lg bg-red-50 p-3 text-red-600">
              {error}
            </div>
          )}

          {/* SUCCESS */}

          {message && (
            <div className="mb-5 rounded-lg bg-green-50 p-3 text-green-600">
              {message}
            </div>
          )}

          {/* BUTTONS */}

          <div className="flex gap-4">

            <button
              type="button"
              onClick={() =>
                navigate(
                  "/admin-dashboard"
                )
              }
              className="rounded-lg border border-gray-300 px-6 py-3 font-semibold text-gray-700 hover:bg-gray-100"
            >
              Cancel
            </button>

            <button
              type="submit"
              disabled={loading}
              className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700 disabled:opacity-50"
            >
              {loading
                ? "Adding..."
                : "Add Product"}
            </button>

          </div>

        </form>

      </div>

    </div>
  );
};

export default Addproductpage;