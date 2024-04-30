import React from "react";
import "./footer.css";
import footer_logo from "../../../public/imageFolder/footer_logo.svg";
import user_icon from "../../../public/imageFolder/user_icon.svg";

const Footer = () => {
  return (
    <div id="footer" className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          {/* <img src={footer_logo} alt="" /> */}
          <div className="myname">
            <h1>Olawunmi</h1>
          </div>
          <p>
            I am a frontend developer from Nigeria with 2 years of experience
          </p>
        </div>
        <div className="footer-top-right">
          <div className="footer-email-input">
            <img src={user_icon} alt="" />
            <input type="text" placeholder="Enter you email" />
          </div>
          <div className="footer-subscribe">Subscribe</div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">
          &#169; 2024 Beejay Ola. All rights and reserved.
        </p>
        <div className="footer-bottom-right">
          <p>08065592378</p>
          <p>Email address</p>
          <p>github Address</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
