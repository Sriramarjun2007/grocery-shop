import { useCart } from "../CartContext";
import { useNavigate } from "react-router-dom";

function Cart() {
  const { cart, removeFromCart, totalItems, updateQty } = useCart();
  const navigate = useNavigate();

  const totalPrice = cart.reduce((sum, item) => {
    const price = parseInt(item.price.replace("₹", ""));
    return sum + price * item.qty;
  }, 0);

  return (
    <div className="mt-20 px-4 sm:px-6 lg:px-10 py-8 max-w-6xl mx-auto">
      <h2 className="text-2xl md:text-3xl text-green-700 font-bold mb-6">
        🛒 Your Cart ({totalItems()} items)
      </h2>

      {cart.length === 0 ? (
        <p className="text-gray-400 text-base">Your cart is empty.</p>
      ) : (
        <div className="flex flex-col gap-5">
          {cart.map((item) => (
            <div
              key={item.id}
              className="
                flex flex-col sm:flex-row
                items-center sm:items-center
                gap-4
                bg-white border border-gray-100
                rounded-2xl p-4 shadow-sm
              "
            >
              {/* Product Image */}
              <img
                src={item.img}
                alt={item.name}
                className="w-24 h-24 object-contain"
              />

              {/* Product Details */}
              <div className="flex-1 text-center sm:text-left">
                <p className="font-bold text-green-700 text-lg">
                  {item.name}
                </p>

                <p className="text-sm text-gray-400">
                  {item.variety}
                </p>

                <p className="text-sm font-semibold text-gray-800 mt-2">
                  {item.price} × {item.qty} = ₹
                  {parseInt(item.price.replace("₹", "")) * item.qty}
                </p>
              </div>

              {/* Quantity Controls */}
              <div className="flex items-center gap-3">
                <button
                  onClick={() => updateQty(item.id, -1)}
                  className="w-8 h-8 rounded-full border-2 border-orange-400 text-orange-500 font-bold hover:bg-orange-400 hover:text-white transition"
                >
                  −
                </button>

                <span className="font-bold text-gray-800 w-6 text-center">
                  {item.qty}
                </span>

                <button
                  onClick={() => updateQty(item.id, +1)}
                  className="w-8 h-8 rounded-full border-2 border-orange-400 text-orange-500 font-bold hover:bg-orange-400 hover:text-white transition"
                >
                  +
                </button>
              </div>

              {/* Remove Button */}
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-400 hover:text-red-600 font-semibold text-sm transition"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Total & Checkout */}
      <div className="mt-8 border-t pt-6">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-2xl font-bold text-green-700">
            Total: ₹{totalPrice}
          </p>

          <button
            onClick={() => navigate("/checkout")}
            disabled={cart.length === 0}
            className={`px-10 py-3 rounded-2xl text-white font-bold transition w-full sm:w-auto
              ${
                cart.length === 0
                  ? "bg-gray-300 cursor-not-allowed"
                  : "bg-orange-500 hover:bg-orange-600"
              }`}
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;