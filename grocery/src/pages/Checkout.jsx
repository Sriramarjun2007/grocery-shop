import { useState } from "react";

function Checkout() {
  const [step, setStep] = useState(1);
  const [payment, setPayment] = useState("Card");
  const [promo, setPromo] = useState("");
  const [promoMsg, setPromoMsg] = useState("");

  function applyPromo() {
    if (promo === "FRESH10") {
      setPromoMsg("✅ 10% discount applied!");
    } else {
      setPromoMsg("❌ Invalid promo code");
    }
  }

  return (
    <div className="min-h-screen bg-orange-50 pt-24 px-4 sm:px-6 lg:px-8 pb-10">
      <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-lg p-4 sm:p-6 lg:p-8">

        {/* Stepper */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10">

          {/* Step 1 */}
          <div className="flex items-center gap-2">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm
              ${
                step >= 1
                  ? "bg-orange-500 text-white"
                  : "border-2 border-gray-300 text-gray-400"
              }`}
            >
              1
            </div>
            <span
              className={`font-semibold ${
                step >= 1 ? "text-green-700" : "text-gray-400"
              }`}
            >
              Shipping
            </span>
          </div>

          <div
            className={`hidden sm:block flex-1 h-0.5 mx-3 ${
              step >= 2 ? "bg-orange-400" : "bg-gray-200"
            }`}
          />

          {/* Step 2 */}
          <div className="flex items-center gap-2">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm
              ${
                step >= 2
                  ? "bg-orange-500 text-white"
                  : "border-2 border-gray-300 text-gray-400"
              }`}
            >
              2
            </div>
            <span
              className={`font-semibold ${
                step >= 2 ? "text-green-700" : "text-gray-400"
              }`}
            >
              Payment
            </span>
          </div>

          <div
            className={`hidden sm:block flex-1 h-0.5 mx-3 ${
              step >= 3 ? "bg-orange-400" : "bg-gray-200"
            }`}
          />

          {/* Step 3 */}
          <div className="flex items-center gap-2">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm
              ${
                step >= 3
                  ? "bg-orange-500 text-white"
                  : "border-2 border-gray-300 text-gray-400"
              }`}
            >
              3
            </div>
            <span
              className={`font-semibold ${
                step >= 3 ? "text-green-700" : "text-gray-400"
              }`}
            >
              Confirm
            </span>
          </div>
        </div>

        {/* Step 1 */}
        {step === 1 && (
          <div>
            <h2 className="text-xl font-bold text-gray-800 mb-6">
              Delivery Information
            </h2>

            {/* Name */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="text-sm font-semibold text-gray-600 mb-1 block">
                  First Name
                </label>
                <input
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-300"
                />
              </div>

              <div>
                <label className="text-sm font-semibold text-gray-600 mb-1 block">
                  Last Name
                </label>
                <input
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-300"
                />
              </div>
            </div>

            {/* Email */}
            <div className="mb-4">
              <label className="text-sm font-semibold text-gray-600 mb-1 block">
                Email Address
              </label>
              <input
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-300"
              />
            </div>

            {/* Phone */}
            <div className="mb-4">
              <label className="text-sm font-semibold text-gray-600 mb-1 block">
                Phone Number
              </label>
              <input
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-300"
              />
            </div>

            {/* Address */}
            <div className="mb-4">
              <label className="text-sm font-semibold text-gray-600 mb-1 block">
                Street Address
              </label>
              <input
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-300"
              />
            </div>

            {/* City State ZIP */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <div>
                <label className="text-sm font-semibold text-gray-600 mb-1 block">
                  City
                </label>
                <input
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-300"
                />
              </div>

              <div>
                <label className="text-sm font-semibold text-gray-600 mb-1 block">
                  State / Province
                </label>
                <input
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-300"
                />
              </div>

              <div>
                <label className="text-sm font-semibold text-gray-600 mb-1 block">
                  ZIP / Postal Code
                </label>
                <input
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-300"
                />
              </div>
            </div>

            {/* Country */}
            <div className="mb-6">
              <label className="text-sm font-semibold text-gray-600 mb-1 block">
                Country
              </label>
              <input
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-300"
              />
            </div>

            {/* Payment Options */}
            <h2 className="text-xl font-bold text-gray-800 mb-4">
              Payment Options
            </h2>

            <div className="flex flex-col gap-3 mb-6">
              {[
                { label: "Card", icon: "💳" },
                { label: "UPI", icon: "📱" },
                { label: "Netbanking", icon: "🏦" },
              ].map((option) => (
                <label
                  key={option.label}
                  className="flex items-center gap-3 cursor-pointer"
                >
                  <input
                    type="radio"
                    name="payment"
                    checked={payment === option.label}
                    onChange={() => setPayment(option.label)}
                    className="accent-orange-500 w-4 h-4"
                  />
                  <span>{option.icon}</span>
                  <span className="font-semibold text-gray-700">
                    {option.label}
                  </span>
                </label>
              ))}
            </div>

            {/* Promo */}
            <h2 className="text-xl font-bold text-gray-800 mb-3">
              Promo Code
            </h2>

            <div className="flex flex-col sm:flex-row gap-3 mb-2">
              <input
                value={promo}
                onChange={(e) => setPromo(e.target.value)}
                placeholder="Enter promo code"
                className="flex-1 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-300"
              />

              <button
                onClick={applyPromo}
                className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-6 py-3 rounded-xl transition-all duration-200 w-full sm:w-auto"
              >
                Apply
              </button>
            </div>

            {promoMsg && (
              <p className="text-sm mb-4">{promoMsg}</p>
            )}

            <div className="flex justify-end mt-6">
              <button
                onClick={() => setStep(2)}
                className="bg-green-700 hover:bg-green-900 text-white font-bold px-8 py-3 rounded-2xl transition-all duration-200 w-full sm:w-auto"
              >
                Continue to Payment
              </button>
            </div>
          </div>
        )}

        {/* Step 2 */}
        {step === 2 && (
          <div>
            <h2 className="text-xl font-bold text-gray-800 mb-6">
              Payment Details
            </h2>

            <p className="text-gray-500 mb-6">
              Selected:
              <span className="font-bold text-green-700 ml-2">
                {payment}
              </span>
            </p>

            {payment === "Card" && (
              <div className="flex flex-col gap-4">
                <div>
                  <label className="text-sm font-semibold text-gray-600 mb-1 block">
                    Card Number
                  </label>
                  <input
                    placeholder="1234 5678 9012 3456"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-300"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-semibold text-gray-600 mb-1 block">
                      Expiry
                    </label>
                    <input
                      placeholder="MM/YY"
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-300"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-semibold text-gray-600 mb-1 block">
                      CVV
                    </label>
                    <input
                      placeholder="123"
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-300"
                    />
                  </div>
                </div>
              </div>
            )}

            {payment === "UPI" && (
              <div>
                <label className="text-sm font-semibold text-gray-600 mb-1 block">
                  UPI ID
                </label>
                <input
                  placeholder="yourname@upi"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-300"
                />
              </div>
            )}

            {payment === "Netbanking" && (
              <div>
                <label className="text-sm font-semibold text-gray-600 mb-1 block">
                  Select Bank
                </label>
                <select className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-300">
                  <option>SBI</option>
                  <option>HDFC</option>
                  <option>ICICI</option>
                  <option>Axis</option>
                  <option>Kotak</option>
                </select>
              </div>
            )}

            <div className="flex flex-col sm:flex-row justify-between gap-4 mt-8">
              <button
                onClick={() => setStep(1)}
                className="border-2 border-gray-300 text-gray-600 font-bold px-8 py-3 rounded-2xl hover:bg-gray-100 transition-all duration-200 w-full sm:w-auto"
              >
                Back
              </button>

              <button
                onClick={() => setStep(3)}
                className="bg-green-700 hover:bg-green-900 text-white font-bold px-8 py-3 rounded-2xl transition-all duration-200 w-full sm:w-auto"
              >
                Confirm Order
              </button>
            </div>
          </div>
        )}

        {/* Step 3 */}
        {step === 3 && (
          <div className="text-center py-10">
            <div className="text-6xl mb-4">🎉</div>

            <h2 className="text-2xl font-bold text-green-700 mb-2">
              Order Placed!
            </h2>

            <p className="text-gray-500 mb-6">
              Thank you for shopping with GroCo. Your order is confirmed.
            </p>

            <button
              onClick={() => (window.location.href = "/")}
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-10 py-3 rounded-2xl transition-all duration-200"
            >
              Back to Home
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Checkout;