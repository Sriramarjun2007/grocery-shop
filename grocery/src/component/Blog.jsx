import blog1 from "../assets/blog1.png";
import blog2 from "../assets/blog2.png";
import blog3 from "../assets/blog3.png";
import { FaUser, FaCalendarAlt } from "react-icons/fa";

const blogs = [
  {
    id: 1,
    image: blog1,
    title: "Fresh And Organic vegetables And Fruits",
  },
  {
    id: 2,
    image: blog2,
    title: "Fresh And Organic vegetables And Fruits",
  },
  {
    id: 3,
    image: blog3,
    title: "Fresh And Organic vegetables And Fruits",
  },
];

function Blog() {
  return (
    <div className="bg-[#F8F5F4] py-10">
      {/* Heading */}
      <div className="flex justify-center items-center mb-16">
        <h2 className="text-5xl font-bold text-green-700 mr-15 mt-15">
          Our
        </h2>

        <div className="relative bg-orange-400 text-white px-15 py-7 text-4xl font-bold mt-15">
          Blog

          {/* Left Triangle */}
          <div className="absolute top-0 -left-12 w-0 h-0 border-t-[48px] border-b-[48px] border-r-[48px] border-t-transparent border-b-transparent border-r-orange-400"></div>

          {/* Right Triangle */}
          <div className="absolute top-0 -right-12 w-0 h-0 border-t-[48px] border-b-[48px] border-l-[48px] border-t-transparent border-b-transparent border-l-orange-400"></div>
        </div>
      </div>

      {/* Cards */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-8">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-white border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300"
          >
            {/* Image */}
            <img
              src={blog.image}
              alt="blog"
              className="w-full h-56 object-cover"
            />

            {/* Content */}
            <div className="p-6">
              {/* Author and Date */}
              <div className="flex justify-between text-gray-500 text-sm border-b pb-4">
                <div className="flex items-center gap-2">
                  <FaUser className="text-orange-400" />
                  <span>By Admin</span>
                </div>

                <div className="flex items-center gap-2">
                  <FaCalendarAlt className="text-orange-400" />
                  <span>1st May,2021</span>
                </div>
              </div>

              {/* Title */}
              <h3 className="text-3xl text-green-700 font-bold mt-5">
                {blog.title}
              </h3>

              {/* Description */}
              <p className="text-gray-500 mt-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>

              {/* Button */}
              <button className="mt-6 border-2 border-black rounded-xl px-8 py-2 font-medium hover:bg-black hover:text-white transition">
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blog;