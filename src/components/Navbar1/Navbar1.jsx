import React from "react";
import "./Navbar1.css";
import { NavLink } from "react-router-dom";

const Navbar1 = () => {
  return (
    <div className="navbar1">
      <div className="nav-logo">
        <NavLink to="/">
          <div className="logo"></div>
        </NavLink>
      </div>
      <div className="nav-search">
        <i className="search-icon fa-solid fa-magnifying-glass"></i>
        <input name="search" type="search" placeholder="Search for products" />
      </div>
      <div className="location">
        <i className="fa-solid fa-location-dot icon"></i>
        <span className="loc-msg">
          Deliver to <strong>Akram Abad Walton - ..</strong>
        </span>
      </div>
      <div className="login">
        <i className="fa-regular fa-circle-user"></i>
        <NavLink className="link-style" to="/login">
          Login & Register
        </NavLink>
      </div>
      <div className="flag">
        <img src="https://flagsapi.com/PK/flat/64.png" alt="flag" />
        <select name="select-country"></select>
      </div>
      <div className="shop">
        <i className="fa-solid fa-cart-shopping"></i>
      </div>
    </div>
  );
};

export default Navbar1;
