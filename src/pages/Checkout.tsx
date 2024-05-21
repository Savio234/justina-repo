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

      <h1 className="billDetails">Billing Details</h1>
      <div className="billingPage">
        <div>
          <form action="" className="billingForm">
            <div className="billingFormFlex">
              <div>
                <label htmlFor="" className="labels">
                  First Name
                </label>
                <input type="text" name="" id="" className="inputs nameInput" />
              </div>
              <div>
                <label htmlFor="" className="labels">
                  Last Name
                </label>
                <input type="text" name="" id="" className="inputs nameInput" />
              </div>
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
              id="info"
              placeholder="Additional Information"
            />
          </form>
        </div>
        <div>
          <div className="checkoutTotal">
            <div>
              <h3>Product</h3>
              <p>Asgaard x 1</p>
              <p>Subtotal</p>
              <p>Total</p>
            </div>
            <div>
              <h3>Subtotal</h3>
              <p>Rs {}</p>
              <p>Rs {} </p>
              <h3>Rs. {}</h3>
            </div>
          </div>
          <h5>Direct Bank Transfer</h5>
          <p>
            Make your payment directly into our bank account. Please use your
            order ID as the payment reference. Your order will not be shipped
            until the funds have cleared in our account.
          </p>
          <form action="">
            <input
              type="radio"
              name=""
              id=""
              placeholder="Direct Bank Transfer"
            />
            <input type="radio" name="Cash On Delivery" id="" />

            <p>
              Your personal data will be used to support your experience
              throughout this website, to manage access to your account, and for
              other purposes described in our privacy policy.
            </p>
            <button>Place Order</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Checkout;
