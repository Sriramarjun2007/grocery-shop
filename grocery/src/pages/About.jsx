function About() {
  return (
    <div className="bg-[#FFF8F3] min-h-screen py-20 px-4 sm:px-6 mt-10">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-green-700">
            About <span className="text-orange-500">Us</span>
          </h1>

          <p className="mt-4 text-gray-600 text-base sm:text-lg">
            Freshness delivered right to your doorstep.
          </p>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-12 items-center">

          {/* Image */}
          <div>
            <img
              src="https://images.unsplash.com/photo-1542838132-92c53300491e"
              alt="Fresh Grocery"
              className="rounded-3xl shadow-xl w-full h-72 sm:h-96 md:h-[450px] object-cover"
            />
          </div>

          {/* Text */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-green-700 mb-6">
              Welcome to GroCo
            </h2>

            <p className="text-gray-600 leading-7 sm:leading-8 mb-6 text-sm sm:text-base">
              At GroCo, we believe that fresh and healthy food should be
              accessible to everyone. Our mission is to provide premium-quality
              fruits, vegetables, and daily essentials at affordable prices.
            </p>

            <p className="text-gray-600 leading-7 sm:leading-8 mb-6 text-sm sm:text-base">
              We carefully source our products from trusted farmers and
              suppliers to ensure freshness, quality, and sustainability. With
              fast delivery and exceptional customer service, we aim to make
              grocery shopping simple, convenient, and enjoyable.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 sm:gap-6 mt-8">

              <div className="bg-white p-4 sm:p-6 rounded-2xl shadow-md text-center">
                <h3 className="text-2xl sm:text-3xl font-bold text-orange-500">
                  10K+
                </h3>
                <p className="text-gray-600 text-sm sm:text-base">
                  Happy Customers
                </p>
              </div>

              <div className="bg-white p-4 sm:p-6 rounded-2xl shadow-md text-center">
                <h3 className="text-2xl sm:text-3xl font-bold text-orange-500">
                  500+
                </h3>
                <p className="text-gray-600 text-sm sm:text-base">
                  Fresh Products
                </p>
              </div>

              <div className="bg-white p-4 sm:p-6 rounded-2xl shadow-md text-center">
                <h3 className="text-2xl sm:text-3xl font-bold text-orange-500">
                  24/7
                </h3>
                <p className="text-gray-600 text-sm sm:text-base">
                  Customer Support
                </p>
              </div>

              <div className="bg-white p-4 sm:p-6 rounded-2xl shadow-md text-center">
                <h3 className="text-2xl sm:text-3xl font-bold text-orange-500">
                  100%
                </h3>
                <p className="text-gray-600 text-sm sm:text-base">
                  Quality Guaranteed
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;