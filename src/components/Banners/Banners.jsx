import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Mousewheel, Autoplay } from "swiper/modules";
import bg1 from "../Images/bg1.jpeg";
import bg2 from "../Images/bg2.jpeg";
import bg3 from "../Images/bg3.jpeg";
import "./Banners.css";
export default function App() {
  return (
    <>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        modules={[Navigation, Pagination, Mousewheel, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="swiper-button-next"></div>
          <div className="swiper-button-prev"></div>
          <img className="background_img" src={bg1} alt="bg" />
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-button-next"></div>
          <div className="swiper-button-prev"></div>
          <img className="background_img" src={bg2} alt="bg" />
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-button-next"></div>
          <div className="swiper-button-prev"></div>
          <img className="background_img" src={bg3} alt="bg" />
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-button-next"></div>
          <div className="swiper-button-prev"></div>
          <img className="background_img" src={bg1} alt="bg" />
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-button-next"></div>
          <div className="swiper-button-prev"></div>
          <img className="background_img" src={bg2} alt="bg" />
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-button-next"></div>
          <div className="swiper-button-prev"></div>
          <img className="background_img" src={bg3} alt="bg" />
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-button-next"></div>
          <div className="swiper-button-prev"></div>
          <img className="background_img" src={bg1} alt="bg" />
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-button-next"></div>
          <div className="swiper-button-prev"></div>
          <img className="background_img" src={bg2} alt="bg" />
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-button-next"></div>
          <div className="swiper-button-prev"></div>
          <img className="background_img" src={bg3} alt="bg" />
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-button-next"></div>
          <div className="swiper-button-prev"></div>
          <img className="background_img" src={bg1} alt="bg" />
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-button-next"></div>
          <div className="swiper-button-prev"></div>
          <img className="background_img" src={bg2} alt="bg" />
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-button-next"></div>
          <div className="swiper-button-prev"></div>
          <img className="background_img" src={bg3} alt="bg" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
