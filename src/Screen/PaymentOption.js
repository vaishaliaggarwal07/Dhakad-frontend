import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Card } from "react-bootstrap";
import UniqueBtn from "../Components/UniqueBtn";
import "../Components/Helper/Style.css";
import Rent from "../Components/Helper/Modal/Rent";
import { getMovie } from "../Redux/Actions/movies";
import { connect, useDispatch, useSelector } from "react-redux";
import LoadingSpinner from "../Components/LoaderSpinner";

const PaymentOption = (props) => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const movieList = useSelector((state) => state.movie_list);
  useEffect(() => {
    dispatch(getMovie(id));
  }, [dispatch, id]);
  const movieData = movieList?.movieby_id?.movie;
  // loading
  const loggedIn = () => {
    if (props.is_loading === true) {
      return <LoadingSpinner />;
    }
  };

  return (
    <React.Fragment>
      <div className="main-content about-container">
        {loggedIn()}
        <div className="payment-option">
          <div className="container">
            <Card className="payment-option-card shadow-lg">
              <Card.Body className="col-md-12 payment-option-card-inner">
                <div className="row">
                  <div className="payment-card-banner-sec col-md-2">
                    <div className="payment-card-outer">
                      <Card.Img src={movieData?.banners?.[0]} alt="image" />
                    </div>
                  </div>
                  <div className="payment-card-content-sec col-md-10">
                    <div className="payment-card-content-outer">
                      <div className="row">
                        <Card.Title className="payment-option-title">
                          <h2>{movieData?.title}</h2>
                        </Card.Title>
                        <div className="col-md-8 payment-movie-details">
                          <ul className="navbar-nav">
                            <li className="nav-item">
                              {movieData?.languages.slice(0, 3).join(",")}
                            </li>
                            <li className="nav-item">We 20 March 2020</li>
                            <li className="nav-item">05 00 am</li>
                          </ul>
                          <ul className="navbar-nav">
                            <li className="nav-item">{movieData?.duration}</li>
                            <li className="nav-item">
                              • {movieData?.categories.slice(0, 3).join(",")}
                            </li>
                          </ul>
                        </div>
                        <div className="payment-option-button col-md-4 text-end">
                          <Rent
                            modalBtn={
                              <UniqueBtn
                                title={`Pay ${movieData?.price}`}
                                icon=""
                                // onClick={(event) => createOrder(event)}
                                // disabled={""}
                              />
                            }
                          />
                        </div>
                      </div>
                      <div className="payment-option-description col-md-8">
                        <Card.Text>{movieData?.description}</Card.Text>
                      </div>
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => ({
  is_loading: state?.movie_list?.is_loading,
});

export default connect(mapStateToProps, { getMovie })(PaymentOption);
