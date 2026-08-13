import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import {
  FiPackage,
  FiShoppingCart,
  FiUsers,
  FiDollarSign,
  FiArrowUpRight,
  FiPlus,
} from "react-icons/fi";

const AdminPanel = () => {
  const navigate = useNavigate();

  const cards = [
    {
      title: "Total Products",
      value: "0",
      icon: <FiPackage />,
      color: "from-blue-500 to-cyan-500",
      iconBg: "bg-blue-50",
      iconColor: "text-blue-600",
    },
    {
      title: "Total Orders",
      value: "0",
      icon: <FiShoppingCart />,
      color: "from-violet-500 to-purple-500",
      iconBg: "bg-violet-50",
      iconColor: "text-violet-600",
    },
    {
      title: "Total Users",
      value: "0",
      icon: <FiUsers />,
      color: "from-emerald-500 to-green-500",
      iconBg: "bg-emerald-50",
      iconColor: "text-emerald-600",
    },
    {
      title: "Revenue",
      value: "₹0",
      icon: <FiDollarSign />,
      color: "from-orange-500 to-pink-500",
      iconBg: "bg-orange-50",
      iconColor: "text-orange-600",
    },
  ];

  return (
    <>

      {/* Admin Header */}

      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5 mb-8"
      >

        <div>
          <p className="text-sm font-semibold text-blue-600 mb-1">
            ADMIN PANEL
          </p>

          <h1 className="text-4xl font-black text-slate-800">
            Dashboard
          </h1>

          <p className="text-slate-500 mt-2">
            Welcome back, Admin. Here's what's happening today.
          </p>
        </div>

        <motion.button
          onClick={() => navigate("/add-product")}
          whileTap={{ scale: 0.95 }}
          className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold shadow-lg"
        >
          <FiPlus size={19} />
          Add Product
        </motion.button>

      </motion.div>


      {/* Statistics Cards */}

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">

        {cards.map((card, index) => (

          <motion.div
            key={card.title}
            initial={{
              opacity: 0,
              y: 40,
              scale: 0.95,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            transition={{
              duration: 0.5,
              delay: index * 0.12,
            }}
            whileHover={{
              y: -7,
              scale: 1.02,
            }}
            className="relative bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-xl transition-shadow duration-300 overflow-hidden"
          >

            {/* Gradient */}

            <div
              className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${card.color}`}
            />

            {/* Glow */}

            <div
              className={`absolute -right-8 -top-8 w-24 h-24 rounded-full bg-gradient-to-br ${card.color} opacity-10 blur-2xl`}
            />

            <div className="relative flex items-start justify-between">

              <div>

                <p className="text-sm font-medium text-slate-500">
                  {card.title}
                </p>

                <motion.h2
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    delay: index * 0.12 + 0.3,
                  }}
                  className="text-3xl font-black text-slate-800 mt-3"
                >
                  {card.value}
                </motion.h2>

                <p className="text-xs text-slate-400 mt-2">
                  Updated recently
                </p>

              </div>

              <motion.div
                whileHover={{
                  rotate: 10,
                  scale: 1.1,
                }}
                className={`w-12 h-12 rounded-xl ${card.iconBg} ${card.iconColor} flex items-center justify-center text-xl`}
              >
                {card.icon}
              </motion.div>

            </div>

            <div className="flex items-center gap-2 mt-5 text-sm text-blue-600 font-medium">
              <FiArrowUpRight />
              View details
            </div>

          </motion.div>

        ))}

      </div>

    </>
  );
};

export default AdminPanel;