import React from "react";
import "./Aboutpage.css";
import profile_img from "/imageFolder/profile_img.svg";
const Aboutpage = () => {
  return (
    <div id="home" className="hero">
      <img src={profile_img} alt="" />
      <h1>
        <span>I'm Alex Bennett</span> , frontend developer based in usa
      </h1>
      <p>
        I, am a frontend developer from california, usa with 10 years of
        expreince in multiple companies like Microssoft, Tesla and Apple
      </p>
      <div className="hero-action">
        <div className="hero-connect">connect with me</div>
        <div className="hero-resume">my resume</div>
      </div>
    </div>
  );
};

export default Aboutpage;
