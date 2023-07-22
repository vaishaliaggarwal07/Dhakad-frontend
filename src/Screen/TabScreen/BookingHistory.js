import React, { useEffect, useRef, useState } from "react";
import HoverPlayer from "../../Components/Helper/VideoPlayer/HoverPlayer";
import BottomNavbar from "../../Components/Helper/BottomNavbar";
import Cards from "../../Components/Helper/Card";
import Crousel from "../../Components/Helper/Crousel";
import { NavLink } from "react-router-dom";
import { preBookedMovie } from "../../Redux/Actions/movies";
import { useDispatch, connect, useSelector } from "react-redux";
import LoadingSpinner from "../../Components/LoaderSpinner";
const BookingHistory = (props) => {
  const user_id = localStorage.getItem("id");
  const preBookedMovieDetail = useSelector(
    (state) => state.movie_list?.pre_booked?.results
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(preBookedMovie(user_id));
  }, [user_id, dispatch]);
  // loading
  const loggedIn = () => {
    if (props.is_loading === true) {
      console.log('BookingHistory:loggedIn: ');
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
  return (
    <React.Fragment>
      <div className="main-content">
        {loggedIn()}
        <BottomNavbar />
        <div className="booking-history cards-content-outer">
          <div className="crousel-card-wrapper">
            <Crousel
              infinite={preBookedMovieDetail?.length >= 5 ? true : false}
            >
              {preBookedMovieDetail?.length
                ? preBookedMovieDetail?.map((item, index) => {
                    return (
                      <Cards
                        MovieCard={item?.banners?.[0]}
                        key={index}
                        movieTitle={item?.title}
                        movieLanguages={item.languages?.slice(0, 3)?.join(",")}
                      >
                        <NavLink
                          exact
                          to={`/movie/${item?.title}/${item?.id}/watch`}
                        >
                          <div className="crousel-overly-inner">
                            <div className="crousel-overly-play-outer">
                              <HoverPlayer
                                videoUrl={item?.trailerUrl?.[0]}
                                hoverPoster={item?.banners?.[0]}
                              />
                            </div>
                            <div className="crousel-overly-content-outer">
                              <div className="crousel-overly-movie-details d-flex justify-content-between">
                                <h4 className="crousel-overly-movie-title">
                                  {item?.title}
                                </h4>
                                <span
                                  className="crousel-overly-movie-status "
                                  style={{ letterSpacing: 1.3 }}
                                >
                                  {item.duration} {item.categories?.[0]}
                                </span>
                              </div>
                              <div className="crousel-overly-movie-description">
                                <p className="crousel-overly-movie-short-description">
                                  {item.subDescription}
                                </p>
                                <p className="crousel-overly-movie-long-description">
                                  {item.description}
                                </p>
                              </div>
                            </div>
                          </div>
                        </NavLink>
                      </Cards>
                    );
                  })
                : ""}
            </Crousel>
          </div>
          {preBookedMovieDetail?.length ? (
            ""
          ) : (
            <h2 className="text-center mb-4">
              You haven't pre booked any movie yet!
            </h2>
          )}
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

export default connect(mapStateToProps, { preBookedMovie })(BookingHistory);
