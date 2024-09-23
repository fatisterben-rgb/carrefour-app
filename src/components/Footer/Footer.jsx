import React from "react";
import "./Footer.css";
import logo from "../Images/app_logo2.png";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer-app">
      <div className="back-to-top">
        <NavLink className="link-styles" to="/">
          BACK TO TOP
        </NavLink>
      </div>
      <div className="footer-content">
        <div className="profile">
          <NavLink to="/">
            <img src={logo} alt="logo" />
          </NavLink>
          <p className="reach-us">Stay in touch with us</p>
          <div className="social">
            <i className=" s-icon1 fa-brands fa-facebook-f"></i>
            <i className=" s-icon2 fa-brands fa-twitter"></i>
            <i className=" s-icon3 fa-brands fa-instagram"></i>
            <i className=" s-icon4 fa-brands fa-youtube"></i>
          </div>
        </div>
        <div className="cus-ser">
          <ul>
            <p>Customer service</p>
            <a href="#">Service and Warranty</a>
            <a href="#">Returns and Exchanges</a>
            <a href="#">secured online payment</a>
            <a href="#">shipping & delivery</a>
            <a href="#">Cash on Delivery</a>
            <a href="#">Cookie Settings</a>
          </ul>
        </div>
        <div className="cus-ser">
          <ul>
            <p>Customer service</p>
            <a href="#">Service and Warranty</a>
            <a href="#">Returns and Exchanges</a>
            <a href="#">secured online payment</a>
            <a href="#">shipping & delivery</a>
            <a href="#">Cash on Delivery</a>
            <a href="#">Cookie Settings</a>
          </ul>
        </div>
        <div className="cus-ser">
          <ul>
            <p>Customer service</p>
            <a href="#">Service and Warranty</a>
            <a href="#">Returns and Exchanges</a>
            <a href="#">secured online payment</a>
            <a href="#">shipping & delivery</a>
            <a href="#">Cash on Delivery</a>
            <a href="#">Cookie Settings</a>
          </ul>
        </div>
      </div>
      <div className="foot-panel">
        <div className="bought">
          <p>Brought to you by</p>
          <NavLink to="/">
            <img src={logo} alt="logo" />
          </NavLink>
        </div>
        <div className="copy">
          <p>©2024 carrefour. All rights are reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
