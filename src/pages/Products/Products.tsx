import React, { useEffect, useState, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import staricon from "../../assets/staricon.png";
import halfstar from "../../assets/halfstar.png";
import facebook from "../../assets/facebook.png";
import linkedin from "../../assets/linkedin.png";
import twitter from "../../assets/twitter.png";
import { useDispatch } from "react-redux";
import { selectedProduct } from "../../redux/actions/productActions";
import { ShopContext } from "../../context/ShopContext";
import { HiChevronRight } from "react-icons/hi2";

const ProductDetail: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();
  const dispatch = useDispatch();
  const [productData, setProductData] = useState<any>(null);
  const context = useContext(ShopContext);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(
          `https://dummyjson.com/products/${productId}`
        );
        const data = await response.json();
        setProductData(data);
        dispatch(selectedProduct(data));
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchProduct();
  }, [productId, dispatch]);

  if (!productData) {
    return <div>Loading...</div>;
  }

  // const handleAddToCart = () => {
  //   if (context) {
  //     context.addToCart(productData.id);
  //   } else {
  //     console.error("ShopContext is not available");
  //   }
  // };

  const handleIncrement = () => {
    if (context) {
      context.addToCart(productData.id);
    } else {
      console.error("ShopContext is not available");
    }
  };

  const handleDecrement = () => {
    if (context) {
      context.removeFromCart(productData.id);
    } else {
      console.error("ShopContext is not available");
    }
  };

  const cartQuantity = context?.cartItems[productData.id] || 0;

  return (
    <>
      <div className="homeLink">
        <a href="">
          Home{" "}
          <span className="chevronRight">
            <HiChevronRight />
          </span>
        </a>

        <a href="" className="chevronBorder">
          Shop{" "}
          <span className="chevronRight">
            <HiChevronRight />
          </span>
        </a>
        <p>{productData.title}</p>
      </div>
      <div className="sofaDescription">
        <div className="sofaCollections">
          {productData?.images?.map((image: string, id: number) => (
            <img
              key={id}
              src={image}
              alt={`productData ${id}`}
              className="outdoorSofa"
            />
          ))}
        </div>
        <div className="singleImage">
          <img
            src={productData?.thumbnail}
            alt={productData?.title}
            id="asgardSofa"
          />
        </div>
        <div>
          <p className="asgaardHeader">{productData?.title}</p>
          <p className="sofaPrice">Rs {productData?.price.toFixed(2)}</p>
          <div className="starIcons">
            {Array.from(
              { length: Math.floor(productData?.rating) },
              (_, id) => (
                <img key={id} src={staricon} alt="Star" />
              )
            )}
            {productData?.rating % 1 !== 0 && (
              <img src={halfstar} alt="Half Star" id="halfstar" />
            )}
            <span className="custReview">
              {productData?.rating} Customer Reviews
            </span>
          </div>
          <p>{productData?.description}</p>
          <p>Size</p>
          <div className="sizes">
            <button className="sizesBtn">L</button>
            <button className="sizesBtn">XL</button>
            <button className="sizesBtn">XS</button>
          </div>
          <p>Color</p>
          <div className="colorsBtn">
            <button className="colorsBtn1"></button>
            <button className="colorsBtn2"></button>
            <button className="colorsBtn3"></button>
          </div>
          <div className="addCartItems">
            <div className="addItems">
              <button className="addItemsCount">
                <span onClick={handleDecrement}>-</span>
                <span>{cartQuantity}</span>
                <span onClick={handleIncrement}>+</span>
              </button>
              <div>
                <Link to="/cart">
                  <button className="addToCartBtn">Add to Cart</button>
                </Link>
              </div>
            </div>
            {/* <div>
              <button className="addToCartBtn" onClick={handleAddToCart}>
                Add to Cart
              </button>
            </div> */}
          </div>

          <div>
            <p>
              SKU <span>: {productData?.id}</span>
            </p>
            <p>
              Category <span>: {productData?.category}</span>
            </p>
            <p className="socialIcons">
              Share :
              <span>
                <img src={facebook} alt="Facebook" />
              </span>
              <span>
                <img src={linkedin} alt="LinkedIn" />
              </span>
              <span>
                <img src={twitter} alt="Twitter" />
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
