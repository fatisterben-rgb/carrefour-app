import React from "react";
import "./Signup.css";
import logo from "../Images/app_logo.png";
import { NavLink } from "react-router-dom";

const Signup = () => {
  return (
    <div className="register-carrefour">
      <div className="logo-image">
        <NavLink to="/">
          <img src={logo} alt="logo" />
        </NavLink>
      </div>
      <div className="registeration">
        <p className="new-acc">Create new account</p>
        <div className="radio-btns">
          <div className="radio1">
            <input type="radio" id="Mr" name="fruit" value="Mr" />
            <label for="Mr">Mr</label>
          </div>
          <div className="radio2">
            <input type="radio" id="Mrs" name="fruit" value="Mrs" />
            <label for="Mrs">Mrs</label>
          </div>
          <div className="radio3">
            <input type="radio" id="Miss/Ms" name="fruit" value="Miss/Ms" />
            <label for="Miss/Ms">Miss/Ms</label>
          </div>
        </div>
        <div className="name">
          <input
            className="fname"
            type="text"
            name="fname"
            placeholder="First Name"
          />
          <input
            className="lname"
            type="text"
            name="lname"
            placeholder="Last Name"
          />
        </div>
        <input
          className="email1"
          type="email"
          name="email"
          placeholder="Email-Address"
        />
        <div className="count-row">
          <div className="flagpk">
            <img src="https://flagsapi.com/PK/flat/64.png" alt="pk" /> +92
          </div>
          <input
            className="pn"
            type="text"
            name="phone-number"
            placeholder="Phone Number"
          />
        </div>
        <input
          className="password"
          type="password"
          name="password"
          placeholder="Password"
        />
        <p className="msgs">
          Create a password with 8 characters, including both upper and lower
          case letters, and at least one number.
        </p>
        <input className="dob" type="date" name="date" placeholder="Date" />
        <input
          className="nation"
          type="text"
          name="nationality"
          placeholder="Nationality (optional)"
        />
        <div className="checkbox1-row">
          <input type="checkbox" />
          <label className="agreement">
            I would like to receive news and offers from Majid Al Futtaim.
          </label>
        </div>
        <div className="checkbox2-row">
          <input type="checkbox" />
          <label className="agreement">
            I agree to the terms and conditions as well as to our Privacy
            Policy.
          </label>
        </div>
        <button className="btn btn-primary reg-btn">Register</button>
        <p className="have-acc">
          Already have an account?
          <NavLink className="lesgo" to="/login">
            Login
          </NavLink>
        </p>
      </div>
    </div>
  );
};

export default Signup;
