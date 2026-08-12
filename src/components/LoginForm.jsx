import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";
import { FaShieldAlt, FaLock, FaEnvelope, FaTimes } from "react-icons/fa";

const LoginForm = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [loginSuccess, setLoginSuccess] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/login",
        { email: email.trim(), password }
      );

      const data = response.data;
      console.log("Backend response:", data);

      const token = data?.token;

      // ✅ FIX: Accept BOTH "admin" or "user" from backend
      const userData = data?.admin || data?.user;

      if (!token) {
        setError("Token not received from server.");
        setLoading(false);
        return;
      }

      if (!userData) {
        setError("User data missing in response.");
        setLoading(false);
        return;
      }

      // Store with role (backend might not send role, so we add it)
      const userToStore = {
        ...userData,
        role: userData.role || "admin",
      };

      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(userToStore));
      setLoginSuccess(true);

      setTimeout(() => {
        window.location.href = "/admin-dashboard";
      }, 1000);
    } catch (err) {
      const msg =
        err.response?.data?.message ||
        err.response?.data?.error ||
        "Invalid email or password.";
      setError(msg);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[100] flex items-center justify-center"
        >
          <div
            className="absolute inset-0 bg-black/45 backdrop-blur-md"
            onClick={onClose}
          />

          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.95 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="relative z-10 w-full max-w-md px-4"
          >
            <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-10 relative">
              <button
                onClick={onClose}
                className="absolute top-4 right-4 w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition text-gray-500"
              >
                <FaTimes />
              </button>

              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-teal-500 to-teal-700 flex items-center justify-center">
                  <FaShieldAlt className="text-white text-4xl" />
                </div>
              </div>

              <h1 className="text-2xl font-bold text-center text-gray-900">
                Admin Portal
              </h1>
              <p className="text-center text-gray-500 mt-2 mb-8">
                Sign in to manage your dashboard
              </p>

              {loginSuccess && (
                <div className="mb-5 p-3 rounded-xl bg-green-100 text-green-700 text-center text-sm font-semibold">
                  ✅ Login successful! Redirecting...
                </div>
              )}

              {error && (
                <div className="mb-5 p-3 rounded-xl bg-red-100 text-red-600 text-center text-sm">
                  {error}
                </div>
              )}

              <form onSubmit={handleLogin}>
                <div className="mb-5">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address
                  </label>
                  <div className="flex items-center border border-gray-300 rounded-xl px-4 focus-within:border-teal-500 transition">
                    <FaEnvelope className="text-gray-400 mr-3" />
                    <input
                      type="email"
                      placeholder="admin@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full py-3 outline-none bg-transparent text-sm"
                      required
                    />
                  </div>
                </div>

                <div className="mb-7">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Password
                  </label>
                  <div className="flex items-center border border-gray-300 rounded-xl px-4 focus-within:border-teal-500 transition">
                    <FaLock className="text-gray-400 mr-3" />
                    <input
                      type="password"
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full py-3 outline-none bg-transparent text-sm"
                      required
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-semibold transition disabled:opacity-50 cursor-pointer"
                >
                  {loading ? "Signing in..." : "Sign In to Admin"}
                </button>
              </form>

              <p className="text-center text-xs text-gray-400 mt-7">
                Secure Admin Access
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoginForm;