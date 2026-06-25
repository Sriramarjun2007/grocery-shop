    import onion from "../assets/onion.png";
    import carrot from "../assets/carrot.png";
    import brinjal from "../assets/brinjal.png";
    import greenapple from "../assets/greenapple.png";
    import watermeloon from "../assets/watermeloon.png";
    import orange from "../assets/orange.png";
   
    const products = [
    { id: 1, name: "Fresh Onion",      variety: "Red variety",    price: "₹80",  oldPrice: "₹120", discount: "33% off", reviews: "(128)", img: onion      },
    { id: 2, name: "Fresh Carrot",     variety: "Orange variety", price: "₹40",  oldPrice: "₹60",  discount: "33% off", reviews: "(98)",  img: carrot     },
    { id: 3, name: "Fresh Brinjal",    variety: "Purple variety", price: "₹50",  oldPrice: "₹80",  discount: "37% off", reviews: "(76)",  img: brinjal    },
    { id: 4, name: "Fresh Green Apple",variety: "Green variety",  price: "₹30",  oldPrice: "₹50",  discount: "40% off", reviews: "(210)", img: greenapple },
    { id: 5, name: "Fresh Watermelon", variety: "Red variety",    price: "₹60",  oldPrice: "₹90",  discount: "33% off", reviews: "(54)",  img: watermeloon},
    { id: 6, name: "Fresh Orange",     variety: "Navel variety",  price: "₹70",  oldPrice: "₹100", discount: "30% off", reviews: "(87)",  img: orange     },
    ];
    function Ourproduct() {
    return (
        <div>
        {/* Heading */}
        <div className="mt-25 text-center text-2xl text-green-700 font-bold">
            <h2>Our Products</h2>
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
                <div className="bg-[#FFF8F5]     flex items-center justify-center h-54 w-full">
                <img
                    src={product.img}
                    className="w-36 h-36 object-contain transition-transform duration-300 group-hover:scale-110"
                    alt={product.name}
                />
                </div>

                {/* Badge */}
                <span className="absolute top-3 left-3 bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full">
                Fresh
                </span>

                {/* Content */}
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

                <button className="
                    mt-4 w-full
                    bg-orange-500 hover:bg-orange-600 active:scale-95
                    text-white font-semibold text-sm
                    py-2.5 rounded-xl
                    transition-all duration-200
                    flex items-center justify-center gap-2
                ">
                    🛒 Add to cart
                </button>
                </div>
            </div>
            ))}
        </div>
        </div>
    );
    }

    export default Ourproduct;