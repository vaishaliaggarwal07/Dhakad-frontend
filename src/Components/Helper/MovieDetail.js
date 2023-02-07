import React from "react";
import "../Helper/Style.css";
import MyMovie from "./MyMovie";

const MovieDetail = () => {
  return (
    <React.Fragment>
      <div className="main-movie-detail">
        <MyMovie />
      </div>
    </React.Fragment>
  );
};

export default MovieDetail;
