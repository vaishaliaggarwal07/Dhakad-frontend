import React, { useEffect } from "react";
import UniqueBtn from "../UniqueBtn.jsx";
import "../Helper/Style.css";
import { connect, useDispatch, useSelector } from "react-redux";
import { leguages } from "../../Redux/Actions/languages.js";
import { Link } from "react-router-dom";
const Languages = () => {
  const dispatch = useDispatch();
  const languagesList = useSelector((state) => state.laguages_list);
  useEffect(() => {
    dispatch(leguages());
  }, [dispatch]);
  const leguagesData = languagesList?.laguages?.data?.language
    ? languagesList?.laguages?.data?.language
    : "";

  return (
    <React.Fragment>
      {leguagesData ? (
        <div className="main-movie-languages">
          <div className="container-fluid padding-globle">
            <div className="movie-languages-button section-heading section-heading-band">
              <h3>| Browse movies by Languages</h3>
              <div className="movie-lang-btn">
                {leguagesData
                  ? leguagesData.map((item, index) => {
                      return (
                        <Link key={index} to={`movie/language/${item?.title}`}>
                          <UniqueBtn title={item?.title} icon="" />
                        </Link>
                      );
                    })
                  : ""}
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </React.Fragment>
  );
};
const mapStateToProps = (state) => {
  return {
    is_loading: state.laguages_list.is_loading,
  };
};

export default connect(mapStateToProps, { leguages })(Languages);
