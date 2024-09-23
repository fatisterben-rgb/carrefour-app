import React from "react";
import { NavLink } from "react-router-dom";
import "./Login.css";
import logo from "../Images/app_logo.png";

const login = () => {
  return (
    <div className="login-carrefour">
      <div className="logo-img">
        <NavLink to="/">
          <img src={logo} alt="logo" />
        </NavLink>
      </div>
      <div className="LOG">
        <p className="txt">Get access to over 190,000 quality products</p>
        <div className="email">
          <input type="email" name="email" placeholder="Enter your email" />
        </div>
        <div className="rgt-btn">
          <button className="btn btn-primary">Log in</button>
        </div>
        <p className="newjoin">New to Carrefour?</p>
        <NavLink to="/login/register" className="signup-carrefour">
          Sign up for a new account
        </NavLink>
      </div>
    </div>
  );
};

export default login;
