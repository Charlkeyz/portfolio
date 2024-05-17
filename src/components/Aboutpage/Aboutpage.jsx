import React from "react";
import "./Aboutpage.css";
import profile_img from "/imageFolder/profile.jpg";
import Typewriter from "typewriter-effect";

const Aboutpage = () => {
  return (
    <div id="home" className="hero">
      <img src={profile_img} alt="" style={{ borderRadius: "50%" }} />
      <h1>I'm Emmanuel Chukwuma based in Nigeria</h1>
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
