import React from "react";
import "./MyClub.css";

const MyClub = () => {
  return (
    <div className="mini-labels">
      <div className="earn-more">
        <p className="my-club">MyClub</p>
        <span className="join">
          Earn More <strong>Join my club</strong>
        </span>
      </div>
      <div className="earn">
        <i className="fa-solid fa-book-open book-icon"></i>
        <span className="join">
          Latest Store <strong>Leaflet</strong>
        </span>
      </div>
      <div className="earn">
        <i className="fa-solid fa-arrows-rotate book-icon"></i>
        <span className="join">
          In a hurry? <strong>Buy Again</strong>
        </span>
      </div>
    </div>
  );
};

export default MyClub;
