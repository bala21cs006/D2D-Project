import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/common/Navbar";
import Home from "./pages/Home";
import AdminLogin from "./pages/AdminLogin";
import DashboardPage from "./components/Dashboard/pages/DashboardPage";
// import Addproductpage from "./components/Dashboard/pages/Addproductpage";
import Products from "./components/Admindashboard/RecentProducts";
import EditProduct from "./components/Dashboard/product/EditProduct";
import DeleteProduct from "./components/Dashboard/product/DeleteProduct";
import ProductList from "./components/Dashboard/product/ProductList";
import AddProduct from "./components/Dashboard/product/AddProduct";




const App = () => {
  return (
    <>
      <Navbar />

      <Routes>
        {/* Home */}
        <Route path="/" element={<Home />} />

        {/* Admin Login */}
        <Route path="/login" element={<AdminLogin />} />

        {/* Admin Dashboard */}
        <Route
          path="/admin-dashboard"
          element={<DashboardPage />}
        />

       <Route
        path="/add-product"
        element={<AddProduct />}
      />

        {/* Products */}
        <Route
          path="/admin-products"
          element={<Products />}
        />
        <Route
          path="/edit-product/:id"
          element={<EditProduct />}
        />
        <Route
          path="/delete-product/:id"
          element={<DeleteProduct />}
        /><Route
           path="/dashboard/products"
          element={<ProductList />}
        />
        <Route
  path="/add-product"
  element={<AddProduct />}
/>


      </Routes>
    </>
  );
};

export default App;