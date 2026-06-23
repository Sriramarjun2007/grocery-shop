import { FaSearch } from "react-icons/fa";
import { FaBagShopping } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
function Navbar() {
  return (
    <nav className="bg-[#2D6A4F]  p-6 fixed w-full ">

    <div className="flex justify-between items-center">

        <h1 className="text-2xl font-bold text-white ">
          🏪  GroCo
        </h1>

        <ul className="flex gap-6 font-bold text-white  text-2xl ">
            <li><a href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li>Categories</li>
            <li><a href="#">Contact</a></li>
        </ul>
        <div className="flex gap-6 list-none text-white"> 
            <li><FaSearch /></li>
            <li><FaBagShopping /></li>
            <li> <FaUser/></li>
        </div>
        
    </div>

</nav>
  );
}

export default Navbar;