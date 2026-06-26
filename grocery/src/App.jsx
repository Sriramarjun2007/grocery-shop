import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Homepage from "./pages/Homepage";
import Feature from "./component/Feature";
import Ourproduct from "./component/Ourproduuct";
import Category from "./pages/Category";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Ourcattegory from "./component/Ourcategory";
import Blog from "./component/Blog";

function App() {
  const [search, setSearch] = useState("");

  return (
    <div>
      <Navbar search={search} setSearch={setSearch} />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Homepage />
              <Feature />
              <Ourproduct search={search} />
              <Ourcattegory />
              <Blog/>
            </>
          }
        />

        <Route
          path="/category"
          element={<Category search={search} />}
        />

        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </div>
  );
}

export default App;