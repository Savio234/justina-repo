import React, { useEffect, useState } from "react";
import { HiChevronRight } from "react-icons/hi";
import facebook from "../assets/facebook.png";
import linkedin from "../assets/linkedin.png";
import twitter from "../assets/twitter.png";
import staricon from "../assets/staricon.png";
import halfstar from "../assets/halfstar.png";

const Products: React.FC = () => {
  const [products, setProducts] = useState([]);
  //const [relatedProducts, setRelatedProducts] = useState([])

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          "https://dummyjson.com/products/"
        );
        const data = await response.json();
        setProducts([data]);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  },[] );
console.log(products)
  // useEffect(() => {
  //   const fetchRelatedProducts = async () => {
  //     try {
  //       const response = await fetch(
  //         "https://dummyjson.com/products/category/smartphones"
  //       );
  //       const data = await response.json();
  //       setRelatedProducts([data]);
  //     } catch (error) {
  //       console.error("Error fetching related products:", error);
  //     }
  //   };

  //   fetchRelatedProducts();
  // }, []);


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

        <p>{products.length > 0 ? products[0]?.title : "Loading..."}</p>
      </div>

      {products?.map((product: any, index: number) => (
        <><div className="sofaDescription" key={index}>
          <div className="sofaCollections">
            {product.images.map((image: any, idx: number) => (
              <img
                key={idx}
                src={image}
                alt={`Product ${idx}`}
                className="outdoorSofa" />
            ))}
          </div>
          <div>
            <img src={product.thumbnail} alt={product.title} id="asgardSofa" />
          </div>
          <div>
            <p className="asgaardHeader">{product.title}</p>
            <p className="sofaPrice">Rs {product.price.toFixed(2)}</p>
            <div className="starIcons">
              {Array.from({ length: Math.floor(product.rating) }, (_, idx) => (
                <img key={idx} src={staricon} alt="Star" />
              ))}
              {product.rating % 1 !== 0 && (
                <img src={halfstar} alt="Half Star" id="halfstar" />
              )}
              <span className="custReview">
                {product.rating} Customer Reviews
              </span>
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
                  <span>-</span> <span>1</span>
                  <span>+</span>
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
              {/* <p>
      Tags <span>: Sofa, Chair, Home, Shop</span>
    </p> */}
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
              <br />
              <br />
              <hr />
            </div>
          </div>
        </div><div className="description">
            <p className="descriptionHeader">Description</p>
            <p>{product.description}
            </p>
            <p>
              Weighing in under 7 pounds, the Kilburn is a lightweight piece of
              vintage styled engineering. Setting the bar as one of the loudest
              speakers in its class, the Kilburn is a compact, stout-hearted hero
              with a well-balanced audio which boasts a clear midrange and extended
              highs for a sound that is both articulate and pronounced. The analogue
              knobs allow you to fine tune the controls to your personal preferences
              while the guitar-influenced leather strap enables easy and stylish
              travel.
            </p>
            <div className="asgardsofa2">
              {products.map((product, idx) => (
                <img key={idx} src={product.thumbnail} alt={product.title} />
              ))}
            </div>
            <div>
      <h2 id="relProductsHeader">Related Products</h2>
      {/* <div id="relatedProducts">
        {relatedProducts.map((product, index) => (
          <div className="productdiv" key={index}>
            
            <img src={product.thumbnail} alt={product.title} id="product-img" />
            <h4>{product.title}</h4>
            <h3>Rs. {product.price}</h3>
          </div>
        ))}
      </div> */}
      <a href="" id="viewMore">
        View More
      </a>
    </div>
          </div></>
        
      ))}
   
    </>
  );
};

export default Products;
