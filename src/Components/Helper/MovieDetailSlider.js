import React from "react";
import { Swiper } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "../Helper/Style.css";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";

SwiperCore.use([Navigation, Pagination, Autoplay]);

export default function Slider(props) {
  return (
    <React.Fragment>
      <div
        className="main-swiper-slider home-slider"
        id="masthead-container-slider"
      >
        <Swiper
          navigation={true}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 2000,
            pauseOnMouseEnter: true,
          }}
          speed={1000}
          pagination={{
            clickable: true,
            el: `.swiper-pagination`,
          }}
          className="mySwiper"
        >
          {props.children}

          <div className="swiper-pagination"></div>
        </Swiper>
      </div>
    </React.Fragment>
  );
}
