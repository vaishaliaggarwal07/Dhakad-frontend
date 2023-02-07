import React, { useEffect } from "react";
import { useDispatch, connect } from "react-redux";
import { useParams } from "react-router-dom";
import { getMovie } from "../../../Redux/Actions/movies";
import LoadingSpinner from "../../LoaderSpinner";
import { Player } from "react-tuby";
import "react-tuby/css/main.css";

const VideoPlayer = ({ movieData, is_loding }) => {
  const dispatch = useDispatch();
  const moviId = useParams("id");

  useEffect(() => {
    dispatch(getMovie(moviId?.id));
  }, [moviId?.id]);

  const moveDetail = movieData?.movie;

  const loggedIn = () => {
    if (is_loding === true) {
      return <LoadingSpinner />;
    }
  };

  ////////// subtitile
  // const [trackLang, setTrackLang] = useState();
  // const [playing, setPlaying] = useState(false);

  // const player = useRef();

  // useEffect(() => {
  //   const textTracks = player.current.getInternalPlayer()?.textTracks;

  //   for (var i = 0; textTracks?.length && i < textTracks.length; i++) {
  //     // For the 'subtitles-off' button, the first condition will never match so all will subtitles be turned off
  //     if (textTracks[i].language === trackLang) {
  //       textTracks[i].mode = "showing";
  //     } else {
  //       textTracks[i].mode = "hidden";
  //     }
  //   }
  // }, [trackLang]);

  // const subData = moveDetail?.movieSubtitles
  //   ? moveDetail?.movieSubtitles?.map((item) => {
  //       return {
  //         kind: "subtitles",
  //         src: item?.subtitle,
  //         srcLang: item?.language,
  //         default: true,
  //         mode:
  //           trackLang === item?.language
  //             ? item?.language
  //             : "Off"
  //             ? "showing"
  //             : "hidden",
  //       };
  //     })
  //   : "";
  const mySubtitle_arr = moveDetail?.movieSubtitles
    ? moveDetail?.movieSubtitles?.map((v) => {
        return {
          language: v?.language ? v?.language : "N/A",
          url: v?.subtitle ? v?.subtitle : "N/A",
        };
      })
    : "";

  return (
    <React.Fragment>
      <div id="watch" className="watch-movie watch-main-content">
        <div className="col-md-12 movie-player padding-globle">
          {loggedIn()}
          {/* <ReactPlayer
            style={{ display: "none" }}
            ref={player}
            url={moveDetail ? moveDetail?.movieUrl[0] : ""}
            controls={true}
            width={"100%"}
            height={"100vh"}
            playing={playing}
            config={{
              file: {
                attributes: {
                  crossOrigin: "true",
                  controlsList: "nodownload",
                },
                tracks: subData,
              },
            }}
          /> */}
          {/* <div className="player-react-section"> */}
          <Player
            src={[
              {
                quality: 1080,
                url: `${moveDetail ? moveDetail?.movieUrl[0] : "N/A"}`,
              },
              {
                quality: 720,
                url: `${moveDetail ? moveDetail?.movieUrl[0] : "N/A"}`,
              },
              {
                quality: 480,
                url: `${moveDetail ? moveDetail?.movieUrl[0] : "N/A"}`,
              },
              {
                quality: 320,
                url: `${moveDetail ? moveDetail?.movieUrl[0] : "N/A"}`,
              },
              {
                quality: "Auto",
                url: `${moveDetail ? moveDetail?.movieUrl[0] : "N/A"}`,
              },
            ]}
            // src={moveDetail ? moveDetail?.movieUrl[0] : "N/A"}
            subtitles={mySubtitle_arr ? mySubtitle_arr : []}
            // dimensions={{ width: "100%", height: "100%" }}
            poster={moveDetail?.banners?.[0] ? moveDetail?.banners?.[0] : "N/A"}
            pictureInPicture={true}
          />
          {/* </div> */}
          {/* {trackLang} */}
        </div>
        {/* <ShakaPlayer src={moveDetail ? moveDetail?.movieUrl[0] : ""} /> */}
        <div className="movie-content-text">
          <div className="padding-globle">
            <div className="movie-title-sec d-flex justify-content-between">
              <h3>{moveDetail?.title ? moveDetail?.title : ""}</h3>
              <div className="cate-lang-sec">
                <span>{moveDetail?.duration ? moveDetail?.duration : ""}</span>
                <span>
                  {moveDetail?.categories
                    ? moveDetail?.categories?.slice(0, 2)?.join(",")
                    : ""}
                </span>
                <span>
                  {moveDetail?.languages
                    ? moveDetail?.languages?.slice(0, 2)?.join(",")
                    : ""}
                </span>
              </div>
            </div>
            <div className="description">
              <p>
                {moveDetail?.subDescription ? moveDetail?.subDescription : ""}
              </p>
              <p>{moveDetail?.description ? moveDetail?.description : ""}</p>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => ({
  movieData: state?.movie_list?.movieby_id,
  is_loding: state?.movie_list?.is_loading,
});

export default connect(mapStateToProps, { getMovie })(VideoPlayer);
