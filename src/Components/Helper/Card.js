import React from "react";

const Cards = (props) => {
  return (
    <React.Fragment>
      <div className="crousel-card">
        {props?.isMovie ? (
          props?.isMovie === 1 ? (
            <div className="trailer">Only Trailer Available</div>
          ) : (
            ""
          )
        ) : (
          ""
        )}
        {props?.streaming ? (
          props?.streaming === true ? (
            <div className="trailer">Expired</div>
          ) : (
            ""
          )
        ) : (
          ""
        )}
        <div className="crousel-card-outer-sec">
          <div className="crousel-card-banner">
            <img
              className="crousel-card-image"
              src={props.MovieCard}
              title=""
              alt="card"
            />
            <div className="crousel-overly">{props.children}</div>
          </div>
        </div>
        <div className="crousel-card-banner-content">
          <h5 className="card-banner-title">{props.movieTitle}</h5>
          <span className="card-banner-language">{props.movieLanguages}</span>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Cards;
