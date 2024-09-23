import React from "react";
import "./Offers.css";
import anniversery from "../Images/anniversery";
import best from "../Images/prize.png";
import low from "../Images/low.avif";
import coupen from "../Images/coupen.gif";
import fruit from "../Images/fruit.avif";
import meat from "../Images/meat.avif";
import egg from "../Images/egg.avif";
import oil from "../Images/oil.avif";
import mango from "../Images/mango.webp";
import big from "../Images/bigdeal.avif";
import frozen from "../Images/frozen.avif";
import water from "../Images/water.avif";
import bakery from "../Images/bakery.avif";
import rice from "../Images/rice.avif";
import care from "../Images/care.webp";
import clothes from "../Images/clothes.avif";

const Offers = () => {
  return (
    <div className="top">
      <p>Top Categories</p>
      <div className="offers">
        <div className="off">
          <img className="productss" src={anniversery} alt="img" />
          <div className="caption">
            <span className="caption"> Promotional Deals</span>
          </div>
        </div>
        <div className="off">
          <img className="productss" src={best} alt="img" />
          <div className="caption">
            <p className="caption">Best Sellers</p>
          </div>
        </div>
        <div className="off">
          <img className="productss" src={low} alt="img" />
          <div className="caption">
            <p className="caption">Lowest Price</p>
          </div>
        </div>
        <div className="off">
          <img className="productss" src={coupen} alt="img" />
          <div className="caption">
            <p className="caption">Coupen Code</p>
          </div>
        </div>
        <div className="off">
          <img className="productss" src={fruit} alt="img" />
          <div className="caption">
            <p className="caption">Fruits & Vegetables</p>
          </div>
        </div>
        <div className="off">
          <img className="productss" src={meat} alt="img" />
          <div className="caption">
            <p className="caption">Meat & Poultry</p>
          </div>
        </div>
        <div className="off">
          <img className="productss" src={egg} alt="img" />
          <div className="caption">
            <p className="caption">Dairy & Egs</p>
          </div>
        </div>
        <div className="off">
          <img className="productss" src={oil} alt="img" />
          <div className="caption">
            <p className="caption">Cooking Ingredients</p>
          </div>
        </div>
        <div className="off">
          <img className="productss" src={mango} alt="img" />
          <div className="caption">
            <p className="caption">Mango Festival</p>
          </div>
        </div>
        <div className="off">
          <img className="productss" src={big} alt="img" />
          <div className="caption">
            <p className="caption">Its a Big Deal</p>
          </div>
        </div>
        <div className="off">
          <img className="productss" src={frozen} alt="img" />
          <div className="caption">
            <p className="caption">Frozen Food</p>
          </div>
        </div>
        <div className="off">
          <img className="productss" src={water} alt="img" />
          <div className="caption">
            <p className="caption">Bevereges</p>
          </div>
        </div>
        <div className="off">
          <img className="productss" src={bakery} alt="img" />
          <div className="caption">
            <p className="caption">Bakery</p>
          </div>
        </div>
        <div className="off">
          <img className="productss" src={rice} alt="img" />
          <div className="caption">
            <p className="caption">Rice, Pasta & Pulses</p>
          </div>
        </div>
        <div className="off">
          <img className="productss" src={care} alt="img" />
          <div className="caption">
            <p className="caption">Personal Care & Wellbeing</p>
          </div>
        </div>
        <div className="off">
          <img className="productss" src={clothes} alt="img" />
          <div className="caption">
            <p className="caption">Laundry & Detergents</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offers;
