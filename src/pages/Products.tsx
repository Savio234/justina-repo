import React, { useEffect, useState } from 'react';
import { HiChevronRight } from "react-icons/hi";
import outdoorsofa from "../assets/outdoorsofa.png";
import outdoorsofa2 from "../assets/outdoorsofa2.png";
import outdoorsofa3 from "../assets/outdoorsofa3.png";
import outdoorsofa4 from "../assets/outdoorsofa4.png";
import asgardsofa from "../assets/asgardsofa.png";
import asgardsofa2 from "../assets/asgardsofa2.png";
import { relatedProducts } from '../mock/data4';
import staricon from "../assets/staricon.png"
import halfstar from "../assets/halfstar.png"
import facebook from "../assets/facebook.png"
import linkedin from "../assets/linkedin.png"
import twitter from "../assets/twitter.png"



const Products: React.FC = () => {
 
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

        <p>Asgaard Sofa</p>
      </div>

      <div className="sofaDescription">
        <div className="sofaCollections">
          <img src={outdoorsofa} alt="" className="outdoorSofa" />
          <img src={outdoorsofa2} alt="" className="outdoorSofa" />
          <img src={outdoorsofa3} alt="" className="outdoorSofa" />
          <img src={outdoorsofa4} alt="" className="outdoorSofa" />
        </div>
        <div>
          <img src={asgardsofa} alt="" id="asgardSofa" />
        </div>
        <div>
          <p className="asgaardHeader">Asgaard sofa</p>
          <p className="sofaPrice">Rs 250,000.00</p>
          <div className="starIcons">
            <img src={staricon} alt="" />
            <img src={staricon} alt="" />
            <img src={staricon} alt="" />
            <img src={staricon} alt="" />
            <img src={halfstar} alt="" id="halfstar" />
            <span className="custReview">5 Customer Reviews</span>
          </div>
          <p>
            Setting the bar as one of the loudest speakers in its class. The
            kilburn is a compact stout-hearted hero with a well-balanced audio
            which boasts a clear midrange and extended highs for a sound{" "}
          </p>
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
              SKU <span>: SS001</span>
            </p>
            <p>
              Category <span>: Sofas</span>
            </p>
            <p>
              Tags <span>: Sofa, Chair, Home, Shop</span>
            </p>
            <p className="socialIcons">
              Share :
              <span>
                <img src={facebook} alt="" />
              </span>
              <span>
                <img src={linkedin} alt="" />
              </span>
              <span>
                <img src={twitter} alt="" />
              </span>
            </p>
            <br />
            <br />
            <hr />
          </div>
        </div>
      </div>
      <div className="description">
        <p className="descriptionHeader">Description</p>
        <p>
          Embodying the raw, wayward spirit of rock `n` roll, the Kilburn
          portable active stereo speaker takes the unmistakable look and sound
          of Marshall, unplugs the chords, and takes the show on the road.
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
          <img src={asgardsofa2} alt="" />
          <img src={asgardsofa2} alt="" />
        </div>
        <div>
          <h2 id='relProductsHeader'>Related Products</h2>
          <div id="relatedProducts">
            {relatedProducts.map((product, index) => (
              <div className="productdiv" key={index}>
                <img src={product.image} alt={product.name} id="product-img" />
                {/* <Link id="productLinks" to={"/products/" + Products}> */}
                <h4>{product.name}</h4>
                <h3>Rs. {product.price}</h3>
                {/* </Link> */}
              </div>
            ))}
          </div>
          <a href="" id='viewMore'>View More</a>
        </div>
      </div>
    </>
  );
}

export default Products;