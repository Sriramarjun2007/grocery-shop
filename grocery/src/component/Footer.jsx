import {
  FaStore,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-[#FFDFD0] py-12 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Logo & Description */}
        <div>
          <div className="flex items-center gap-3">
            <FaStore className="text-orange-500 text-2xl md:text-3xl" />
            <h2 className="text-3xl md:text-4xl font-bold text-green-700">
              GroCo
            </h2>
          </div>

          <p className="mt-6 text-gray-600 text-base md:text-lg leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Earum alias voluptas labore est dolorum tenetur!
          </p>

          <div className="flex gap-4 mt-8 flex-wrap">
            {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map(
              (Icon, index) => (
                <div
                  key={index}
                  className="w-12 h-12 md:w-14 md:h-14 bg-gray-200 rounded-xl flex items-center justify-center hover:bg-green-700 cursor-pointer transition group"
                >
                  <Icon className="text-xl md:text-2xl text-green-700 group-hover:text-white" />
                </div>
              )
            )}
          </div>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-green-700 mb-6">
            Contact Info
          </h2>

          <div className="space-y-5 text-base md:text-lg text-gray-600">
            <div className="flex items-center gap-3">
              <FaPhoneAlt className="text-orange-500" />
              <span>+123-9887-0987</span>
            </div>

            <div className="flex items-center gap-3">
              <FaPhoneAlt className="text-orange-500" />
              <span>+123-9887-0987</span>
            </div>

            <div className="flex items-center gap-3">
              <FaEnvelope className="text-orange-500" />
              <span className="break-all">gayauthi@gmail.com</span>
            </div>

            <div className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-orange-500" />
              <span>Mumbai, India - 9989876</span>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-green-700 mb-6">
            Quick Links
          </h2>

          <ul className="space-y-4 text-base md:text-lg text-gray-600">
            <li className="hover:text-orange-500 cursor-pointer transition">
              Home
            </li>
            <li className="hover:text-orange-500 cursor-pointer transition">
              Features
            </li>
            <li className="hover:text-orange-500 cursor-pointer transition">
              Products
            </li>
            <li className="hover:text-orange-500 cursor-pointer transition">
              Categories
            </li>
            <li className="hover:text-orange-500 cursor-pointer transition">
              Review
            </li>
            <li className="hover:text-orange-500 cursor-pointer transition">
              Blog
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-green-700 mb-6">
            Newsletter
          </h2>

          <p className="text-gray-600 text-base md:text-lg mb-6">
            Subscribe For Latest Updates
          </p>

          <input
            type="email"
            placeholder="Enter Your Email"
            className="w-full bg-gray-200 rounded-xl p-4 text-base outline-none"
          />

          <button className="mt-6 px-8 py-3 border-2 border-black rounded-xl hover:bg-black hover:text-white transition w-full sm:w-auto">
            Subscribe
          </button>
        </div>

      </div>

      {/* Bottom Copyright */}
      <div className="border-t border-gray-300 mt-10 pt-6 text-center text-gray-600 text-sm md:text-base">
        © 2026 <span className="font-semibold text-green-700">GroCo</span>.
        All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;
