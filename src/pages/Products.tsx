import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import staricon from "../assets/staricon.png";
import halfstar from "../assets/halfstar.png";
import facebook from "../assets/facebook.png";
import linkedin from "../assets/linkedin.png";
import twitter from "../assets/twitter.png";

const ProductDetail: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();
  const [product, setProduct] = useState<any>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(
          `https://dummyjson.com/products/${productId}`
        );
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchProduct();
  }, [productId]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="sofaDescription">
      <div className="sofaCollections">
        {product.images.map((image: string, id: number) => (
          <img
            key={id}
            src={image}
            alt={`Product ${id}`}
            className="outdoorSofa"
          />
        ))}
      </div>
      <div>
        <img src={product.thumbnail} alt={product.title} id="asgardSofa" />
      </div>
      <div>
        <p className="asgaardHeader">{product.title}</p>
        <p className="sofaPrice">Rs {product.price.toFixed(2)}</p>
        <div className="starIcons">
          {Array.from({ length: Math.floor(product.rating) }, (_, id) => (
            <img key={id} src={staricon} alt="Star" />
          ))}
          {product.rating % 1 !== 0 && (
            <img src={halfstar} alt="Half Star" id="halfstar" />
          )}
          <span className="custReview">{product.rating} Customer Reviews</span>
        </div>
        <p>{product.description}</p>
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
              <span>-</span> <span>1</span> <span>+</span>
            </button>
          </div>
          <div>
            <button className="addToCartBtn">Add to Cart</button>
          </div>
        </div>
        <div>
          <p>
            SKU <span>: {product.id}</span>
          </p>
          <p>
            Category <span>: {product.category}</span>
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
  );
};

export default ProductDetail;
