import React from "react";
import { motion } from "framer-motion";
import {
  FiHome,
  FiPackage,
  FiShoppingCart,
  FiUsers,
  FiBarChart2,
  FiSettings,
  FiLogOut,
} from "react-icons/fi";

const Sidebar = () => {
  const menuItems = [
    {
      name: "Dashboard",
      icon: <FiHome />,
    },
    {
      name: "Products",
      icon: <FiPackage />,
    },
    {
      name: "Orders",
      icon: <FiShoppingCart />,
    },
    {
      name: "Users",
      icon: <FiUsers />,
    },
    {
      name: "Analytics",
      icon: <FiBarChart2 />,
    },
  ];

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-white border-r border-slate-200 shadow-sm z-40 flex flex-col">

      {/* Logo */}
      <div className="h-20 flex items-center px-6 border-b border-slate-100">

        <div className="flex items-center gap-3">

          <motion.div
            whileHover={{
              scale: 1.1,
              rotate: 10,
            }}
            className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center text-white font-bold shadow-lg"
          >
            A
          </motion.div>

          <div>
            <h1 className="font-bold text-slate-800">
              AdminPanel
            </h1>

            <p className="text-xs text-slate-400">
              Management
            </p>
          </div>

        </div>

      </div>

      {/* Menu */}
      <nav className="flex-1 px-4 py-6">

        <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider px-3 mb-4">
          Main Menu
        </p>

        <div className="space-y-2">

          {menuItems.map((item, index) => (
            <motion.button
              key={item.name}
              initial={{
                opacity: 0,
                x: -20,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                delay: index * 0.1,
              }}
              whileHover={{
                x: 5,
              }}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                index === 0
                  ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg shadow-blue-500/20"
                  : "text-slate-500 hover:bg-blue-50 hover:text-blue-600"
              }`}
            >

              <span className="text-lg">
                {item.icon}
              </span>

              <span className="text-sm font-medium">
                {item.name}
              </span>

            </motion.button>
          ))}

        </div>

        {/* System */}
        <div className="mt-8">

          <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider px-3 mb-4">
            System
          </p>

          <motion.button
            whileHover={{
              x: 5,
            }}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-slate-500 hover:bg-blue-50 hover:text-blue-600 transition"
          >
            <FiSettings size={19} />

            <span className="text-sm font-medium">
              Settings
            </span>
          </motion.button>

        </div>

      </nav>

      {/* Admin Profile */}
      <div className="p-4 border-t border-slate-100">

        <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-50">

          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center text-white font-bold">
            A
          </div>

          <div className="flex-1">

            <p className="text-sm font-semibold text-slate-700">
              Admin
            </p>

            <p className="text-xs text-slate-400">
              admin@gmail.com
            </p>

          </div>

        </div>

        {/* Logout */}
        <motion.button
          whileHover={{
            x: 5,
          }}
          className="w-full flex items-center gap-3 px-3 py-3 mt-3 rounded-xl text-red-500 hover:bg-red-50 transition"
        >
          <FiLogOut size={18} />

          <span className="text-sm font-medium">
            Logout
          </span>
        </motion.button>

      </div>

    </aside>
  );
};

export default Sidebar;