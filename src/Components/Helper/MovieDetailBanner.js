import React from "react";
import UniqueImg from "./Images";

const MovieDetailBanner = (props) => {
  return (
    <React.Fragment>
      <div className="slider-banner-movie-details-banner">
        <div className="slider-image">
          <UniqueImg
            src={props.BannerSrc}
            className="swiper-carousel"
            alt="Images"
          />
        </div>
        <div className="slider-content movie-banner">{props.children}</div>
      </div>
    </React.Fragment>
  );
};

export default MovieDetailBanner;
