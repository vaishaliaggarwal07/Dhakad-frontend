import React from "react";
import "../../Helper/Style.css";
import UniqueBtn from "../../UniqueBtn";
import ModelStyle from "./ModelStyle";

export function MovieAlert(props) {
  return (
    <React.Fragment>
      <div className="movie-alert-modal">
        <ModelStyle
          modalTitle="Once started , you have 9 hours to watch this movie"
          modalBtn={props.modalBtn}
        >
          <div className="movie-alert-box col-md-12">
            <UniqueBtn title="Not Now" icon="" iconsClass="not-play-btn" />
            <UniqueBtn title="Play Now" icon="" iconsClass="play-now-btn" />
          </div>
        </ModelStyle>
      </div>
    </React.Fragment>
  );
}

export default MovieAlert;
