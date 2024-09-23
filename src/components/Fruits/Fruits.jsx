import React from "react";
import "./Fruits.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Navigation, FreeMode } from "swiper/modules";
import carrot from "../Images/carrot.jpg";
import chillies from "../Images/chillies.jpg";
import cucumber from "../Images/cucumber.jpg";
import brinjal from "../Images/brinjal.jpg";
import tori from "../Images/tori.jpg";
import fatmirch from "../Images/fatmirch.jpg";
import gobi from "../Images/gobi.jpg";
import beens from "../Images/beens.jpg";
import spinach from "../Images/spinach.jpg";
import farmi from "../Images/farmi.jpg";
import tomato from "../Images/tomato.jpg";
const Fruits = () => {
  return (
    <div className="fruits">
      <p className="fresh">Fresh Fruits & Vegetables</p>
      <Swiper
        slidesPerView={7}
        freeMode={true}
        navigation={true}
        modules={[Navigation, FreeMode]}
        className="mySwiper"
      >
        <SwiperSlide className="veges">
          <div className="carrot">
            <img src={carrot} alt="img" />
          </div>
          <div className="shopp">
            <div className="now">
              <p>Now</p>
              <i className="fa-solid fa-motorcycle"></i>
            </div>
            <div className="plus">
              <i className="fa-solid fa-plus"></i>
            </div>
          </div>
          <div className="qeemat">
            <p>190</p>
            <span>
              <strong>.00</strong>PKR
            </span>
          </div>
          <div className="name">
            <p>Carrot Premium PrePack Bag 1kg</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="veges">
          <div className="carrot">
            <img src={chillies} alt="img" />
          </div>
          <div className="shopp">
            <div className="now">
              <p>Now</p>
              <i className="fa-solid fa-motorcycle"></i>
            </div>
            <div className="plus">
              <i className="fa-solid fa-plus"></i>
            </div>
          </div>
          <div className="qeemat">
            <p>190</p>
            <span>
              <strong>.00</strong>PKR
            </span>
          </div>
          <div className="name">
            <p>Carrot Premium PrePack Bag 1kg</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="veges">
          <div className="carrot">
            <img src={cucumber} alt="img" />
          </div>
          <div className="shopp">
            <div className="now">
              <p>Now</p>
              <i className="fa-solid fa-motorcycle"></i>
            </div>
            <div className="plus">
              <i className="fa-solid fa-plus"></i>
            </div>
          </div>
          <div className="qeemat">
            <p>190</p>
            <span>
              <strong>.00</strong>PKR
            </span>
          </div>
          <div className="name">
            <p>Carrot Premium PrePack Bag 1kg</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="veges">
          <div className="carrot">
            <img src={brinjal} alt="img" />
          </div>
          <div className="shopp">
            <div className="now">
              <p>Now</p>
              <i className="fa-solid fa-motorcycle"></i>
            </div>
            <div className="plus">
              <i className="fa-solid fa-plus"></i>
            </div>
          </div>
          <div className="qeemat">
            <p>190</p>
            <span>
              <strong>.00</strong>PKR
            </span>
          </div>
          <div className="name">
            <p>Carrot Premium PrePack Bag 1kg</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="veges">
          <div className="carrot">
            <img src={tori} alt="img" />
          </div>
          <div className="shopp">
            <div className="now">
              <p>Now</p>
              <i className="fa-solid fa-motorcycle"></i>
            </div>
            <div className="plus">
              <i className="fa-solid fa-plus"></i>
            </div>
          </div>
          <div className="qeemat">
            <p>190</p>
            <span>
              <strong>.00</strong>PKR
            </span>
          </div>
          <div className="name">
            <p>Carrot Premium PrePack Bag 1kg</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="veges">
          <div className="carrot">
            <img src={fatmirch} alt="img" />
          </div>
          <div className="shopp">
            <div className="now">
              <p>Now</p>
              <i className="fa-solid fa-motorcycle"></i>
            </div>
            <div className="plus">
              <i className="fa-solid fa-plus"></i>
            </div>
          </div>
          <div className="qeemat">
            <p>190</p>
            <span>
              <strong>.00</strong>PKR
            </span>
          </div>
          <div className="name">
            <p>Carrot Premium PrePack Bag 1kg</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="veges">
          <div className="carrot">
            <img src={gobi} alt="img" />
          </div>
          <div className="shopp">
            <div className="now">
              <p>Now</p>
              <i className="fa-solid fa-motorcycle"></i>
            </div>
            <div className="plus">
              <i className="fa-solid fa-plus"></i>
            </div>
          </div>
          <div className="qeemat">
            <p>190</p>
            <span>
              <strong>.00</strong>PKR
            </span>
          </div>
          <div className="name">
            <p>Carrot Premium PrePack Bag 1kg</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="veges">
          <div className="carrot">
            <img src={beens} alt="img" />
          </div>
          <div className="shopp">
            <div className="now">
              <p>Now</p>
              <i className="fa-solid fa-motorcycle"></i>
            </div>
            <div className="plus">
              <i className="fa-solid fa-plus"></i>
            </div>
          </div>
          <div className="qeemat">
            <p>190</p>
            <span>
              <strong>.00</strong>PKR
            </span>
          </div>
          <div className="name">
            <p>Carrot Premium PrePack Bag 1kg</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="veges">
          <div className="carrot">
            <img src={spinach} alt="img" />
          </div>
          <div className="shopp">
            <div className="now">
              <p>Now</p>
              <i className="fa-solid fa-motorcycle"></i>
            </div>
            <div className="plus">
              <i className="fa-solid fa-plus"></i>
            </div>
          </div>
          <div className="qeemat">
            <p>190</p>
            <span>
              <strong>.00</strong>PKR
            </span>
          </div>
          <div className="name">
            <p>Carrot Premium PrePack Bag 1kg</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="veges">
          <div className="carrot">
            <img src={farmi} alt="img" />
          </div>
          <div className="shopp">
            <div className="now">
              <p>Now</p>
              <i className="fa-solid fa-motorcycle"></i>
            </div>
            <div className="plus">
              <i className="fa-solid fa-plus"></i>
            </div>
          </div>
          <div className="qeemat">
            <p>190</p>
            <span>
              <strong>.00</strong>PKR
            </span>
          </div>
          <div className="name">
            <p>Carrot Premium PrePack Bag 1kg</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="veges">
          <div className="carrot">
            <img src={tomato} alt="img" />
          </div>
          <div className="shopp">
            <div className="now">
              <p>Now</p>
              <i className="fa-solid fa-motorcycle"></i>
            </div>
            <div className="plus">
              <i className="fa-solid fa-plus"></i>
            </div>
          </div>
          <div className="qeemat">
            <p>190</p>
            <span>
              <strong>.00</strong>PKR
            </span>
          </div>
          <div className="name">
            <p>Carrot Premium PrePack Bag 1kg</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="veges">
          <div className="carrot">
            <img src={fatmirch} alt="img" />
          </div>
          <div className="shopp">
            <div className="now">
              <p>Now</p>
              <i className="fa-solid fa-motorcycle"></i>
            </div>
            <div className="plus">
              <i className="fa-solid fa-plus"></i>
            </div>
          </div>
          <div className="qeemat">
            <p>190</p>
            <span>
              <strong>.00</strong>PKR
            </span>
          </div>
          <div className="name">
            <p>Carrot Premium PrePack Bag 1kg</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="veges">
          <div className="carrot">
            <img src={spinach} alt="img" />
          </div>
          <div className="shopp">
            <div className="now">
              <p>Now</p>
              <i className="fa-solid fa-motorcycle"></i>
            </div>
            <div className="plus">
              <i className="fa-solid fa-plus"></i>
            </div>
          </div>
          <div className="qeemat">
            <p>190</p>
            <span>
              <strong>.00</strong>PKR
            </span>
          </div>
          <div className="name">
            <p>Carrot Premium PrePack Bag 1kg</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="veges">
          <div className="carrot">
            <img src={gobi} alt="img" />
          </div>
          <div className="shopp">
            <div className="now">
              <p>Now</p>
              <i className="fa-solid fa-motorcycle"></i>
            </div>
            <div className="plus">
              <i className="fa-solid fa-plus"></i>
            </div>
          </div>
          <div className="qeemat">
            <p>190</p>
            <span>
              <strong>.00</strong>PKR
            </span>
          </div>
          <div className="name">
            <p>Carrot Premium PrePack Bag 1kg</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Fruits;
