import { Routes, Route } from "react-router-dom"
// import components 
import Header from "./components/Header";
import Footer from "./components/Footer";
// import pages 
import Home from "./pages/Home";
import Gender from "./pages/Gender";
import Cart from "./pages/Cart";
import Category from "./pages/Category";
import SingleProduct from "./pages/SingleProduct";
import Error from "./pages/Error";

function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="cart" element={<Cart/>}/>
      <Route path=":productId" element={<SingleProduct/>}/>
      <Route path="gender/:unicGender" element={<Gender/>}/>
      <Route path="category/:category" element={<Category/>}/>
      <Route path="*" element={<Error/>}/>
    </Routes>
    <Footer/>
    </>
  )
}

export default App
