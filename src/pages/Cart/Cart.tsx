import React, { useContext } from "react";

import deleteicon from "../../assets/deleteicon.png";
import { ShopContext } from "../../context/ShopContext";
import { Link } from "react-router-dom";

const Carts: React.FC = () => {
  const context = useContext(ShopContext);

  if (!context) {
    // Handle the case where context is undefined
    return <div>Loading...</div>;
  }

  const { getTotalCartAmount, cartItems, productData } = context;
  console.log(productData);

  const cartProducts =
    productData?.filter((product) => cartItems[product.id] > 0) || [];
  console.log(cartProducts.length);

  return (
    <>
      <div className="cartFlex">
        <div>
          <th className="cartHeader">
            <p className="cartHeaderText">Product</p>
            <p className="cartHeaderText">Price</p>
            <p className="cartHeaderText">Quantity</p>
            <p className="cartHeaderText">Subtotal</p>
          </th>
          {cartProducts.map((product) => (
            <tr className="productsDisplay" key={product.id}>
              <div className="productFlex divPercentage">
                <div className="cartImageDiv">
                  <img
                    src={product.thumbnail}
                    alt={product.title}
                    id="cartImage"
                  />
                </div>
                <div className="">
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
                  onClick={() => context.deleteFromCart(product.id)}
                />
              </div>
            </tr>
          ))}
        </div>
        <div className="cartTotalsDiv">
          <th className="cartTotalsText">Cart Totals</th>
          <tr className="cartTotals">
            <p className="cartPercentage">Subtotal</p>
            <p className="cartPercentage">
              Rs {getTotalCartAmount().toFixed(2)}
            </p>
          </tr>
          <tr className="cartTotals">
            <p className="cartPercentage">Total</p>
            <p className="totalCartAmt cartPercentage">Rs {getTotalCartAmount().toFixed(2)}</p>
          </tr>
          <Link to="/checkout">
            <button className="checkoutBtn">Checkout</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Carts;
