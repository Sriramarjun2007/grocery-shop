import homeimage from "../assets/home.jpg";

function Home() {
  return (
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
  );
}

export default Home;