import React, { useEffect } from "react";
import Slider from "../../Components/Helper/Slider";
import Crousel from "../../Components/Helper/Crousel";
import Register from "../../Components/Helper/Register";
import Cards from "../../Components/Helper/Card";
import { NavLink } from "react-router-dom";
import HoverPlayer from "../../Components/Helper/VideoPlayer/HoverPlayer";
import { connect, useDispatch, useSelector } from "react-redux";
import {
  topTrandingMovies,
  comingMovies,
  recentMovie,
} from "../../Redux/Actions/movies";

const Home = () => {
  const dispatch = useDispatch();
  // tranding movie
  useEffect(() => {
    dispatch(topTrandingMovies());
  }, [dispatch]);
 
  // comming movie
  const comingMovieList = useSelector((state) => state.movie_list);
  useEffect(() => {
    dispatch(comingMovies());
  }, [dispatch]);

  const comingMoviesData = comingMovieList?.coming_movie?.movies
    ? comingMovieList?.coming_movie?.movies
    : "";
  // recent movie
  const recentMovieList = useSelector((state) => state.movie_list);
  useEffect(() => {
    dispatch(recentMovie());
  }, [dispatch]);
  const recentMovies = recentMovieList?.recent_movie?.movies
    ? recentMovieList?.recent_movie?.movies
    : "";

  return (
    <React.Fragment>
      <Slider />
      <Crousel
        infinite={recentMovies.length >= 5 ? true : false}
        crouselHeading="| Play Now"
      >
        {recentMovies
          ? recentMovies?.map((item, index) => {
              return (
                <Cards
                  key={index}
                  MovieCard={item?.banners?.[0]}
                  movieTitle={item?.title}
                  movieLanguages={item.languages?.slice(0, 3)?.join(",")}
                >
                  <NavLink exact to={`movie-detail/${item.id}`}>
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

      <Crousel
        infinite={comingMoviesData.length >= 5 ? true : false}
        crouselHeading="| Coming Soon"
      >
        {comingMoviesData
          ? comingMoviesData?.map((item, index) => {
              return (
                <Cards
                  key={index}
                  MovieCard={item?.banners?.[0]}
                  movieTitle={item?.title}
                  movieLanguages={item.languages?.slice(0, 3)?.join(",")}
                >
                  <NavLink exact to={`movie-detail/${item.id}`}>
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
      <Register />
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    is_loading: state.movie_list.is_loading,
  };
};

export default connect(mapStateToProps, {
  topTrandingMovies,
  comingMovies,
  recentMovie,
})(Home);
