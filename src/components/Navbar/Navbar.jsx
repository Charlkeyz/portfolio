import React, { useState } from "react";
import "./Navbar.css";
import logo from "/imageFolder/logo.svg";
import underline from "/imageFolder/nav_underline.svg";

const Navbar = () => {
  const [menu, setMenu] = useState("home");

  const scrollTo = (y, menuName) => {
    window.scrollTo({
      top: y,
      behavior: "smooth",
    });
    setMenu(menuName);
  };

  return (
    <div className="navbar">
      <img src={logo} alt="" />
      <ul className="nav-menu">
        <li>
          <p onClick={() => scrollTo(200, "home")}>Home</p>
          {menu === "home" ? <img src={underline} alt="" /> : <></>}
        </li>
        <li>
          <p onClick={() => scrollTo(950, "about")}>About me</p>
          {menu === "about" ? <img src={underline} alt="" /> : <></>}
        </li>
        <li>
          <p onClick={() => scrollTo(1920, "services")}>Services</p>
          {menu === "services" ? <img src={underline} alt="" /> : <></>}
        </li>
        <li>
          <p onClick={() => scrollTo(3000, "work")}>Portfolio</p>
          {menu === "work" ? <img src={underline} alt="" /> : <></>}
        </li>
        <li>
          <p onClick={() => scrollTo(4400, "contact")}>Contact</p>
          {menu === "contact" ? <img src={underline} alt="" /> : <></>}
        </li>
      </ul>
      <div className="nav-connect" onClick={() => scrollTo(5300, "connect")}>
        Connect with me
      </div>
    </div>
  );
};

export default Navbar;
