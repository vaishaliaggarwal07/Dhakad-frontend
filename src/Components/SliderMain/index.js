import React from "react";
import HoverPlayer from "../Helper/VideoPlayer/HoverPlayer";

const SliderMain = (props) => {
  return (
    <React.Fragment>
      <div className="slider-banner">
        <img
          src={props.SliderBanner}
          className="swiper-carousel-main-banner"
          alt="..."
        />
        <div className="slider-content movie-banner">
          <div className="container-carousel">
            <div className="slider-content-outer">

              <div className="row">

                <div className="col-sm-5">
                  <div
                    className="movie-detail-wrapper movie-detail-content"
                    id="customizeswiper">
                    {props.children}
                  </div>
                </div>

                <div className="col-sm-7 slider-cards">
                  <div className="movie-card-wrapper">
                    <div className="movie-card">
                      <HoverPlayer
                          videoUrl={props.videoSrc}
                          hoverPoster={props.hoverPoster}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default SliderMain;
