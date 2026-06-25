import { useState } from "react";
import { useCart } from "../CartContext";  
import onion from "../assets/onion.png";
import carrot from "../assets/carrot.png";
import brinjal from "../assets/brinjal.png";
import greenapple from "../assets/greenapple.png";
import watermeloon from "../assets/watermeloon.png";
import orange from "../assets/orange.png";
import kivi from "../assets/kivi.png";
import strawberry from "../assets/strawberry.png";
import gavua from "../assets/gavua.png";
import milk from "../assets/milk.png";
import cheese from "../assets/cheese.png";
import butter from "../assets/butter.png";
import pig from "../assets/pig.png";
import chicken from "../assets/chicken.png";
import goat from "../assets/goat.png";



const products = [
  { id: 1, name: "Fresh Onion",      category: "Vegetables", variety: "Red variety",    price: "₹80",  oldPrice: "₹120", discount: "33% off", reviews: "(128)", img: onion      },
  { id: 2, name: "Fresh Carrot",     category: "Vegetables", variety: "Orange variety", price: "₹40",  oldPrice: "₹60",  discount: "33% off", reviews: "(98)",  img: carrot     },
  { id: 3, name: "Fresh Brinjal",    category: "Vegetables", variety: "Purple variety", price: "₹50",  oldPrice: "₹80",  discount: "37% off", reviews: "(76)",  img: brinjal    },
  { id: 4, name: "Fresh Green Apple",category: "Fruits",     variety: "Green variety",  price: "₹30",  oldPrice: "₹50",  discount: "40% off", reviews: "(210)", img: greenapple },
  { id: 5, name: "Fresh Watermelon", category: "Fruits",     variety: "Red variety",    price: "₹60",  oldPrice: "₹90",  discount: "33% off", reviews: "(54)",  img: watermeloon},
  { id: 6, name: "Fresh Orange",     category: "Fruits",     variety: "Navel variety",  price: "₹70",  oldPrice: "₹100", discount: "30% off", reviews: "(87)",  img: orange     },
  { id: 7, name: "Fresh Kivi",       category: "Fruits",     variety: "Navel variety",  price: "₹60",  oldPrice: "₹100", discount: "40% off", reviews: "(90)",  img: kivi       },
  { id: 8, name: "Fresh Strawberry", category: "Fruits",     variety: "Red variety",    price: "₹45",  oldPrice: "₹90", discount: "50% off", reviews: "(187)",  img: strawberry },
  { id: 9, name: "Fresh Gauva",      category: "Fruits",     variety: "Green variety",  price: "₹150",  oldPrice: "₹200", discount: "25% off", reviews: "(2)",  img: gavua      },
  {id: 10, name: "Fresh Butter",     category: "Dairy Products",     variety: "Milk variety",  price: "₹25",  oldPrice: "₹50", discount: "50% off", reviews: "(12)",  img: butter      },
  {id: 11, name: "Fresh Milk",       category: "Dairy Products",     variety: "Milk variety",  price: "₹40",  oldPrice: "₹70", discount: "27% off", reviews: "(223)",  img: milk     },
  {id: 12, name: "Fresh Cheese",     category: "Dairy Products",     variety: "Milk variety",  price: "₹140",  oldPrice: "₹170", discount: "23% off", reviews: "(78)",  img: cheese     },
  {id: 13, name: "Fresh Chicken meat",     category: "Fresh Meats",     variety: "Meat variety",  price: "₹125",  oldPrice: "₹150", discount: "50% off", reviews: "(12)",  img: chicken      },
  {id: 14, name: "Fresh Goat meat",       category: "Fresh Meats",     variety: "Meat variety",  price: "₹140",  oldPrice: "₹170", discount: "27% off", reviews: "(223)",  img: goat     },
  {id: 15, name: "Fresh Pig meat",     category: "Fresh Meats",     variety: "Meat variety",  price: "₹240",  oldPrice: "₹370", discount: "23% off", reviews: "(78)",  img: pig    },
];

const categories = ["All", "Vegetables", "Fruits", "Dairy Products", "Fresh Meats"];

function Ourproduct() {
  const [selected, setSelected] = useState("All");
  const { addToCart } = useCart();

  const filtered = selected === "All"
    ? products
    : products.filter((p) => p.category === selected);

  return (
    <div className="flex  mt-18">

      {/* Sidebar */}
      <div className="fixed top-16 left-0 h-screen w-48 bg-white shadow-md px-4 py-6 z-40 flex flex-col gap-2 pt-10">
        <h3 className="text-green-800 font-bold text-lg mb-2">Categories</h3>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelected(cat)}
            className={`
              text-left px-4 py-2 rounded-xl font-semibold text-sm
              transition-all duration-200
              ${selected === cat
                ? "bg-orange-500 text-white shadow-md"
                : "text-green-700 hover:bg-orange-50 hover:text-orange-500"}
            `}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Divider */}
      <div className="w-px bg-gray-200 self-stretch" />

      {/* Products */}
      <div className="ml-48 flex-1 px-10 py-8">
        <h2 className="text-2xl text-green-700 font-bold mb-6">{selected}</h2>

        {filtered.length === 0 ? (
          <p className="text-gray-400 text-sm mt-10">No products in this category yet.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {filtered.map((product) => (
              <div
                key={product.id}
                className="
                  relative border-2 border-gray-100
                  rounded-2xl bg-white shadow-md
                  overflow-hidden cursor-pointer group z-0
                  transition-all duration-300 ease-out
                  hover:shadow-2xl hover:-translate-y-2
                  hover:border-orange-400 hover:ring-2 hover:ring-orange-300
                "
              >
                <div className="bg-[#FFF8F5] flex items-center justify-center h-44 w-full">
                  <img
                    src={product.img}
                    className="w-36 h-36 object-contain transition-transform duration-300 group-hover:scale-110"
                    alt={product.name}
                  />
                </div>

                <span className="absolute top-3 left-3 bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full">
                  {product.category}
                </span>

                <div className="p-4">
                  <p className="text-green-700 font-bold text-lg leading-tight">{product.name}</p>
                  <p className="text-xs text-gray-400 mt-0.5">1 kg · {product.variety}</p>

                  <div className="flex items-center gap-1 mt-2">
                    <span className="text-yellow-400 text-sm">★★★★★</span>
                    <span className="text-xs text-gray-400">{product.reviews}</span>
                  </div>

                  <div className="flex items-baseline gap-2 mt-2">
                    <span className="text-gray-800 font-bold text-xl">{product.price}</span>
                    <span className="text-gray-400 text-sm line-through">{product.oldPrice}</span>
                    <span className="text-green-600 text-xs font-semibold">{product.discount}</span>
                  </div>

                  <button onClick={() => {
                            addToCart(product);
                            alert(`${product.name} is added to cart!`);
                            }} className="
                    mt-4 w-full bg-orange-500 hover:bg-orange-600 active:scale-95
                    text-white font-semibold text-sm py-2.5 rounded-xl
                    transition-all duration-200
                    flex items-center justify-center gap-2
                  " >
                    🛒 Add to cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

    </div>
  );
}

export default Ourproduct;