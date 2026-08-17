import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  FiPackage,
  FiPlus,
  FiEdit,
  FiTrash2,
} from "react-icons/fi";

import {
  getProducts,
  deleteProduct,
} from "../../services/productApi";

const RecentProducts = () => {
  const navigate = useNavigate();

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // ================= FETCH PRODUCTS =================

  const fetchProducts = async () => {
    try {
      const response = await getProducts();

      console.log("PRODUCTS:", response);

      setProducts(response.products || []);
    } catch (error) {
      console.error("GET PRODUCTS ERROR:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // ================= DELETE PRODUCT =================

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this product?"
    );

    if (!confirmDelete) {
      return;
    }

    try {
      await deleteProduct(id);

      // Remove deleted product from UI
      setProducts((prevProducts) =>
        prevProducts.filter(
          (product) => product._id !== id
        )
      );

      alert("Product deleted successfully");

    } catch (error) {
      console.error("DELETE PRODUCT ERROR:", error);

      alert(
        error.response?.data?.message ||
        "Failed to delete product"
      );
    }
  };

  // ================= EDIT PRODUCT =================

  const handleEdit = (id) => {
    console.log("EDIT PRODUCT ID:", id);

    navigate(`/edit-product/${id}`);
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        duration: 0.6,
        delay: 0.6,
      }}
      className="xl:col-span-2 bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden"
    >

      {/* ================= HEADER ================= */}

      <div className="flex items-center justify-between px-6 py-5 border-b border-slate-200">

        <div>
          <h2 className="text-xl font-bold text-slate-800">
            Recent Products
          </h2>

          <p className="text-sm text-slate-500 mt-1">
            Your latest products
          </p>
        </div>

        <motion.button
          onClick={() => navigate("/admin-dashboard")}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-4 py-2 rounded-lg border border-slate-200 text-sm font-medium text-slate-600 hover:bg-slate-50"
        >
          View All
        </motion.button>

      </div>


      {/* ================= LOADING ================= */}

      {loading && (
        <div className="flex items-center justify-center py-20">

          <p className="text-slate-500">
            Loading products...
          </p>

        </div>
      )}


      {/* ================= NO PRODUCTS ================= */}

      {!loading && products.length === 0 && (
        <div className="flex flex-col items-center justify-center py-20">

          <motion.div
            animate={{
              y: [0, -10, 0],
              rotate: [0, 3, -3, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative"
          >

            <div className="absolute inset-0 bg-blue-400/20 blur-2xl rounded-full" />

            <div className="relative w-20 h-20 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-500">

              <FiPackage size={35} />

            </div>

          </motion.div>


          <h3 className="text-lg font-semibold text-slate-800 mt-6">
            No products yet
          </h3>

          <p className="text-sm text-slate-500 mt-2">
            Start adding products to your store.
          </p>


          <motion.button
            onClick={() => navigate("/add-product")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-6 flex items-center gap-2 px-5 py-2.5 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700"
          >

            <FiPlus />

            Add Product

          </motion.button>

        </div>
      )}


      {/* ================= PRODUCTS TABLE ================= */}

      {!loading && products.length > 0 && (

        <div className="overflow-x-auto">

          <table className="w-full">

            {/* ================= TABLE HEADER ================= */}

            <thead className="bg-slate-50 border-b border-slate-200">

              <tr>

                <th className="px-6 py-4 text-left text-sm font-semibold text-slate-600">
                  Image
                </th>

                <th className="px-6 py-4 text-left text-sm font-semibold text-slate-600">
                  Product
                </th>

                <th className="px-6 py-4 text-left text-sm font-semibold text-slate-600">
                  Category
                </th>

                <th className="px-6 py-4 text-left text-sm font-semibold text-slate-600">
                  Rating
                </th>

                <th className="px-6 py-4 text-left text-sm font-semibold text-slate-600">
                  Actions
                </th>

              </tr>

            </thead>


            {/* ================= TABLE BODY ================= */}

            <tbody>

              {products.slice(0, 5).map((product) => (

                <motion.tr
                  key={product._id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="border-b border-slate-100 hover:bg-slate-50"
                >

                  {/* ================= IMAGE ================= */}

                  <td className="px-6 py-4">

                    {product.image ? (

                      <img
                        src={`http://localhost:5000/${product.image}`}
                        alt={product.name}
                        className="w-14 h-14 rounded-lg object-cover"
                      />

                    ) : (

                      <div className="w-14 h-14 rounded-lg bg-slate-100 flex items-center justify-center">

                        <FiPackage
                          size={24}
                          className="text-slate-400"
                        />

                      </div>

                    )}

                  </td>


                  {/* ================= PRODUCT ================= */}

                  <td className="px-6 py-4">

                    <p className="font-semibold text-slate-800">
                      {product.name}
                    </p>

                  </td>


                  {/* ================= CATEGORY ================= */}

                  <td className="px-6 py-4">

                    <span className="inline-block px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-sm">
                      {product.category}
                    </span>

                  </td>


                  {/* ================= RATING ================= */}

                  <td className="px-6 py-4">

                    <span className="font-semibold text-slate-700">
                      ⭐ {product.rating}
                    </span>

                  </td>


                  {/* ================= ACTIONS ================= */}

                  <td className="px-6 py-4">

                    <div className="flex items-center gap-2">

                      {/* EDIT */}

                      <motion.button
                        type="button"
                        onClick={() =>
                          handleEdit(product._id)
                        }
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 px-3 py-2 rounded-lg bg-blue-50 text-blue-600 hover:bg-blue-100 text-sm font-medium"
                      >

                        <FiEdit size={16} />

                        Edit

                      </motion.button>


                      {/* DELETE */}

                      <motion.button
                        type="button"
                        onClick={() =>
                          handleDelete(product._id)
                        }
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 px-3 py-2 rounded-lg bg-red-50 text-red-600 hover:bg-red-100 text-sm font-medium"
                      >

                        <FiTrash2 size={16} />

                        Delete

                      </motion.button>

                    </div>

                  </td>

                </motion.tr>

              ))}

            </tbody>

          </table>

        </div>

      )}

    </motion.div>
  );
};

export default RecentProducts;