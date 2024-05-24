import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { Link } from "react-router-dom";

const Checkout: React.FC = () => {
  const context = useContext(ShopContext);

  if (!context) {
    // Handle the case where context is undefined
    return <div>Loading...</div>;
  }

  const { getTotalCartAmount, cartItems, productData } = context;

  const cartProducts =
    productData?.filter((product) => cartItems[product.id] > 0) || [];

  return (
    <>
      <h1 className="billDetails">Billing Details</h1>
      <div className="billingPage">
        <div>
          <form action="" className="billingForm">
            <div className="billingFormFlex">
              <div className="names">
                <label htmlFor="" className="labels">
                  First Name
                </label>
                <input type="text" name="" id="" className="inputs nameInput" />
              </div>
              <div className="names">
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
        <div className="checkoutTotalDiv">
          <div className="checkoutTotal">
            <div>
              <h3>Product</h3>
              {cartProducts.map((product) => (
                <div key={product.id}>
                  <p>{product.title}</p>
                  <p>Price: Rs {product.price.toFixed(2)}</p>
                  <p>Quantity: {cartItems[product.id]}</p>
                  <p>
                    Subtotal: Rs{" "}
                    {(product.price * cartItems[product.id]).toFixed(2)}
                  </p>
                </div>
              ))}
            </div>
            <div>
              <h3>Subtotal</h3>
              <p>Rs {getTotalCartAmount().toFixed(2)}</p>
              <h3>Total</h3>
              <p>Rs {getTotalCartAmount().toFixed(2)}</p>
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
              name="paymentMethod"
              id="directBankTransfer"
              value="Direct Bank Transfer"
            />
            <label htmlFor="directBankTransfer">Direct Bank Transfer</label>
            <br />
            <input
              type="radio"
              name="paymentMethod"
              id="cashOnDelivery"
              value="Cash On Delivery"
            />
            <label htmlFor="cashOnDelivery">Cash On Delivery</label>

            <p>
              Your personal data will be used to support your experience
              throughout this website, to manage access to your account, and for
              other purposes described in our privacy policy.
            </p>
            <Link to="/">
              <button className="orderBtn">Place Order</button>
            </Link>
          </form>
        </div>
      </div>
    </>
  );
};

export default Checkout;
