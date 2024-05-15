import React from "react";
import Navbar from "./components/Navbar";
// import SortItems from "./components/Sort";
import Hero from "./components/Hero";
import Footer from "./shared/Footer/Footer";
import "./scss/main.scss";
import "./scss/color/color.scss";
import "./scss/typography/fonts.scss";
import "./scss/products.scss";
import "./scss/cart/cart.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Products from "./pages/Products";
// import { sampleProducts } from "./data";

// import Guarantee from "./components/Guarant";
// import Carts from "./pages/Cart";
// import CartCheckout from "./pages/Checkout";
import Homepage from "./pages/Homepage";
import Products from "./pages/Products";
import Checkout from "./pages/Checkout";

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Hero />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/products" element={<Products />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
       <Footer/>
        {/* <Hero />
        <SortItems />
        <Outlet />
        <Guarantee />
        
        <Products />
        <Carts />
        <CartCheckout /> */}
      </BrowserRouter>
    </>
  );
};

export default App;
