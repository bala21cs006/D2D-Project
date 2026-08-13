import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/common/Navbar";
import Home from "./pages/Home";
import AdminLogin from "./pages/AdminLogin";
import DashboardPage from "./components/Dashboard/pages/DashboardPage";
import Addproductpage from "./components/Dashboard/pages/Addproductpage";
import Products from "./components/Dashboard/product/Products";

const App = () => {
  return (
    <>
      <Navbar />

      <Routes>

        {/* Home */}
        <Route
          path="/"
          element={<Home />}
        />

        {/* Admin Login */}
        <Route
          path="/login"
          element={<AdminLogin />}
        />

        {/* Admin Dashboard */}
        <Route
          path="/admin-dashboard"
          element={<DashboardPage />}
        />

        {/* Add Product */}
        <Route
          path="/add-product"
          element={<Addproductpage />}
        />

        {/* Products */}
        <Route
          path="/admin-dashboard/products"
          element={<Products />}
        />

      </Routes>
    </>
  );
};

export default App;