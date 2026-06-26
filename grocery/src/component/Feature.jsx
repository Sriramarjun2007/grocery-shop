import organic from "../assets/organic.png";
import delivery from "../assets/delivery.png";
import payment from "../assets/payment.png";

function Feature() {
  return (
    <div className="py-12 bg-gray-50">
      {/* Heading */}
      <p className="text-center text-xl md:text-2xl text-green-700 font-bold mb-10">
        WHAT WE OFFER
      </p>

      {/* Cards Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

        {/* Card 1 */}
        <div className="
          bg-white rounded-lg border-2 border-gray-300
          shadow-lg p-6
          transition-all duration-300
          hover:shadow-2xl hover:-translate-y-2
          hover:scale-105 hover:border-white
          hover:ring-4 hover:ring-orange-500
        ">
          <img
            src={organic}
            alt="Organic"
            className="w-40 h-32 md:w-48 md:h-36 mx-auto"
          />

          <p className="text-green-700 font-bold text-xl text-center mt-4">
            Fresh and Organic
          </p>

          <p className="text-sm text-center text-gray-600 mt-3">
            Discover farm-fresh vegetables and fruits grown naturally to
            nourish your body and support a healthy lifestyle.
          </p>
        </div>

        {/* Card 2 */}
        <div className="
          bg-white rounded-lg border-2 border-gray-300
          shadow-lg p-6
          transition-all duration-300
          hover:shadow-2xl hover:-translate-y-2
          hover:scale-105 hover:border-white
          hover:ring-4 hover:ring-orange-500
        ">
          <img
            src={delivery}
            alt="Delivery"
            className="w-40 h-32 md:w-48 md:h-36 mx-auto"
          />

          <p className="text-green-700 font-bold text-xl text-center mt-4">
            Fast Delivery
          </p>

          <p className="text-sm text-center text-gray-600 mt-3">
            Get your fresh groceries delivered quickly to your doorstep with
            our reliable and timely delivery service.
          </p>
        </div>

        {/* Card 3 */}
        <div className="
          bg-white rounded-lg border-2 border-gray-300
          shadow-lg p-6
          transition-all duration-300
          hover:shadow-2xl hover:-translate-y-2
          hover:scale-105 hover:border-white
          hover:ring-4 hover:ring-orange-500
        ">
          <img
            src={payment}
            alt="Payment"
            className="w-40 h-32 md:w-48 md:h-36 mx-auto"
          />

          <p className="text-green-700 font-bold text-xl text-center mt-4">
            Secure Payment
          </p>

          <p className="text-sm text-center text-gray-600 mt-3">
            Shop with confidence using our secure and convenient payment
            methods designed for a seamless checkout experience.
          </p>
        </div>

      </div>
    </div>
  );
}

export default Feature;