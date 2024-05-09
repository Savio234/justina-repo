import React from "react";


const Footer: React.FC = () => {
    return (
      <>
        <div className="footerLinks">
          <div className="footerLinksBlock">
            <p>400 University Deluxe Suite, 200 Carol Gabives</p>
            <p>R, 33134 USA</p>
          </div>
          <div className="footerLinksBlock">
            <p>Links</p>
            <a href="">Home</a>
            <a href="">Shop</a>
            <a href="">About</a>
            <a href="">Contact</a>
          </div>
          <div className="footerLinksBlock">
            <p>Help</p>
            <a href="">Payment Options</a>
            <a href="">Returns</a>
            <a href="">Privacy Policies</a>
          </div>
          <div className="footerLinksBlock">
            <p>Newsletter</p>
            <div>
              
              <a href="">Subscribe</a>
            </div>
          </div>
        </div>

        <p className="footerParagraph">2022 Meubel House. All rights reserved</p>
      </>
    );
}



export default Footer;