import { Link } from "react-router-dom";
import homeimage from "../assets/home.jpg";

function Home() {
  return (
    <div>
      <div
        className="h-screen bg-cover bg-center flex items-center"
        style={{ backgroundImage: `url(${homeimage})` }}
      >
        <div className="w-1/2" />

        <div className="w-1/2 pr-16 flex flex-col gap-4">

          <p className="bg-[#D8F3DC] text-green-800 text-sm font-semibold p-2 px-4 inline-block rounded-2xl w-fit">
            🌿 100% Certified Organic
          </p>

          <h1 className="text-green-900 text-4xl font-bold flex gap-2 flex-wrap">
            Fresh and <span className="text-red-500">Organic</span> Products for you
          </h1>

          <p className="text-gray-600 text-base">
            Fresh from nature, delivered with love. Your trusted source for 100% organic goodness.
          </p>

          <div className="flex gap-6 mt-4">
            <Link to="/category">
            <button className="text-white text-base font-bold bg-green-700 rounded-2xl px-8 py-3 cursor-pointer hover:bg-green-900 transition-all duration-200">
              Shop Now
            </button>
            </Link>
            <button className="text-white text-base font-bold bg-orange-600 rounded-2xl px-8 py-3 cursor-pointer hover:bg-orange-800 transition-all duration-200">
              About Us
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Home;