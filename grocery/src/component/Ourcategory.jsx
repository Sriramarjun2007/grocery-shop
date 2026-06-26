import vegetables from "../assets/vegetables.png";
import fruits from "../assets/fruits.png";
import diary from "../assets/diary.png";
import { Link } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "Fresh Vegetables",
    offer: "Upto 45% offer",
    img: vegetables,
  },
  {
    id: 2,
    name: "Fresh Fruits",
    offer: "Upto 45% offer",
    img: fruits,
  },
  {
    id: 3,
    name: "Fresh Diary",
    offer: "Upto 45% offer",
    img: diary,
  },
];

function Ourcategory() {
  return (
    <div className="py-12">
      {/* Heading */}
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl text-green-700 font-bold">
          Our Category
        </h2>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 sm:px-6 lg:px-8 mt-10">
        {products.map((product) => (
          <div
            key={product.id}
            className="
              relative border-2 border-gray-100
              rounded-2xl bg-white shadow-md
              overflow-hidden cursor-pointer group
              transition-all duration-300 ease-out
              hover:shadow-2xl hover:-translate-y-2
              hover:border-orange-400 hover:ring-2 hover:ring-orange-300
            "
          >
            {/* Image */}
            <div className="bg-white flex items-center justify-center h-56 w-full p-6">
              <img
                src={product.img}
                alt={product.name}
                className="w-full h-36 object-contain transition-transform duration-300 group-hover:scale-110"
              />
            </div>

            
            <div className="p-6 text-center">
              <p className="text-green-700 font-bold text-xl">
                {product.name}
              </p>

              <p className="text-gray-400 mt-3">
                {product.offer}
              </p>

              <Link to="/category">
                <button
                  className="
                    mt-5 w-full sm:w-40
                    bg-gray-500 hover:bg-orange-600
                    active:scale-95
                    text-white font-semibold
                    py-3 rounded-xl
                    transition-all duration-200
                  "
                >
                  Show More
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Ourcategory;