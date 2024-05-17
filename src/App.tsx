import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Guarantee from "./components/Guarant";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Products from "./pages/Products";
import Checkout from "./pages/Checkout";
import "./scss/main.scss";
import "./scss/color/color.scss";
import "./scss/typography/fonts.scss";
import "./scss/products.scss";
import "./scss/cart/cart.scss";
import "./scss/checkout/checkout.scss";
import "./scss/responsiveness/homepage.scss"
import "./scss/responsiveness/guarantee.scss"
import "./scss/responsiveness/navbar.scss"
import "./scss/responsiveness/footer.scss"
import "./scss/responsiveness/product.scss"
//import {Provider} from "react-redux"

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Hero />

        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/products/:productId" element={<Products />} />
          <Route path="/products" element={<Products />} />
          <Route path="/checkout" element={<Checkout />} />
          
        </Routes>
        <Guarantee />
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
