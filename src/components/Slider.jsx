import React from "react";
import "../components/style.css"
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import {  } from "swiper/react";

import {
  adebanke,
  abiola,
  abisola,
  temidayo,
  daniel,
  yobright,
  wunmi,
  dolapo,
} from "../assets/index";

export default function Slider() {
  return (
    <div className="container">
      <h1 className="heading">Team Work</h1>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        className="swiper-container"
      >
        <SwiperSlide className="">
          <img src={abisola} alt="slide image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={adebanke} alt="slide image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={abiola} alt="slide image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={daniel} alt="slide image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={yobright} alt="slide image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={wunmi} alt="slide image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={dolapo} alt="slide image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={temidayo} alt="slide image" />
        </SwiperSlide>

        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
  );
}
