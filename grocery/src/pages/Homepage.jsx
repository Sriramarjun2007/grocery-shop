import { Link } from "react-router-dom";
import homeimage from "../assets/home.jpg";

function Home() {
  return (
    <div>
      <div
        className="min-h-screen bg-cover bg-center flex items-center"
        style={{ backgroundImage: `url(${homeimage})` }}
      >
        {/* Content Container */}
        <div className="w-full lg:w-1/2 lg:ml-auto px-6 sm:px-10 md:px-16 lg:pr-20 flex flex-col gap-4 text-center lg:text-left">

          <p className="bg-[#D8F3DC] text-green-800 text-sm font-semibold p-2 px-4 inline-block rounded-2xl w-fit mx-auto lg:mx-0">
            🌿 100% Certified Organic
          </p>

          <h1 className="text-green-900 text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            Fresh and{" "}
            <span className="text-red-500">Organic</span> Products for you
          </h1>

          <p className="text-gray-600 text-base sm:text-lg">
            Fresh from nature, delivered with love. Your trusted source for
            100% organic goodness.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-4 justify-center lg:justify-start">
            <Link to="/category">
              <button className="w-full sm:w-auto text-white text-base font-bold bg-green-700 rounded-2xl px-8 py-3 hover:bg-green-900 transition-all duration-200">
                Shop Now
              </button>
            </Link>

            <button className="w-full sm:w-auto text-white text-base font-bold bg-orange-600 rounded-2xl px-8 py-3 hover:bg-orange-800 transition-all duration-200">
              About Us
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Home;