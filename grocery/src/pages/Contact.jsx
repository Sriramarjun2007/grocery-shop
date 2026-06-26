import { FaUser, FaEnvelope, FaCommentDots } from "react-icons/fa";

function Contact() {
  return (
    <div className="min-h-screen bg-[#f8f4f1] flex items-center justify-center px-4 sm:px-6 py-12 mt-10">
      <div className="w-full max-w-4xl bg-white rounded-3xl shadow-xl p-6 sm:p-8 md:p-12">

        {/* Heading */}
        <div className="text-center mb-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-green-700">
            Contact <span className="text-orange-500">Us</span>
          </h1>

          <p className="text-gray-500 mt-3 text-base sm:text-lg">
            We'd love to hear from you. Send us a message.
          </p>
        </div>

        {/* Form */}
        <form className="space-y-6 sm:space-y-8">

          {/* Name */}
          <div>
            <label className="block mb-3 text-green-700 font-semibold">
              Name
            </label>

            <div className="relative">
              <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

              <input
                type="text"
                placeholder="Enter your name"
                className="w-full border border-gray-300 rounded-xl py-4 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block mb-3 text-green-700 font-semibold">
              Email
            </label>

            <div className="relative">
              <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

              <input
                type="email"
                placeholder="Enter your email"
                className="w-full border border-gray-300 rounded-xl py-4 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>
          </div>

          {/* Message */}
          <div>
            <label className="block mb-3 text-green-700 font-semibold">
              Message
            </label>

            <div className="relative">
              <FaCommentDots className="absolute left-4 top-6 text-gray-400" />

              <textarea
                rows="6"
                placeholder="Write your message..."
                className="w-full border border-gray-300 rounded-xl py-4 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-orange-400 resize-none"
              ></textarea>
            </div>
          </div>

          {/* Newsletter */}
          <div className="flex items-start gap-3">
            <input
              type="checkbox"
              className="w-5 h-5 accent-orange-500 mt-1"
            />

            <label className="text-gray-600 text-sm sm:text-base">
              Subscribe to our newsletter
            </label>
          </div>

          {/* Button */}
          <button
            className="w-full bg-orange-500 hover:bg-orange-600 text-white text-lg sm:text-xl font-semibold py-4 rounded-full transition duration-300 shadow-lg"
          >
            Submit Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;