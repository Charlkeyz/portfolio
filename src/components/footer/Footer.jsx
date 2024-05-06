import React from "react";
import "./footer.css";
import user_icon from "/imageFolder/user_icon.svg";

const Footer = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "1a7580f3-2d51-4bb8-b64a-bf5778a3642c");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      alert(" your Email was Successfully sent ", res);
    }
  };
  return (
    <div id="footer" className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          <div className="myname">
            <h1>Olawunmi</h1>
          </div>
          <p>
            I am a frontend developer from Nigeria with 2 years of experience
          </p>
        </div>
        <div className="footer-top-right">
          <form action="  " onSubmit={onSubmit}>
            <div className="footer-email-input">
              <img src={user_icon} alt="" />
              <input type="email" placeholder="Enter your email" name="email" />
            </div>
            <button type="submit" className="contact-submit">
              Subscribe
            </button>
          </form>
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
