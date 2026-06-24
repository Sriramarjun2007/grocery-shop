import homeimage from "../assets/home.jpg";
import organic from "../assets/organic.png"
import delivery from "../assets/delivery.png"
function Home() {
  return (
    <div>
    <div
      className="h-screen bg-cover bg-center "
      style={{ backgroundImage: `url(${homeimage})` }} >
        <div className="pl-250 pt-60">
        <p className=" bg-[#D8F3DC] p-2 inline rounded-2xl w-50">🌿 100% Certified Organic</p>
        </div>
        <h1 className=" text-green-900  pt-2 text-4xl pl-205  flex gap-2 font-bold">
            Fresh and <nav className="text-red-500">Organic</nav> Products for you
        </h1>
        <p className="pl-205 mt-2">Fresh from nature, delivered with love. Your trusted source for 100% organic goodness.</p>
      <div className="pl-235 mt-15 flex gap-6">
        <button className=" text-white text-xl font-bold bg-green-700 rounded-2xl p-3 w-40 cursor-pointer hover:bg-green-900">Shop Now</button>
        <button className=" text-white text-xl font-bold bg-orange-600 rounded-2xl p-3 w-40 cursor-pointer hover:bg-orange-800">About Us</button>
      </div>
    </div>
    <div>
      <p className="text-center pt-12 text-l">WHAT WE OFFER</p>
      <div className="flex gap-30 pt-10 pl-50">
      <div className="border-red-600 h-70 w-70 pt-8 pl-10 bg-green-300 border-1 border-red-600">
        <img src={organic} className="w-50 h-40"/>
      </div>
      <div className="border-red-600 h-70 w-70 bg-green-300 border-1 border-red-600">2</div>
      <div className="border-red-600 h-70 w-70 bg-green-300 border-1 border-red-600">2</div>
      </div>
      </div>
    </div>
    
  );
}

export default Home;