import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/common/Navbar";
import Home from "./pages/Home";
import AdminLogin from "./pages/AdminLogin";
import DashboardPage from "./components/Dashboard/pages/DashboardPage";

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

      </Routes>
    </>
  );
};

export default App;