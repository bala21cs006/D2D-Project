import React from "react";

import Sidebar from "../Sidebar";
import AdminDashboard from "../AdminDashboard";

const DashboardPage = () => {
  return (
    <div className="min-h-screen bg-slate-50">

      {/* Sidebar */}
      <Sidebar />

      {/* Dashboard Content */}
      <main className="ml-64 min-h-screen p-6">
        <AdminDashboard />
      </main>

    </div>
  );
};

export default DashboardPage;