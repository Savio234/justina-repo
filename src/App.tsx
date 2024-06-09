import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Guarantee from "./components/Guarant";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";
import Products from "./pages/Products/Products";
import Checkout from "./pages/Checkout/Checkout";
import { ToastContainer } from "react-toastify";
import "./scss/main.scss";
import "./scss/color/color.scss";
import "./scss/typography/fonts.scss";
import "./pages/Products/product-styles/products.scss";
import "./pages/Cart/cart-styles/cart.scss";
import "./pages/Checkout/checkout-styles/checkout.scss";
import "./scss/responsiveness/homepage/homepage.scss";
import "./scss/responsiveness/guarantee/guarantee.scss";
import "./scss/responsiveness/footer/footer.scss";
import "./scss/responsiveness/productpage/product.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./scss/responsiveness/checkoutPage/checkout.scss";
import "./scss/navbar/navbar.scss";
import Carts from "./pages/Cart/Cart";
import "react-toastify/dist/ReactToastify.css";

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
          {/* <Route
            path="/search/:query"
            element={
              <>
                <SearchResults />
                <Guarantee />
                <Footer />
              </>
            }
          /> */}
        </Routes>
        <ToastContainer />
        <Guarantee />
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
