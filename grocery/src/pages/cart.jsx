import { useCart } from "../CartContext";
import { useNavigate } from 'react-router-dom';

function Cart() {
  const { cart, removeFromCart, totalItems, updateQty } = useCart();
  const navigate = useNavigate();

  const totalPrice = cart.reduce((sum, item) => {
    const price = parseInt(item.price.replace("₹", ""));
    return sum + price * item.qty;
  }, 0);

  return (
    <div className="mt-16 px-10 py-8">
      <h2 className="text-2xl text-green-700 font-bold mb-6">
        🛒 Your Cart ({totalItems()} items)
      </h2>

      {cart.length === 0 ? (
        <p className="text-gray-400 text-sm">Your cart is empty.</p>
      ) : (
        <div className="flex flex-col gap-4">
          {cart.map((item) => (
            <div key={item.id} className="flex items-center gap-6 bg-white border border-gray-100 rounded-2xl p-4 shadow-sm">
              <img src={item.img} className="w-16 h-16 object-contain" alt={item.name} />

              <div className="flex-1">
                <p className="font-bold text-green-700">{item.name}</p>
                <p className="text-sm text-gray-400">{item.variety}</p>
                <p className="text-sm font-semibold text-gray-800">
                  {item.price} × {item.qty} = ₹{parseInt(item.price.replace("₹", "")) * item.qty}
                </p>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => updateQty(item.id, -1)}
                  className="w-8 h-8 rounded-full border-2 border-orange-400 text-orange-500 font-bold hover:bg-orange-400 hover:text-white transition-all duration-200"
                >
                  −
                </button>
                <span className="font-bold text-gray-800 w-4 text-center">{item.qty}</span>
                <button
                  onClick={() => updateQty(item.id, +1)}
                  className="w-8 h-8 rounded-full border-2 border-orange-400 text-orange-500 font-bold hover:bg-orange-400 hover:text-white transition-all duration-200"
                >
                  +
                </button>
              </div>

              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-400 hover:text-red-600 font-semibold text-sm transition-all"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}

      {/* ✅ always visible outside the condition */}
      <div className="mt-6 text-right">
        <p className="text-xl font-bold text-green-700">Total: ₹{totalPrice}</p>
        <button
          onClick={() => navigate('/checkout')}
          disabled={cart.length === 0}
          className={`mt-4 text-white font-bold px-10 py-3 rounded-2xl transition-all duration-200
            ${cart.length === 0
              ? "bg-gray-300 cursor-not-allowed"
              : "bg-orange-500 hover:bg-orange-600 cursor-pointer"
            }`}
        >
          Checkout
        </button>
      </div>

    </div>
  );
}

export default Cart;