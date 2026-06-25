import { Routes, Route } from 'react-router-dom'
import Navbar from "./component/Navbar"
import Homepage from "./pages/Homepage"
import Feature from "./component/Feature"
import Ourproduct from "./component/Ourproduuct"
import Category from "./pages/Category"

function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={
          <>
            <Homepage />
            <Feature />
            <Ourproduct />
          </>
        } />
        <Route path="/category" element={<Category />} />
      </Routes>
    </div>
  )
}

export default App