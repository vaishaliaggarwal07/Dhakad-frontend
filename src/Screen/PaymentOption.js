import React, {useEffect, useState} from "react";
import {Link, useLocation, useParams} from "react-router-dom";
import {Card} from "react-bootstrap";
import UniqueBtn from "../Components/UniqueBtn";
import "../Components/Helper/Style.css";
import Rent from "../Components/Helper/Modal/Rent";
import {getMovie} from "../Redux/Actions/movies";
import {connect, useDispatch, useSelector} from "react-redux";
import LoadingSpinner from "../Components/LoaderSpinner";
import axios from "axios";
import {API_URL} from "../Utils/helpers/api_url";
import {toast} from "react-toastify";

const PaymentOption = (props) => {
    const dispatch = useDispatch();
    const {search} = useLocation();
    const queryParams = new URLSearchParams(search);
    const transactionId = queryParams.get('transactionId');

    const [isLoading, setIsLoading] = useState(false);
    const [isMovieBooked, setIsMovieBooked] = useState(false);

    const {id} = useParams();
    const movieList = useSelector((state) => state.movie_list);
    const [rentCloseRes, setRentCloseRes] = useState();

    useEffect(() => {
        dispatch(getMovie(id));
    }, [dispatch, id]);


    console.log('PaymentOption:PaymentOption: transactionId ', transactionId);
    useEffect(() => {
        getPaymentStatus(transactionId, id);
        if (!transactionId) {
            checkIfMovieIsBooked(id)
        }
    }, [transactionId, id]);

    const movieData = movieList?.movieby_id?.movie;
    // loading
    const loggedIn = () => {
        if (props.is_loading === true || isLoading) {
            return <LoadingSpinner/>;
        }
    };

    const checkIfMovieIsBooked = async (movieId) => {
        try {
            const result = await axios.get(`${API_URL}/api/v1/trasncations/check/${movieId}`);
            if (result.data.results) {
                toast.success('Movie already booked');
                setIsMovieBooked(true);
            } else {
                // toast.success('Movie not booked');
                setIsMovieBooked(false);
            }
        } catch (apiErr) {
            console.error('PaymentOption:checkIfMovieIsBooked: ', apiErr);
        }
    }

    const getPaymentStatus = async (transactionId, movieId) => {
        if (transactionId) {
            setIsLoading(true);
            try {
                const result = await axios.get(`${API_URL}/api/v1/trasncations/verify/${transactionId}/${movieId}`);
                if(result.data.results.movieTransaction.status==='PAYMENT_SUCCESS'){
                    setIsMovieBooked(true);
                }
                toast.success(result.data.message);
            } catch (err) {
                console.error('PaymentOption:getPaymentStatus: ', err);
                toast.error('Unable to fetch payment')
            }
            setIsLoading(false)
        }
    }


    const onRentClose = (obj) => {
        console.log('PaymentOption:onRentClose: obj ', obj);
        setRentCloseRes(obj);
    }

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
                                            <Card.Img src={movieData?.banners?.[0]} alt="image"/>
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
                                                    {isMovieBooked &&
                                                        <Link to={`/rented-movies`}>
                                                            <UniqueBtn title="Watch" icon=""/>
                                                        </Link>}
                                                    {!isMovieBooked &&
                                                        <Rent
                                                            modalBtn={
                                                                <UniqueBtn
                                                                    title={`Pay ${movieData?.price}`}
                                                                    icon=""
                                                                    // onClick={(event) => createOrder(event)}
                                                                    // disabled={""}
                                                                />
                                                            }
                                                            handleClose={onRentClose}
                                                        />
                                                    }

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

export default connect(mapStateToProps, {getMovie})(PaymentOption);
