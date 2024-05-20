/* eslint-disable react/no-unescaped-entities */
// import React from "react";
import "./Aboutpage.css";
import profile_img from "/imageFolder/profilepixel.jpeg";
import Typewriter from "typewriter-effect";

const  Aboutpage = () => {
  return (
    <div id="home" className="hero">
      <img src={profile_img} alt=""  className="profile_img" />
      <h1>I'm Ugochukwu Charles based in Nigeria</h1>
      <div className="about-text">
        I'm a
        <Typewriter
          options={{
            strings: ["Frontend Developer", "web Developer", "Freelancer"],
            autoStart: true,
            loop: true,
          }}
        />
        with 2 years of experience in the Bulb Africa
      </div>

      <div className="hero-action">
        <div className="hero-connect">Connect with me</div>
        <div className="hero-resume">My resume</div>
      </div>
    </div>
  );
};

export default Aboutpage;
