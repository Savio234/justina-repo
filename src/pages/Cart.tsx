import React, { useContext } from "react";

import deleteicon from "../assets/deleteicon.png";
import { ShopContext } from "../context/ShopContext";
import { Link } from "react-router-dom";

const Carts: React.FC = () => {
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
      <div className="cartFlex">
        <div>
          <div className="cartHeader">
            <p className="cartHeaderText">Product</p>
            <p className="cartHeaderText">Price</p>
            <p className="cartHeaderText">Quantity</p>
            <p className="cartHeaderText">Subtotal</p>
          </div>
          {cartProducts.map((product) => (
            <div className="productsDisplay" key={product.id}>
              <div className="productFlex">
                <div className="cartImageDiv divPercentage">
                  <img
                    src={product.thumbnail}
                    alt={product.title}
                    id="cartImage"
                  />
                </div>
                <div className="divPercentage">
                  <p>{product.title}</p>
                </div>
              </div>
              <div className="divPercentage">
                <p>Rs {product.price.toFixed(2)}</p>
              </div>
              <div className="divPercentage">
                <p>{cartItems[product.id]}</p>
              </div>
              <div className="divPercentage">
                <p>Rs {(product.price * cartItems[product.id]).toFixed(2)}</p>
              </div>
              <div className="divPercentage">
                <img
                  src={deleteicon}
                  alt="delete icon"
                  onClick={() => context.removeFromCart(product.id)}
                />
              </div>
            </div>
          ))}
        </div>
        <div className="cartTotalsDiv">
          <h2 className="cartTotalsText">Cart Totals</h2>
          <div className="cartTotals">
            <p>Subtotal</p>
            <p>Rs {getTotalCartAmount().toFixed(2)}</p>
          </div>
          <div className="cartTotals">
            <p>Total</p>
            <p className="totalCartAmt">Rs {getTotalCartAmount().toFixed(2)}</p>
          </div>
          <Link to="/checkout">
            <button className="checkoutBtn">Checkout</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Carts;
