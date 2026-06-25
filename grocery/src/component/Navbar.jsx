import { FaSearch } from "react-icons/fa";
import { FaBagShopping } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { Link, useLocation } from 'react-router-dom'; 

function Navbar() {
  const location = useLocation(); 
  return (
    <nav className="bg-[#2D6A4F] p-4 fixed top-0 left-0 w-full z-50 shadow-lg"> 

      <div className="flex justify-between items-center px-6"> 

        <h1 className="text-xl font-bold text-white"> 
          🏪 GroCo
        </h1>

        <ul className="flex gap-8 font-semibold text-base text-white list-none"> 
          <li>
            <Link to="/"  
              className={`pb-1 transition-all duration-200 ${location.pathname === "/" ? "border-b-2 border-orange-400 text-orange-300" : "hover:text-orange-300"}`}>
              Home
            </Link>
          </li>
          <li><a href="#" className="hover:text-orange-300 transition-all duration-200">About Us</a></li> 
          <li>
            <Link to="/category"
              className={`pb-1 transition-all duration-200 ${location.pathname === "/category" ? "border-b-2 border-orange-400 text-orange-300" : "hover:text-orange-300"}`}>
              Products
            </Link>
          </li>
          <li><a href="#" className="hover:text-orange-300 transition-all duration-200">Contact</a></li> 
        </ul>

        <div className="flex gap-6 text-white text-xl items-center"> 
          <FaSearch className="cursor-pointer hover:text-orange-300 transition-colors duration-200" /> 
          <div className="relative">
            <FaBagShopping className="cursor-pointer hover:text-orange-300 transition-colors duration-200" /> 
            <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">2</span> 
          </div>
          <FaUser className="cursor-pointer hover:text-orange-300 transition-colors duration-200" /> 
        </div>

      </div>
    </nav>
  );
}

export default Navbar;