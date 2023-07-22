import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { connect, useDispatch, useSelector } from "react-redux";
import HoverPlayer from "../Components/Helper/VideoPlayer/HoverPlayer";
import { moviesByLanguages } from "../Redux/Actions/movies";
import { useParams } from "react-router";
import LoadingSpinner from "../Components/LoaderSpinner";
import MovieNotFound from "./MovieNotFound";
const MovieLanguages = (props) => {
  const { language } = useParams();
  // movie by languages
  const dispatch = useDispatch();
  const movieByLangList = useSelector(
    (state) => state?.movie_list?.moviesby_langes
  );
  useEffect(() => {
    dispatch(moviesByLanguages(language));
  }, [dispatch]);
  const movieData = movieByLangList ? movieByLangList?.data?.movies : "";
  // loading

  const loggedIn = () => {
    if (props.is_loading === true) {
      console.log('Movies:MovieLanguages: loading');
      return <LoadingSpinner />;
    }
  };
  return (
    <React.Fragment>
      {movieData?.length === 0 ? (
        <MovieNotFound />
      ) : (
        <div className="movie-languages-wrapper wrapper-content">
          <div className="movie-languages-content container-fluid padding-globle">
            <div className="crousel-card-type-main-heading section-heading section-heading-band">
              <h3 className="text-capitalize">all {language} movies</h3>
            </div>
            <div className="row m-0 py-2">
              {loggedIn()}

              {movieData
                ? movieData.map((item, index) => {
                    return (
                      <div
                        key={index}
                        className="col-6 col-sm-4  col-md-3 language-movie-card "
                      >
                        <div className="crousel-card-banner">
                          <img
                            className="language-movie-card-img"
                            src={item?.banners?.[0]}
                            alt="movie-card"
                          />
                          <div className="language-movie-overly">
                            <Link to={`/movie-detail/${item?.id}`}>
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
                                    {item?.duration} {item?.categories?.[0]}
                                  </span>
                                </div>
                                <div className="crousel-overly-movie-description">
                                  <p className="crousel-overly-movie-short-description">
                                    {item?.description}
                                  </p>
                                  <p className="crousel-overly-movie-long-description">
                                    {item?.description}
                                  </p>
                                </div>
                              </div>
                            </Link>
                          </div>
                        </div>
                        <div className="crousel-card-banner-content">
                          <h5 className="card-banner-title">{item?.title}</h5>
                          <span className="card-banner-language">
                            {item?.languages.join(",")}
                          </span>
                        </div>
                      </div>
                    );
                  })
                : ""}
            </div>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};
const mapStateToProps = (state) => {
  return {
    is_loading: state?.movie_list?.is_loading,
  };
};

export default connect(mapStateToProps, { moviesByLanguages })(MovieLanguages);
