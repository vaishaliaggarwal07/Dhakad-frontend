import React, { useEffect, useState } from "react";
import "../../Screen/SearchBox/index.css";
import { connect, useSelector, useDispatch } from "react-redux";
import { searchMovies } from "../../Redux/Actions/movies";
import { Link } from "react-router-dom";

function SearchBox() {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState();
  const searchMovie = useSelector((state) => state?.movie_list?.search_movies);
  useEffect(() => {
    dispatch(searchMovies(searchTerm));
  }, [dispatch]);

  const moviesList = searchMovie ? searchMovie?.movies : searchMovie?.movies;
  const movieDetailData = moviesList?.map((item) => {
    return {
      movId: item?.id,
      movTitle: item?.title,
    };
  });
  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };
  useEffect(() => {
    const results = movieDetailData?.filter((person) =>
      person?.movTitle?.toLowerCase()?.includes(searchTerm?.toLowerCase())
    );
    setSearchResults(results);
  }, [searchTerm]);
  return (
    <React.Fragment>
      <div className="dropdown search-toggler-box">
        <input
          className="form-control input-open"
          type="text"
          onChange={handleChange}
          value={searchTerm}
          placeholder="Search"
          id="dropdownMenuLink"
          data-bs-toggle="dropdown"
          autoComplete="off"
        />
        {/* dropdown-menu */}
        <div className="result-holder dropdown-menu">
          <div className="result-show">
            {searchResults
              ? searchResults?.map((item, index) => {
                  return (
                    <div className="title" key={index}>
                      <Link
                        className="nav-link"
                        to={`/movie-detail/${item?.movId}`}
                      >
                        <span className="content-title">{item?.movTitle}</span>
                      </Link>
                    </div>
                  );
                })
              : movieDetailData?.map((item, index) => {
                  return (
                    <div className="title" key={index}>
                      <Link
                        className="nav-link"
                        to={`/movie-detail/${item?.movId}`}
                      >
                        <span className="content-title">{item?.movTitle}</span>
                      </Link>
                    </div>
                  );
                })}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default connect(null, { searchMovies })(SearchBox);
