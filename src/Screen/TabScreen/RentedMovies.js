import React, { useEffect, useRef, useState } from "react";
import BottomNavbar from "../../Components/Helper/BottomNavbar";
import HoverPlayer from "../../Components/Helper/VideoPlayer/HoverPlayer";
import StrModal from "../../Components/Helper/Modal/StreamModal";
import Cards from "../../Components/Helper/Card";
import Crousel from "../../Components/Helper/Crousel";
import { useHistory } from "react-router-dom";
import { useDispatch, connect } from "react-redux";
import LoadingSpinner from "../../Components/LoaderSpinner";
import { getRentedMovie, UpDateStrMovie } from "../../Redux/Actions/movies";
const RentedMovies = ({ Is_loading, rented_movieList, streamData }) => {
  const userId = localStorage.getItem("id");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRentedMovie(userId));
  }, [dispatch, userId]);
  const rented_data = rented_movieList?.data?.order?.filter(
    (item) => item.userId._id === userId
  );
  // loading
  const loggedIn = () => {
    if (Is_loading === true) {
      console.log('RentedMovies:loggedIn: ');
      return <LoadingSpinner />;
    }
  };
  const [id, setID] = useState();
  const [mid, setmID] = useState();

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
  const getID = (id, mid) => {
    setID(id);
    setmID(mid);
  };

  const updateStr = (e, id) => {
    e.preventDefault();
    dispatch(UpDateStrMovie(id));
    setTimeout(() => {
      history.push(`/movie/watch/${mid}`);
    }, 3000);
  };

  const [navItemLink, setNavItemLink] = useState(null);
  const history = useHistory();

  if (streamData?.status === "success" && navItemLink != null) {
    setTimeout(() => {
      history.push(navItemLink);
    }, 3000);
  }
  return (
    <React.Fragment>
      <div className="main-content">
        <BottomNavbar />
        <div className="rented-movie-lists">
          <div className="rented-movie-outer">
            {loggedIn()}
            <Crousel infinite={rented_data?.length >= 5 ? true : false}>
              {rented_data
                ? rented_data?.map((item, index) => {
                    const milliseconds = Math.abs(
                      new Date(item?.startedAt) - new Date()
                    );
                    const hours = milliseconds / 36e5;

                    return (
                      <Cards
                        isMovie={
                          item?.movieId?.movieUrl === "undefined" ? 1 : ""
                        }
                        streaming={hours > 24 ? true : ""}
                        MovieCard={item?.movieId?.banners?.[0]}
                        key={index}
                        movieTitle={item?.movieId?.title}
                        movieLanguages={item?.movieId?.languages
                          ?.slice(0, 3)
                          ?.join(",")}
                      >
                        {item?.movieId?.movieUrl !== "undefined" ? (
                          <a
                            data-bs-toggle="modal"
                            data-bs-target="#strModal"
                            onClick={() => {
                              getID(item?._id, item?.movieId?.id);
                              setNavItemLink(
                                `/movie/watch/${item?.movieId?.id}`
                              );
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
                        ) : (
                          <>
                            <a href={() => false}>
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
                          </>
                        )}
                      </Cards>
                    );
                  })
                : ""}
            </Crousel>
          </div>
        </div>
        <StrModal modalId="strModal" onClick={(e) => updateStr(e, id)} />
      </div>
    </React.Fragment>
  );
};
const mapStateToProps = (state) => ({
  Is_loading: state?.movie_list?.is_loading,
  rented_movieList: state?.movie_list?.rented_mov,
  streamData: state?.movie_list?.stream_Data,
});

export default connect(mapStateToProps, { getRentedMovie })(RentedMovies);
