import React, { useEffect, useRef, useState } from "react";
import { PlayCircleFilled } from "@material-ui/icons";
import "./style.css";
import HoverVideoPlayer from "react-hover-video-player";
import Hls from 'hls.js';
import { v4 as uuidv4 } from 'uuid';

const HoverPlayer = ({ videoUrl, hoverPoster }) => {
  const videoRef = useRef(null);
  /*const [trueVal, setTrueVal] = useState(false);

  const attemptPlay = () => {
    videoEl &&
      videoEl.current &&
      videoEl.current.play().catch((error) => {
        console.error("Error attempting to play", error);
      });
  };
  const attemptPause = () => {
    videoRef && videoRef.current && videoRef.current.pause();
  };

  useEffect(() => {
    if (trueVal) {
      attemptPlay();
    }
    if (!trueVal) {
      attemptPause();
    }
  }, [trueVal]);*/

  let videoType = 'video/mp4';
  const movieLink = videoUrl;
  const videoId = `#video--${uuidv4()}`
  /*if(movieLink && movieLink.includes('m3u8')){
    videoType = 'application/x-mpegURL';
  }*/

  useEffect(() => {
    if (movieLink && movieLink.includes('m3u8') && Hls.isSupported() && videoRef?.current) {
      // I need to use unique ID for each as I have many video elements on the page.
      const hls = new Hls();
      // Bind them together
      hls.loadSource(movieLink);
      hls.attachMedia(videoRef?.current);
    }
  }, []);

  return (
    <React.Fragment>
      <div id="hoverPlayer" className="hover-player-outer">
        <div className="hoverplayer">
          <HoverVideoPlayer
            muted={false}
            videoSrc={videoUrl}
            controlsList="nodownload nofullscreen"
            controls
            videoRef={videoRef}
            videoId={videoId}
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
