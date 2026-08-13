import React from "react";
import { useNavigate } from "react-router-dom";

import Sidebar from "../Sidebar";
import Productcard from "../../Dashboard/product/Productcard";

const Addproductpage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-50">

      {/* Sidebar */}
      <Sidebar />

      {/* Dashboard Content */}
      <main className="ml-64 min-h-screen p-6">

        {/* Header */}
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              Add Product
            </h1>

            <p className="mt-2 text-gray-500">
              Add a new product to your store.
            </p>
          </div>

          {/* Products Button */}
          <button
            onClick={() => navigate("/admin-dashboard/products")}
            className="rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white hover:bg-blue-700"
          >
            View Products
          </button>
        </div>

        {/* Product Form */}
        <Productcard />

      </main>
    </div>
  );
};

export default Addproductpage;