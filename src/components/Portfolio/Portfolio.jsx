import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import read from "../../img/Screenshot (169).png";
import auto from "../../img/Screenshot (170).png";
import nanite from "../../img/Screenshot (172).png";
import affinity from "../../img/Screenshot (174).png";
import hot from "../../img/Screenshot (175).png";
import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{color: darkMode?'white': ''}}>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <img src={read} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={auto} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={nanite} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={affinity} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={hot} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
