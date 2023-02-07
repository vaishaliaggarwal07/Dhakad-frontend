import React from "react";
import Slider from "react-slick";
// import "swiper/swiper-bundle.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../Helper/Style.css";
import "../Helper/Responsive.css";
export default function Crousel(props) {
  const settings = {
    infinite: props.infinite,
    initialSlide: 1,
    slidesToShow: 5,
    swipeToSlide: true,
    emulateTouch: true,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 320, // tablet breakpoint
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 340, // mobile breakpoint
        settings: {
          slidesToShow: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 360, // mobile breakpoint
        settings: {
          slidesToShow: 2,
          arrows: false,
        },
      },
      {
        breakpoint: 480, // tablet breakpoint
        settings: {
          slidesToShow: 2,
          arrows: false,
        },
      },
      {
        breakpoint: 540, // tablet breakpoint
        settings: {
          slidesToShow: 2,
          arrows: false,
        },
      },
      {
        breakpoint: 768, // tablet breakpoint
        settings: {
          slidesToShow: 3,
          arrows: false,
        },
      },
      {
        breakpoint: 990, // tablet breakpoint
        settings: {
          slidesToShow: 4,
          arrows: false,
        },
      },
      {
        breakpoint: 1024, // tablet breakpoint
        settings: {
          slidesToShow: 3,
          arrows: false,
        },
      },
      {
        breakpoint: 1220, // tablet breakpoint
        settings: {
          slidesToShow: 3,
          arrows: false,
        },
      },
      {
        breakpoint: 1441, // tablet breakpoint
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1920, // tablet breakpoint
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 2040, // tablet breakpoint
        settings: {
          slidesToShow: 6,
        },
      },
      {
        breakpoint: 2280, // tablet breakpoint
        settings: {
          slidesToShow: 6,
        },
      },
      {
        breakpoint: 2420, // tablet breakpoint
        settings: {
          slidesToShow: 6,
        },
      },
      {
        breakpoint: 2640, // tablet breakpoint
        settings: {
          slidesToShow: 6,
        },
      },
      {
        breakpoint: 2880, // tablet breakpoint
        settings: {
          slidesToShow: 7,
        },
      },
      {
        breakpoint: 3020, // tablet breakpoint
        settings: {
          slidesToShow: 7,
        },
      },
    ],
  };

  return (
    <React.Fragment>
      <div className="crousel-wrapper">
        <div className="container-fluid padding-globle">
          <div className="crousel-card-type">
            <div className="crousel-card-type-main-heading section-heading section-heading-band">
              <h3>{props.crouselHeading}</h3>
            </div>
          </div>
          <Slider {...settings}>{props.children}</Slider>
        </div>
      </div>
    </React.Fragment>
  );
}
