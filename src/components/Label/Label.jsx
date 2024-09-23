import React from "react";
import "./Label.css";

const Label = () => {
  return (
    <div className="label1">
      <div className="values">
        <i className="fa-solid fa-truck"></i>
        <p className="schedule">Scehduled</p>
        <div className="time">
          <span>
            delivery time <strong>160-180min</strong>
          </span>
        </div>
        <div className="prd">
          <span>
            Products <strong>7K+</strong>
          </span>
        </div>
        <div className="prd">
          <span>
            Mini Order Value <strong>PKR 2000</strong>
          </span>
        </div>
        <div className="i-btn">
          <p>i</p>
        </div>
      </div>
      <div className="next-val">
        <i className="fa-solid fa-motorcycle"></i>
        <p className="exp">Express</p>
        <div className="ntime">
          <span>
            delivery time <strong>160-180min</strong>
          </span>
        </div>
        <div className="nprd">
          <span>
            Min Order <strong>PKR 100</strong>
          </span>
        </div>
        <div className="open">
          <span>
            All Day <strong>8 AM - 8:30 PM</strong>
          </span>
        </div>
        <div className="i2-btn">
          <p>i</p>
        </div>
      </div>
    </div>
  );
};

export default Label;
