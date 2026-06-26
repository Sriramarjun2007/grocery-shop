import { FaSearch } from "react-icons/fa";
import { FaBagShopping } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { Link, useLocation } from 'react-router-dom'; 
import { useCart } from "../CartContext"

function Navbar({ search, setSearch }) {
  const location = useLocation(); 
    const { totalItems } = useCart();
  return (
    <nav className="bg-[#FFDFD0] p-7 fixed top-0 left-0 w-full z-50 shadow-lg"> 

      <div className="flex justify-between items-center px-6"> 

        <h1 className="text-2xl font-bold text-green-700"> 
          🏪 GroCo
        </h1>

        <ul className="flex gap-8 font-semibold text-xl text-green-700 list-none"> 
          <li>
            <Link to="/"  
              className={`pb-1 transition-all duration-200 ${location.pathname === "/" ? "border-b-2 border-orange-400 text-orange-600" : "hover:text-orange-600"}`}>
              Home
            </Link>
          </li>
          <li><a href="#" className="hover:text-orange-300 transition-all duration-200">About Us</a></li> 
          <li>
            <Link to="/category"
              className={`pb-1 transition-all duration-200 ${location.pathname === "/category" ? "border-b-2 border-orange-400 text-orange-600" : "hover:text-orange-600"}`}>
              Category
            </Link>
          </li>
          <li><a href="#" className="hover:text-orange-300 transition-all duration-200">Contact</a></li> 
        </ul>

        <div className="flex gap-6 text-black text-2xl items-center"> 
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
            <FaBagShopping className="cursor-pointer hover:text-orange-300 transition-colors duration-200" /> 
            <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">{totalItems()}</span> </Link>
          </div>
          <FaUser className="cursor-pointer hover:text-orange-300 transition-colors duration-200" /> 
        </div>

      </div>
    </nav>
  );
}

export default Navbar;