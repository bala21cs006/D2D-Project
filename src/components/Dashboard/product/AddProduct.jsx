import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FiArrowLeft,
  FiUpload,
  FiPackage,
  FiTag,
  FiStar,
} from "react-icons/fi";

import { createProduct } from "../../../services/createProductApi";

const AddProduct = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [rating, setRating] = useState("");
  const [image, setImage] = useState(null);

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    setMessage("");
    setError("");

    // =========================
    // VALIDATION
    // =========================

    if (!name.trim()) {
      setError("Please enter product name");
      return;
    }

    if (!category.trim()) {
      setError("Please enter category");
      return;
    }

    if (rating === "") {
      setError("Please enter rating");
      return;
    }

    if (
      Number(rating) < 0 ||
      Number(rating) > 5
    ) {
      setError("Rating must be between 0 and 5");
      return;
    }

    if (!image) {
      setError("Please select a product image");
      return;
    }

    try {
      setLoading(true);

      // =========================
      // FORMDATA
      // =========================

      const formData = new FormData();

      formData.append(
        "name",
        name.trim()
      );

      formData.append(
        "category",
        category.trim()
      );

      formData.append(
        "rating",
        Number(rating)
      );

      formData.append(
        "image",
        image
      );

      console.log("PRODUCT DATA:");
      console.log("Name:", name);
      console.log("Category:", category);
      console.log("Rating:", rating);
      console.log("Image:", image);

      // =========================
      // API
      // =========================

      const data =
        await createProduct(formData);

      console.log(
        "CREATE PRODUCT RESPONSE:",
        data
      );

      // =========================
      // SUCCESS
      // =========================

      if (data.success) {
        setMessage(
          "Product added successfully!"
        );

        setName("");
        setCategory("");
        setRating("");
        setImage(null);

        const fileInput =
          document.getElementById(
            "product-image"
          );

        if (fileInput) {
          fileInput.value = "";
        }

        // =========================
        // GO DASHBOARD
        // =========================

        setTimeout(() => {
          navigate("/admin-dashboard");
        }, 800);

      } else {
        setError(
          data.message ||
            "Failed to add product"
        );
      }

    } catch (err) {
      console.error(
        "ADD PRODUCT ERROR:",
        err
      );

      console.error(
        "SERVER RESPONSE:",
        err.response?.data
      );

      setError(
        err.response?.data?.message ||
          "Something went wrong while adding product"
      );

    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 px-4 py-8 sm:px-6 lg:px-10">

      {/* HEADER */}

      <div className="mx-auto mb-8 max-w-5xl">

        <div className="flex items-center gap-4">

          <button
            type="button"
            onClick={() =>
              navigate("/admin-dashboard")
            }
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-600 shadow-sm transition hover:-translate-x-1 hover:bg-slate-900 hover:text-white"
          >
            <FiArrowLeft size={20} />
          </button>

          <div>

            <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              Add Product
            </h1>

            <p className="mt-1 text-sm text-slate-500">
              Add a new product to your collection
            </p>

          </div>

        </div>

      </div>

      {/* FORM */}

      <div className="mx-auto max-w-5xl">

        <form
          onSubmit={handleSubmit}
          className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
        >

          {/* FORM HEADER */}

          <div className="border-b border-slate-100 px-6 py-5 sm:px-8">

            <div className="flex items-center gap-3">

              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                <FiPackage size={22} />
              </div>

              <div>

                <h2 className="text-lg font-semibold text-slate-900">
                  Product Information
                </h2>

                <p className="text-sm text-slate-500">
                  Enter the details of your product
                </p>

              </div>

            </div>

          </div>

          {/* FORM BODY */}

          <div className="px-6 py-7 sm:px-8">

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">

              {/* NAME */}

              <div className="md:col-span-2">

                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Product Name
                </label>

                <div className="relative">

                  <FiPackage
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                    size={18}
                  />

                  <input
                    type="text"
                    placeholder="Enter product name"
                    value={name}
                    onChange={(e) =>
                      setName(e.target.value)
                    }
                    className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50 pl-11 pr-4 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                  />

                </div>

              </div>

              {/* CATEGORY */}

              <div>

                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Category
                </label>

                <div className="relative">

                  <FiTag
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                    size={18}
                  />

                  <input
                    type="text"
                    placeholder="Enter category"
                    value={category}
                    onChange={(e) =>
                      setCategory(e.target.value)
                    }
                    className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50 pl-11 pr-4 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                  />

                </div>

              </div>

              {/* RATING */}

              <div>

                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Rating
                </label>

                <div className="relative">

                  <FiStar
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                    size={18}
                  />

                  <input
                    type="number"
                    step="0.1"
                    min="0"
                    max="5"
                    placeholder="0 - 5"
                    value={rating}
                    onChange={(e) =>
                      setRating(e.target.value)
                    }
                    className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50 pl-11 pr-4 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                  />

                </div>

              </div>

              {/* IMAGE */}

              <div className="md:col-span-2">

                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Product Image
                </label>

                <div className="rounded-2xl border-2 border-dashed border-slate-200 bg-slate-50 p-6 transition hover:border-blue-400">

                  <div className="flex flex-col items-center justify-center text-center">

                    <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                      <FiUpload size={24} />
                    </div>

                    <p className="text-sm font-semibold text-slate-700">
                      Upload product image
                    </p>

                    <p className="mt-1 text-xs text-slate-400">
                      PNG, JPG or JPEG
                    </p>

                    <label
                      htmlFor="product-image"
                      className="mt-4 cursor-pointer rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700"
                    >
                      Choose Image
                    </label>

                    <input
                      id="product-image"
                      type="file"
                      accept="image/*"
                      onChange={(e) =>
                        setImage(
                          e.target.files[0]
                        )
                      }
                      className="hidden"
                    />

                    {image && (
                      <div className="mt-4 rounded-lg bg-white px-4 py-2 shadow-sm">

                        <p className="max-w-xs truncate text-sm text-slate-600">
                          {image.name}
                        </p>

                      </div>
                    )}

                  </div>

                </div>

              </div>

            </div>

            {/* ERROR */}

            {error && (
              <div className="mt-6 rounded-xl border border-red-200 bg-red-50 px-4 py-3">

                <p className="text-sm font-medium text-red-600">
                  {error}
                </p>

              </div>
            )}

            {/* SUCCESS */}

            {message && (
              <div className="mt-6 rounded-xl border border-green-200 bg-green-50 px-4 py-3">

                <p className="text-sm font-medium text-green-600">
                  {message}
                </p>

              </div>
            )}

          </div>

          {/* FOOTER */}

          <div className="flex flex-col-reverse gap-3 border-t border-slate-100 bg-slate-50 px-6 py-5 sm:flex-row sm:justify-end sm:px-8">

            <button
              type="button"
              onClick={() =>
                navigate("/admin-dashboard")
              }
              disabled={loading}
              className="h-11 rounded-xl border border-slate-200 bg-white px-6 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 disabled:opacity-50"
            >
              Cancel
            </button>

            <button
              type="submit"
              disabled={loading}
              className="h-11 rounded-xl bg-blue-600 px-7 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 hover:shadow-md disabled:cursor-not-allowed disabled:opacity-50"
            >
              {loading
                ? "Adding Product..."
                : "Add Product"}
            </button>

          </div>

        </form>

      </div>

    </div>
  );
};

export default AddProduct;