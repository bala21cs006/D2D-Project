import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { FiPackage, FiPlus } from "react-icons/fi";
import axios from "axios";

const RecentProducts = () => {
  const navigate = useNavigate();

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch products
  const fetchProducts = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/products"
      );

      console.log("PRODUCTS:", response.data);

      setProducts(response.data.products || []);
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

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

            {/* Table Header */}

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

              </tr>

            </thead>


            {/* Table Body */}

            <tbody>

              {products.slice(0, 5).map((product) => (

                <motion.tr
                  key={product._id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="border-b border-slate-100 hover:bg-slate-50"
                >

                  {/* Image */}

                  <td className="px-6 py-4">

                    <img
                      src={`http://localhost:5000/${product.image}`}
                      alt={product.name}
                      className="w-14 h-14 rounded-lg object-cover"
                    />

                  </td>


                  {/* Product Name */}

                  <td className="px-6 py-4">

                    <p className="font-semibold text-slate-800">
                      {product.name}
                    </p>

                  </td>


                  {/* Category */}

                  <td className="px-6 py-4">

                    <span className="inline-block px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-sm">
                      {product.category}
                    </span>

                  </td>


                  {/* Rating */}

                  <td className="px-6 py-4">

                    <span className="font-semibold text-slate-700">
                      ⭐ {product.rating}
                    </span>

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