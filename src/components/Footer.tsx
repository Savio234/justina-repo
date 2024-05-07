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
            <p className="footerLinkCol">Links</p>
            <a href="" className="footerLinkCol">
              Home
            </a>
            <a href="" className="footerLinkCol">
              Shop
            </a>
            <a href="" className="footerLinkCol">
              About
            </a>
            <a href="" className="footerLinkCol">
              Contact
            </a>
          </div>
          <div className="footerLinksBlock">
            <p>Help</p>
            <a href="" className="footerLinkCol">
              Payment Options
            </a>
            <a href="" className="footerLinkCol">
              Returns
            </a>
            <a href="" className="footerLinkCol">
              Privacy Policies
            </a>
          </div>
          <div className="footerLinksBlock">
            <p>Newsletter</p>
            <div className="emailLinkFlex">
              <input type="email" name="" placeholder="Enter your email" id="emailLink"  />
              <a href="" id="emailBtn">Subscribe</a>
            </div>
          </div>
        </div>

        <p className="footerParagraph">
          2022 Meubel House. All rights reserved
        </p>
      </>
    );
}



export default Footer;