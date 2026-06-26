import { useState } from "react";
import { FaSearch, FaUser, FaBars, FaTimes } from "react-icons/fa";
import { FaBagShopping } from "react-icons/fa6";
import { Link, useLocation } from "react-router-dom";
import { useCart } from "../CartContext";

function Navbar({ search, setSearch }) {
  const location = useLocation();
  const { totalItems } = useCart();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#FFDFD0] fixed top-0 left-0 w-full z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-5">
        <div className="flex justify-between items-center">

          {/* Logo */}
          <h1 className="text-2xl font-bold text-green-700">
            🏪 GroCo
          </h1>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-8 font-semibold text-xl text-green-700">
            <li>
              <Link
                to="/"
                className={`pb-1 transition-all duration-200 ${
                  location.pathname === "/"
                    ? "border-b-2 border-orange-400 text-orange-600"
                    : "hover:text-orange-600"
                }`}
              >
                Home
              </Link>
            </li>

            <li>
              <a
                href="#"
                className="hover:text-orange-600 transition-all duration-200"
              >
                About Us
              </a>
            </li>

            <li>
              <Link
                to="/category"
                className={`pb-1 transition-all duration-200 ${
                  location.pathname === "/category"
                    ? "border-b-2 border-orange-400 text-orange-600"
                    : "hover:text-orange-600"
                }`}
              >
                Category
              </Link>
            </li>

            <li>
              <a
                href="#"
                className="hover:text-orange-600 transition-all duration-200"
              >
                Contact
              </a>
            </li>
          </ul>

          {/* Desktop Icons */}
          <div className="hidden md:flex gap-6 text-black text-2xl items-center">
            <div className="flex items-center bg-white rounded-full px-3 py-2">
              <FaSearch className="text-gray-500" />

              <input
                type="text"
                placeholder="Search..."
                className="outline-none ml-2 text-base w-40"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>

            <div className="relative">
              <Link to="/cart">
                <FaBagShopping className="cursor-pointer hover:text-orange-300" />

                <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {totalItems()}
                </span>
              </Link>
            </div>

            <FaUser className="cursor-pointer hover:text-orange-300" />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-2xl text-green-700"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 bg-white rounded-lg p-5 shadow-lg">
            <ul className="flex flex-col gap-4 font-semibold text-lg text-green-700">
              <li>
                <Link to="/" onClick={() => setIsOpen(false)}>
                  Home
                </Link>
              </li>

              <li>
                <a href="#">About Us</a>
              </li>

              <li>
                <Link
                  to="/category"
                  onClick={() => setIsOpen(false)}
                >
                  Category
                </Link>
              </li>

              <li>
                <a href="#">Contact</a>
              </li>
            </ul>

            {/* Mobile Search */}
            <div className="flex items-center bg-gray-100 rounded-full px-3 py-2 mt-5">
              <FaSearch className="text-gray-500" />

              <input
                type="text"
                placeholder="Search..."
                className="outline-none ml-2 bg-transparent w-full"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>

            {/* Mobile Icons */}
            <div className="flex gap-8 mt-5 text-2xl">
              <Link to="/cart" className="relative">
                <FaBagShopping />

                <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {totalItems()}
                </span>
              </Link>

              <FaUser />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;