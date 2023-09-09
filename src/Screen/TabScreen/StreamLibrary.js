import React, { useEffect, useRef, useState } from "react";
import BottomNavbar from "../../Components/Helper/BottomNavbar";
import Cards from "../../Components/Helper/Card";
import Crousel from "../../Components/Helper/Crousel";
import { streamingLibrary } from "../../Redux/Actions/movies";
import HoverPlayer from "../../Components/Helper/VideoPlayer/HoverPlayer";
import { useDispatch, connect, useSelector } from "react-redux";
import LoadingSpinner from "../../Components/LoaderSpinner";
import { API_URL } from "../../Utils/helpers/api_url";
import { useHistory } from "react-router-dom";
import axios from "axios";
const StreamLibrary = (props) => {
  const [Streamed, setStreamed] = useState();

  const userId = localStorage.getItem("id");
  const streamMovieDetail = useSelector(
    (state) => state.movie_list?.stream_movie
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(streamingLibrary(userId));
  }, [dispatch, userId]);
  const streamMovies = streamMovieDetail
    ? streamMovieDetail?.data?.order?.filter(
        (item) => item.userId._id === userId
      )
    : "";
  const loggedIn = () => {
    if (props.is_loading === true) {
      console.log('StreamLibrary:loggedIn: ');
      return <LoadingSpinner />;
    }
  };
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

  const getID = (id) => {

    axios.patch(`${API_URL}/api/v1/trasncations/${id}`, {
      streamed: true,
    }).then((result) => {
        const milliseconds = Math.abs(
          new Date(result?.data?.data?.orders?.startedAt) - new Date()
        );
        const hours = milliseconds / 36e5;

        setStreamed(hours);
      })
      .catch((error) => console.log("error", error));
  };
  // redirect to movie page
  const history = useHistory();
  return (
    <React.Fragment>
      <div className="main-content">
        <BottomNavbar />
        <div className="booking-history cards-content-outer">
          <div className="crousel-card-wrapper">
            {loggedIn()}
            <Crousel infinite={streamMovies?.length >= 5 ? true : false}>
              {streamMovies
                ? streamMovies?.map((item, index) => {
                    return (
                      <Cards
                        streaming={Streamed > 24 ? true : ""}
                        MovieCard={item?.movieId?.banners?.[0]}
                        key={index}
                        movieTitle={item?.movieId?.title}
                        movieLanguages={item?.movieId?.languages
                          ?.slice(0, 3)
                          ?.join(",")}
                      >
                        <a
                          data-bs-toggle="modal"
                          data-bs-target="#strModal"
                          onClick={() => {
                            getID(item?._id);
                            if (Streamed > 24) {
                              history.push(`/movie-expired`);
                            }

                            if (Streamed < 9) {
                              setTimeout(() => {
                                history.push(
                                  `/movie/watch/${item?.movieId?.id}`
                                );
                              }, 1000);
                            }
                          }}
                        >
                          <div className="crousel-overly-inner">
                            <div className="crousel-overly-play-outer">
                              <HoverPlayer
                                videoUrl={item?.movieId?.trailerUrl?.[0]}
                                hoverPoster={item?.movieId?.banners?.[0]}
                              />
                            </div>
                            <div className="crousel-overly-content-outer">
                              <div className="crousel-overly-movie-details d-flex justify-content-between">
                                <h4 className="crousel-overly-movie-title">
                                  {item?.movieId?.title}
                                </h4>
                                <span
                                  className="crousel-overly-movie-status "
                                  style={{ letterSpacing: 1.3 }}
                                >
                                  {item?.movieId?.duration}{" "}
                                  {item?.movieId?.categories?.[0]}
                                </span>
                              </div>
                              <div className="crousel-overly-movie-description">
                                <p className="crousel-overly-movie-short-description">
                                  {item?.movieId?.subDescription}
                                </p>
                                <p className="crousel-overly-movie-long-description">
                                  {item?.movieId?.description}
                                </p>
                              </div>
                            </div>
                          </div>
                        </a>
                      </Cards>
                    );
                  })
                : ""}
            </Crousel>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
const mapStateToProps = (state) => {
  return {
    is_loading: state?.movie_list?.is_loading,
  };
};
export default connect(mapStateToProps, { streamingLibrary })(StreamLibrary);
