// import React from "react";
// import { motion } from "framer-motion";
// import { useNavigate } from "react-router-dom";
// // import Addproductpage from "./pages/Addproductpage";
// import {
//   FiPackage,
//   FiShoppingCart,
//   FiUsers,
//   FiDollarSign,
//   FiArrowUpRight,
//   FiPlus,
//   FiActivity,
// } from "react-icons/fi";

// const AdminDashboard = () => {
//   const navigate = useNavigate();
//   const cards = [
//     {
//       title: "Total Products",
//       value: "0",
//       icon: <FiPackage />,
//       color: "from-blue-500 to-cyan-500",
//       iconBg: "bg-blue-50",
//       iconColor: "text-blue-600",
//     },
//     {
//       title: "Total Orders",
//       value: "0",
//       icon: <FiShoppingCart />,
//       color: "from-violet-500 to-purple-500",
//       iconBg: "bg-violet-50",
//       iconColor: "text-violet-600",
//     },
//     {
//       title: "Total Users",
//       value: "0",
//       icon: <FiUsers />,
//       color: "from-emerald-500 to-green-500",
//       iconBg: "bg-emerald-50",
//       iconColor: "text-emerald-600",
//     },
//     {
//       title: "Revenue",
//       value: "₹0",
//       icon: <FiDollarSign />,
//       color: "from-orange-500 to-pink-500",
//       iconBg: "bg-orange-50",
//       iconColor: "text-orange-600",
//     },
//   ];

//   return (
//     <div className="relative min-h-screen overflow-hidden bg-slate-50">

//       {/* ============================= */}
//       {/* Animated Background */}
//       {/* ============================= */}

//       <div className="absolute inset-0 overflow-hidden pointer-events-none">

//         {/* Blue Glow */}
//         <motion.div
//           animate={{
//             x: [0, 120, -80, 0],
//             y: [0, -80, 80, 0],
//             scale: [1, 1.15, 0.95, 1],
//           }}
//           transition={{
//             duration: 14,
//             repeat: Infinity,
//             ease: "easeInOut",
//           }}
//           className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-blue-300/20 blur-3xl"
//         />

//         {/* Purple Glow */}
//         <motion.div
//           animate={{
//             x: [0, -100, 80, 0],
//             y: [0, 100, -80, 0],
//             scale: [1, 0.9, 1.15, 1],
//           }}
//           transition={{
//             duration: 16,
//             repeat: Infinity,
//             ease: "easeInOut",
//           }}
//           className="absolute top-1/3 -right-40 w-96 h-96 rounded-full bg-purple-300/20 blur-3xl"
//         />

//         {/* Cyan Glow */}
//         <motion.div
//           animate={{
//             x: [0, 100, -100, 0],
//             y: [0, 60, -60, 0],
//           }}
//           transition={{
//             duration: 18,
//             repeat: Infinity,
//             ease: "easeInOut",
//           }}
//           className="absolute -bottom-40 left-1/3 w-96 h-96 rounded-full bg-cyan-300/15 blur-3xl"
//         />

//       </div>

//       {/* ============================= */}
//       {/* Main Content */}
//       {/* ============================= */}

//       <div className="relative z-10 p-4 sm:p-6 lg:p-8">

//         {/* Header */}
//         <motion.div
//           initial={{ opacity: 0, y: -30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5 mb-8"
//         >

//           <div>
//             <p className="text-sm font-semibold text-blue-600 mb-1">
//               ADMIN PANEL
//             </p>

//             <h1 className="text-4xl font-black text-slate-800">
//               Dashboard
//             </h1>

//             <p className="text-slate-500 mt-2">
//               Welcome back, Admin. Here's what's happening today.
//             </p>
//           </div>

//           <motion.button
//              onClick={() => navigate("/add-product")}
//              whileTap={{ scale: 0.95 }}
//              className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold shadow-lg"
//  >
//           <FiPlus size={19} />
//              Add Product
//           </motion.button>

//         </motion.div>

//         {/* ============================= */}
//         {/* Statistics Cards */}
//         {/* ============================= */}

//         <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">

//           {cards.map((card, index) => (
//             <motion.div
//               key={card.title}
//               initial={{
//                 opacity: 0,
//                 y: 40,
//                 scale: 0.95,
//               }}
//               animate={{
//                 opacity: 1,
//                 y: 0,
//                 scale: 1,
//               }}
//               transition={{
//                 duration: 0.5,
//                 delay: index * 0.12,
//               }}
//               whileHover={{
//                 y: -7,
//                 scale: 1.02,
//               }}
//               className="relative bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-xl transition-shadow duration-300 overflow-hidden"
//             >

//               {/* Top Gradient Line */}
//               <div
//                 className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${card.color}`}
//               />

//               {/* Background Glow */}
//               <div
//                 className={`absolute -right-8 -top-8 w-24 h-24 rounded-full bg-gradient-to-br ${card.color} opacity-10 blur-2xl`}
//               />

//               <div className="relative flex items-start justify-between">

//                 <div>
//                   <p className="text-sm font-medium text-slate-500">
//                     {card.title}
//                   </p>

//                   <motion.h2
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     transition={{
//                       delay: index * 0.12 + 0.3,
//                     }}
//                     className="text-3xl font-black text-slate-800 mt-3"
//                   >
//                     {card.value}
//                   </motion.h2>

//                   <p className="text-xs text-slate-400 mt-2">
//                     Updated recently
//                   </p>
//                 </div>

//                 <motion.div
//                   whileHover={{
//                     rotate: 10,
//                     scale: 1.1,
//                   }}
//                   className={`w-12 h-12 rounded-xl ${card.iconBg} ${card.iconColor} flex items-center justify-center text-xl`}
//                 >
//                   {card.icon}
//                 </motion.div>

//               </div>

//               <div className="flex items-center gap-2 mt-5 text-sm text-blue-600 font-medium">
//                 <FiArrowUpRight />
//                 View details
//               </div>

//             </motion.div>
//           ))}

//         </div>

//         {/* ============================= */}
//         {/* Bottom Section */}
//         {/* ============================= */}

//         <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mt-8">

//           {/* Recent Products */}

//           <motion.div
//             initial={{ opacity: 0, x: -40 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{
//               duration: 0.6,
//               delay: 0.6,
//             }}
//             className="xl:col-span-2 bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden"
//           >

//             <div className="flex items-center justify-between px-6 py-5 border-b border-slate-200">

//               <div>
//                 <h2 className="text-xl font-bold text-slate-800">
//                   Recent Products
//                 </h2>

//                 <p className="text-sm text-slate-500 mt-1">
//                   Your latest products
//                 </p>
//               </div>

//               <motion.button
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="px-4 py-2 rounded-lg border border-slate-200 text-sm font-medium text-slate-600 hover:bg-slate-50"
//               >
//                 View All
//               </motion.button>

//             </div>

//             {/* Empty State */}

//             <div className="flex flex-col items-center justify-center py-20">

//               <motion.div
//                 animate={{
//                   y: [0, -10, 0],
//                   rotate: [0, 3, -3, 0],
//                 }}
//                 transition={{
//                   duration: 3,
//                   repeat: Infinity,
//                   ease: "easeInOut",
//                 }}
//                 className="relative"
//               >

//                 <div className="absolute inset-0 bg-blue-400/20 blur-2xl rounded-full" />

//                 <div className="relative w-20 h-20 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-500">
//                   <FiPackage size={35} />
//                 </div>

//               </motion.div>

//               <h3 className="text-lg font-semibold text-slate-800 mt-6">
//                 No products yet
//               </h3>

//               <p className="text-sm text-slate-500 mt-2">
//                 Start adding products to your store.
//               </p>

//               <motion.button
//                 whileHover={{
//                   scale: 1.05,
//                   boxShadow: "0 8px 20px rgba(37,99,235,0.20)",
//                 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="mt-6 flex items-center gap-2 px-5 py-2.5 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700"
//               >
//                 <FiPlus />
//                 Add Product
//               </motion.button>

//             </div>

//           </motion.div>

//           {/* Activity */}

//           <motion.div
//             initial={{ opacity: 0, x: 40 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{
//               duration: 0.6,
//               delay: 0.8,
//             }}
//             className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6"
//           >

//             <div className="flex items-center gap-3 mb-6">

//               <div className="w-11 h-11 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center">
//                 <FiActivity size={20} />
//               </div>

//               <div>
//                 <h2 className="font-bold text-slate-800">
//                   Activity
//                 </h2>

//                 <p className="text-xs text-slate-400">
//                   Recent activity
//                 </p>
//               </div>

//             </div>

//             <div className="space-y-6">

//               {[1, 2, 3].map((item, index) => (
//                 <motion.div
//                   key={item}
//                   initial={{ opacity: 0, x: 20 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   transition={{
//                     delay: 1 + index * 0.15,
//                   }}
//                   className="flex items-start gap-3"
//                 >

//                   <motion.div
//                     animate={{
//                       scale: [1, 1.3, 1],
//                     }}
//                     transition={{
//                       duration: 2,
//                       repeat: Infinity,
//                       delay: index * 0.3,
//                     }}
//                     className="w-2.5 h-2.5 mt-1.5 rounded-full bg-blue-500"
//                   />

//                   <div>
//                     <p className="text-sm text-slate-600">
//                       No recent activity
//                     </p>

//                     <p className="text-xs text-slate-400 mt-1">
//                       Waiting for updates
//                     </p>
//                   </div>

//                 </motion.div>
//               ))}

//             </div>

//           </motion.div>

//         </div>

//       </div>
//     </div>
//   );
// };

// export default AdminDashboard  ;

import React from "react";

import AdminPanel from "../../Admindashboard/AdminPanel";
import RecentProducts from "../../Admindashboard/RecentProducts";
import Activity from "../../Admindashboard/Activity";

const AdminDashboard = () => {
  return (
    <div className="min-h-screen bg-slate-50 p-4 sm:p-6 lg:p-8">

      <AdminPanel />

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mt-8">
        <RecentProducts />
        <Activity />
      </div>

    </div>
  );
};

export default AdminDashboard;