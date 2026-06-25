import vegetables from "../assets/vegetables.png";
import fruits from "../assets/fruits.png";
import diary from "../assets/diary.png";
import { Link } from "react-router-dom";
 

   
    const products = [
    { id: 1, name: "Fresh Vegetables",      offer: "Upto 45% offer",   img: vegetables      },
    { id: 2, name: "Fresh Fruits",     offer: "Upto 45% offer",   img: fruits    },
    { id: 3, name: "Fresh Diary",    offer: "Upto 45% offer",  img: diary    },
    ];
    function Ourcategory() {
    return (
        <div>
        {/* Heading */}
        <div className="mt-25 text-center text-2xl text-green-700 font-bold">
            <h2>Our Category</h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-15 px-16 mt-10 pl-50 pr-50">
            {products.map((product) => (
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
                {/* Image */}
                <div className="bg-white     flex items-center justify-center h-54 w-full">
                <img
                    src={product.img}
                    className="w-full h-36 object-contain transition-transform duration-300 group-hover:scale-110"
                    alt={product.name}
                />
                </div>

                {/* Content */}
                <div className="p-4">
                <p className="text-green-700 font-bold text-xl leading-tight text-center pt-2">{product.name}</p>
                <p className="text-l mt-4 text-gray-400 mt-0.5 text-center"> {product.offer}</p>

                <Link to="/category">
                <button className="
                    mt-4 ml-17 w-40
                    bg-gray-500 hover:bg-orange-600 active:scale-95
                    text-white font-semibold text-sm
                    py-2.5 rounded-xl
                    transition-all duration-200
                    flex items-center justify-center gap-2
                ">
                    Show more
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