import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FaHome, FaShoppingCart, FaSearch, FaStore, FaUser,FaHeart,} from "react-icons/fa";
import logo from "../../assets/images/logo.png";
const Navbar = () => {
  return (
    <header className="sticky top-0  w-full bg-white shadow z-50 px-4 md:px-16">
      <div className="flex items-center justify-between h-24">
        <Link to="/" className="flex items-center ">
          <img
            src={logo}
            alt="Desk to Date"
            className="h-16 w-auto transition-transform  duration-300 hover:scale-105"
          />
        </Link>

        <div className="flex items-center gap-16">
          <div className="flex items-center   px-4 py-3 gap-8 border border-gray-300">
            <FaSearch className=" w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search for products..."
              className="bg-transparent outline-none  text-sm w-120"
            />
          </div>

          <div className="flex items-center gap-12 text-lg">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/products">Products</NavLink>
          </div>

          <div className="flex items-center gap-8">
            <NavLink to="/login" className=" text-xl">
              <FaUser className="text-teal-600" />
            </NavLink>
            <NavLink to="/wishlist" className=" text-xl">
              <FaHeart className="text-teal-600" />
            </NavLink>
            <NavLink to="/cart" className=" text-xl">
              <FaShoppingCart className="text-teal-600" />
            </NavLink>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
