import React, {useEffect} from "react";
import {useDispatch, connect} from "react-redux";
import {useParams} from "react-router-dom";
import {getMovie} from "../../../Redux/Actions/movies";
import LoadingSpinner from "../../LoaderSpinner";
import videojs from 'video.js';
import {Player} from "react-tuby";
import "react-tuby/css/main.css";
import VideoJSPlayer from "./VideoJSPlayer";
import {saveMovieCurrentTime, getMovieCurrentTime} from "../../../Redux/Actions/currentUserMovie";

const VideoPlayer = ({movieData, is_loding, current_movie_time, is_loading_current_movie}) => {
    const dispatch = useDispatch();
    const moviId = useParams("id");

    useEffect(() => {
        dispatch(getMovie(moviId?.id));
        dispatch(getMovieCurrentTime(moviId?.id));
    }, [moviId?.id]);


    const moveDetail = movieData?.movie;

    const loggedIn = () => {
        if (is_loding === true || is_loading_current_movie) {
            console.log('VideoPlayer:loggedIn: loading');
            return <LoadingSpinner/>;
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


    /*return (
      <React.Fragment>
        <div id="watch" className="watch-movie watch-main-content">
          <div className="col-md-12 movie-player padding-globle">
            {loggedIn()}
            {/!* <ReactPlayer
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
            /> *!/}
            {/!* <div className="player-react-section"> *!/}
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
            {/!* </div> *!/}
            {/!* {trackLang} *!/}
          </div>
          {/!* <ShakaPlayer src={moveDetail ? moveDetail?.movieUrl[0] : ""} /> *!/}
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
    );*/
    const playerRef = React.useRef(null);

    console.log('VideoPlayer:VideoPlayer: movieDetails',moveDetail);
    console.log('VideoPlayer:VideoPlayer: current_movie_time',current_movie_time);
    if (moveDetail && current_movie_time !== -1) {

        console.log('VideoPlayer:VideoPlayer: current_movie_time ', current_movie_time);

        const videoJsOptions = {
            autoplay: true,
            controls: true,
            responsive: true,
            fluid: true,
            videoTitle:moveDetail?.brandTitle || 'NA',
            playbackRates: [0.5, 1, 1.5, 2],
            sources: [{
                src: moveDetail?.movieUrl[0],
                type: 'video/mp4'
            }]
            // for hls stream
            /*sources: [{
                // src:'https://cdn.flowplayer.com/a30bd6bc-f98b-47bc-abf5-97633d4faea0/hls/de3f6ca7-2db3-4689-8160-0f574a5996ad/playlist.m3u8',
                src:'https://devstreaming-cdn.apple.com/videos/streaming/examples/img_bipbop_adv_example_fmp4/master.m3u8',
                type: 'application/x-mpegURL'
            }]*/
        };

        const handlePlayerReady = (player) => {
            playerRef.current = player;

            player.currentTime(current_movie_time);

            // You can handle player events here, for example:
            player.on('waiting', () => {
                videojs.log('player is waiting');
            });

            player.on('dispose', () => {
                videojs.log('player will dispose');
            });
        };

        const handleTimeUpdate = (currentTime) => {
            // console.log('VideoPlayer:handleTimeUpdate: currentTIme ',currentTime);
            dispatch(saveMovieCurrentTime(currentTime, moviId?.id));
        }

        return (
            <>
                <div id="watch"
                     style={{display: 'flex', flexDirection: 'column', paddingTop: '8%', justifyContent: 'center'}}>
                    <div style={{width: '100%', paddingLeft: '10%', paddingRight: '10%'}}>
                        {loggedIn()}
                        <VideoJSPlayer options={videoJsOptions} onReady={handlePlayerReady}
                                       timeUpdate={handleTimeUpdate}/>
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
            </>
        )
    } else {
        return <LoadingSpinner/>
    }

};

const mapStateToProps = (state) => ({
    movieData: state?.movie_list?.movieby_id,
    is_loding: state?.movie_list?.is_loading,
    current_movie_time: state?.current_user_movie?.current_time,
    is_loading_current_movie: state?.current_user_movie?.is_loading,
});

export default connect(mapStateToProps, {getMovie})(VideoPlayer);
