import React from "react";
import image from "./logo-white.png";
import "./Header.scss";

function Header() {
  return (
    <header className="header">
      <div className="logo-box">
        <img src={image} alt="logo" className="logo" />
      </div>
      <div className="text-box">
        <h1 className="heading-primary">
          <span className="heading-primary-main">Outdoors</span>
          <span className="heading-primary-sub">is where life happens</span>
        </h1>
        <button className="btn btn-white btn-animated">Discover our tours</button>
      </div>
    </header>
  );
}

export default Header;
