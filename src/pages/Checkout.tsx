import React from "react";
//import meubel from './src/assets/meubel.png'
import meubel from "/src/assets/meubel.png";
import { SlArrowRight } from "react-icons/sl";
// import heroimage from "/src/assets/heroimage.png";


const Checkout: React.FC = () => {
  return (
    <>
      <div className="herobg">
        <div className="hero">
          <img src={meubel} alt="meubel" />
          <h1>Checkout</h1>
          <div className="heroTexts">
            <a href="home">Home</a>
            <SlArrowRight />
            <a href="shop">Checkout</a>
          </div>
        </div>
      </div>
      <div>
        <h1>Billing Details</h1>
        <form action="" className="billingForm">
          <div className="billingFormFlex">
            <label htmlFor="" className="labels">
              First Name
            </label>
            <input type="text" name="" id="" className="inputs nameInput" />
            <label htmlFor="" className="labels">
              Last Name
            </label>
            <input type="text" name="" id="" className="inputs nameInput" />
          </div>
          <label htmlFor="" className="labels">
            Company Name(Optional)
          </label>
          <input type="text" name="" id="" className="inputs" />
          <label htmlFor="" className="labels">
            Street Address
          </label>
          <input type="text" name="" id="" className="inputs" />
          <label htmlFor="" className="labels">
            Town / City
          </label>
          <input type="text" name="" id="" className="inputs" />
          <label htmlFor="" className="labels">
            Zip Code
          </label>
          <input type="text" name="" id="" className="inputs" />
          <label htmlFor="" className="labels">
            Phone
          </label>
          <input type="tel" name="" id="" className="inputs" />
          <label htmlFor="" className="labels">
            Email address
          </label>
          <input type="email" name="" id="" className="inputs" />
          <input
            className="inputs"
            type="text"
            name=""
            id=""
            placeholder="Additional Information"
          />
        </form>
      </div>
    </>
  );
};

export default Checkout;
