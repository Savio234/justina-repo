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
import "./scss/responsiveness/homepage/homepage.scss";
import "./scss/responsiveness/guarantee/guarantee.scss";
import "./scss/responsiveness/footer/footer.scss";
import "./scss/responsiveness/productpage/product.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./scss/responsiveness/checkoutPage/checkout.scss"
import "./scss/navbar/navbar.scss"
import Carts from "./pages/Cart";
import SearchResults from "./components/SearchResults";
//import Search from "./components/Search";
// import Search from "./components/Search";
//import {Provider} from "react-redux"

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Hero />

        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/shop" element={<Homepage />} />
          <Route path="/products/:productId" element={<Products />} />
          <Route path="/products" element={<Products />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/cart" element={<Carts />} />
          <Route
            path="/search/:query"
            element={
              <>
                <SearchResults />
                <Guarantee />
                <Footer />
              </>
            }
          />
        </Routes>
        <Guarantee />
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
