import React from 'react'
import meubel from "/src/assets/meubel.png";
import { SlArrowRight } from "react-icons/sl";
import outdoorsofa from "../assets/outdoorsofa.png";
import deleteicon from "../assets/deleteicon.png";

const Carts: React.FC = () => {
  return (
    <>
      <div className="herobg">
        <div className="hero">
          <img src={meubel} alt="meubel" />
          <h1>Cart</h1>
          <div className="heroTexts">
            <a href="home">Home</a>
            <SlArrowRight />
            <a href="shop">Cart</a>
          </div>
        </div>
      </div>
      <div className="cartFlex">
        <div>
          <div className="cartHeader">
            <p>Product</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Subtotal</p>
          </div>
          <div className="productsDisplay">
            <div className='productFlex'>
              <img src={outdoorsofa} alt="" />
              <p>Asgaard Sofa</p>
            </div>
            <p>Rs 250,000.00</p>
            <p>1</p>
            <p>Rs. 250,000</p>
            <img src={deleteicon} alt="" />
          </div>
        </div>
        <div className='cartTotalsDiv'>
          <h2>Cart Totals</h2>
          <div className="cartTotals">
            <p>Subtotal</p>
            <p>Rs 250, 000.00</p>
          </div>
          <div className="cartTotals">
            <p>Total</p>
            <p>Rs 250,000.00</p>
          </div>
          <button>Check Out</button>
        </div>
      </div>
    </>
  );
}

export default Carts;