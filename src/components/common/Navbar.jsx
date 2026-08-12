import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  FaShoppingCart,
  FaSearch,
  FaUser,
  FaHeart,
  FaShieldAlt,
} from "react-icons/fa";
import logo from "../../assets/images/logo.png";
import LoginForm from "../LoginForm"; // FIXED: was "./LoginForm"

const Navbar = () => {
  const [isAdminModalOpen, setIsAdminModalOpen] = useState(false);

  const openAdminModal = () => setIsAdminModalOpen(true);
  const closeAdminModal = () => setIsAdminModalOpen(false);

  return (
    <>
      <header className="sticky top-0 w-full bg-white shadow z-50 px-4 md:px-16">
        <div className="flex items-center justify-between h-24">
          <Link to="/" className="flex items-center">
            <img
              src={logo}
              alt="Desk to Date"
              className="h-16 w-auto transition-transform duration-300 hover:scale-105"
            />
          </Link>

          <div className="flex items-center gap-16">
            <div className="flex items-center px-4 py-3 gap-8 border border-gray-300">
              <FaSearch className="w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search for products..."
                className="bg-transparent outline-none text-sm w-120"
              />
            </div>

            <div className="flex items-center gap-12 text-lg">
              <NavLink to="/">Home</NavLink>
              <NavLink to="/products">Products</NavLink>
            </div>

            <div className="flex items-center gap-8">
              <NavLink to="/login" className="text-xl">
                <FaUser className="text-teal-600" />
              </NavLink>
              <NavLink to="/wishlist" className="text-xl">
                <FaHeart className="text-teal-600" />
              </NavLink>
              <NavLink to="/cart" className="text-xl">
                <FaShoppingCart className="text-teal-600" />
              </NavLink>
              <button
                onClick={openAdminModal}
                className="text-xl cursor-pointer hover:scale-110 transition-transform"
                title="Admin Login"
              >
                <FaShieldAlt className="text-orange-500" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <LoginForm isOpen={isAdminModalOpen} onClose={closeAdminModal} />
    </>
  );
};

export default Navbar;