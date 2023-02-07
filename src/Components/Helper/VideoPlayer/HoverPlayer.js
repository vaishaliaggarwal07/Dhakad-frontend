import React, { useEffect, useRef, useState } from "react";
import { PlayCircleFilled } from "@material-ui/icons";
import "./style.css";
import HoverVideoPlayer from "react-hover-video-player";

const HoverPlayer = ({ videoUrl, hoverPoster }) => {
  const videoEl = useRef(null);
  const [trueVal, setTrueVal] = useState(false);

  const attemptPlay = () => {
    videoEl &&
      videoEl.current &&
      videoEl.current.play().catch((error) => {
        console.error("Error attempting to play", error);
      });
  };
  const attemptPause = () => {
    videoEl && videoEl.current && videoEl.current.pause();
  };

  useEffect(() => {
    if (trueVal) {
      attemptPlay();
    }
    if (!trueVal) {
      attemptPause();
    }
  }, [trueVal]);

  return (
    <React.Fragment>
      <div id="hoverPlayer" className="hover-player-outer">
        <div className="hoverplayer">
          <HoverVideoPlayer
            muted={false}
            videoSrc={videoUrl}
            controlsList="nodownload nofullscreen"
            controls
          />
          <div className="poster-outer">
            <div className="hove-poster">
              <img src={hoverPoster} alt="movieposter" />
            </div>
            <div className="play-icon">
              <PlayCircleFilled />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default HoverPlayer;
