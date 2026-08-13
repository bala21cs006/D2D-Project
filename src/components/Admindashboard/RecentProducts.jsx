import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { FiPackage, FiPlus } from "react-icons/fi";

const RecentProducts = () => {

  const navigate = useNavigate();

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

      {/* Header */}

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
          onClick={() => navigate("/products")}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-4 py-2 rounded-lg border border-slate-200 text-sm font-medium text-slate-600 hover:bg-slate-50"
        >
          View All
        </motion.button>

      </div>


      {/* Empty State */}

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

    </motion.div>
  );
};

export default RecentProducts;