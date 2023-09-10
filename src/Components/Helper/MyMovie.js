import React, {useEffect, useRef, useState} from "react";
import {useLocation, useParams} from "react-router-dom";
import UniqueBtn from "../../Components/UniqueBtn";
import Crousel from "./Crousel";
import Register from "./Register";
import Cards from "../../Components/Helper/Card";
import MovieDetailSlider from "./MovieDetailSlider";
import RatingProfile from "../../Assets/Images/10.svg.png";
import Rating from "../Rating";
import {FaEdit} from "@react-icons/all-files/fa/FaEdit";
import RatingReview from "../RatingReviews";
import {SwiperSlide} from "swiper/react";
import MovieDetailBanner from "./MovieDetailBanner";
import RatingThumb1 from "../../Assets/Images/sparkler.gif";
import RatingThumb2 from "../../Assets/Images/rating-thumb-2.gif";
import RatingThumb3 from "../../Assets/Images/bomb.gif";
import RatingThumb4 from "../../Assets/Images/nuclear 2.gif";
import RatingThumb5 from "../../Assets/Images/volcano.gif";
import RatingThumb6 from "../../Assets/Images/anar 2.gif";

import {NavLink} from "react-router-dom";
import Rent from "../Helper/Modal/Rent";
import DhakadRating from "../DhakadRating";
import HoverPlayer from "./VideoPlayer/HoverPlayer";
import ShareIcon from "@material-ui/icons/Share";
import Share from "./Modal/Share";
import {connect, useSelector, useDispatch} from "react-redux";
import {
    getMovie, movieLists, moreLikeMovie,
} from "../../Redux/Actions/movies";
import LoadingSpinner from "../LoaderSpinner";
import {getUser} from "../../Redux/Actions/auth";
import {API_URL} from "../../Utils/helpers/api_url";
import {Formik} from "formik";
import {addReview} from "../../Redux/Actions/review";
import checkAuthenticate from "../../Utils/helpers/IsAuthenticate";
import {reviewListByMovies} from "../../Redux/Actions/review";
import dateFormat from "dateformat";
import Trailer from "./Modal/Trailer";
import {Modal} from 'bootstrap';
import axios from "axios";

const MyMovie = (props) => {
    const {search} = useLocation();
    const queryParams = new URLSearchParams(search);
    const isViaShare = queryParams.get('shareT');

    const user_id = localStorage.getItem("id");
    const token = localStorage.getItem("token");
    const isAuthenticated = token;

    const dispatch = useDispatch();
    const {id} = useParams();
    // set star ratting
    const [start, setStars] = useState();
    const [isTrailerPlayed, setIsTrailerPlayed] = useState(false);
    //movie details
    const [movieDetail, setMovieDetail] = useState();
    useEffect(() => {
        axios.get(`${API_URL}/api/v1/movies/${id}`)
            .then((result) => setMovieDetail(result.data));
    }, [id]);

    const movieDetails = movieDetail?.data?.movie ? movieDetail?.data?.movie : "";
    console.log('MyMovie:MyMovie: movieDetails ', movieDetail);
    const castIds = movieDetails?.castIds?.toString()?.replace(/ /g, "");
    const [castDetailIds, setCastDetailIds] = useState();
    useEffect(() => {
        axios.get(`${API_URL}/api/v1/casts/${castIds}`)
            .then((result) => setCastDetailIds(result.data));
    }, [castIds]);
    const castsIds = castDetailIds?.data?.cast ? castDetailIds?.data?.cast : "";
    // like more movie
    const moreMovieData = useSelector((state) => state?.movie_list?.relatedmovie_lists);

    const categoriesType = movieDetails?.categories?.join(",");

    useEffect(() => {
        dispatch(moreLikeMovie(categoriesType));
    }, [categoriesType, dispatch]);

    const moreMovieDetails = moreMovieData?.data?.movies ? moreMovieData?.data?.movies : "";

    //get user
    const userData = useSelector((state) => state?.user?.user);
    useEffect(() => {
        dispatch(getUser());
    }, [dispatch]);

    const userDetails = userData ? userData?.data?.user : "";

    const loggedIn = () => {
        if (props.is_loading === true) {
            console.log('MyMovie:loggedIn: ');
            return <LoadingSpinner/>;
        }
    };
    // Rating status
    const getRatingStatus = (rattingStatus) => {
        switch (rattingStatus) {
            case "Rocket":
                return RatingThumb2;
            case "Sparkle":
                return RatingThumb1;
            case "Bomb":
                return RatingThumb3;
            case "Nuclear":
                return RatingThumb4;
            case "Volcano":
                return RatingThumb5;
            case "anar":
                return RatingThumb6;
            default:
                break;
        }
    };

    // scroll page
    let myRef = useRef();
    // review
    const reviewData = useSelector((state) => state.reviews);
    useEffect(() => {
        dispatch(reviewListByMovies({id}));
    }, [dispatch, id]);

    const reviewLists = reviewData?.review_list?.data?.data?.filter((item) => item?.isApproved === true);
    const chechReview = reviewLists?.filter((item) => item?.user?._id === user_id);

    const trailerModalElement = document.getElementById('trailerModal');
    let modalRef
    let videoJsPlayer;

    const handlePlayerReady = (player) => {
        videoJsPlayer = player;
        setTimeout(() => {
            videoJsPlayer.play()
        }, 500)
    }
    if (isViaShare && movieDetails && movieDetails.trailerUrl?.length > 0 && trailerModalElement && !isTrailerPlayed) {
        modalRef = new Modal(trailerModalElement, {backdrop: false});
        modalRef.show();
    }


    const onHandleTrailerClose = () => {
        modalRef.hide();
        setIsTrailerPlayed(true);
        setTimeout(() => {
            document.body.style.overflow = "auto";
        }, 500)
    }


    const shareSection = <div
        className="share-movie-btn"
        data-bs-toggle="modal"
        data-bs-target="#shareModal">
        <Share
            link={`/movie-detail/${movieDetails ? movieDetails?._id : ""}`}
            modalBtn={<UniqueBtn
                className=""
                title="Share"
                icon={<ShareIcon/>}
            ></UniqueBtn>}
        />
    </div>;


    return (
        <React.Fragment>
            {!movieDetails ? <LoadingSpinner/> : <>
                <div className="slider-outer">
                    <MovieDetailSlider>
                        {movieDetails ? movieDetails?.banners?.map((item, index) => {
                            return (<SwiperSlide key={index}>
                                <MovieDetailBanner BannerSrc={item}></MovieDetailBanner>
                            </SwiperSlide>);
                        }) : ""}
                    </MovieDetailSlider>

                    <div className="slider-overlay" id="sliderpoints-wrapper">
                        <div className="container container-banner" id="top">
                            <div className="row">
                                <div className="col-sm-5 slider-cards">
                                    <div className="movie-card-wrapper">
                                        <div className="movie-card-my-movie">
                                            <HoverPlayer
                                                videoUrl={movieDetails?.trailerUrl?.[0]}
                                                hoverPoster={movieDetails?.banners?.[0]}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-7 sliderpoints-bannercard">
                                    <div className="movie-detail-wrapper">
                                        <div className="movie-detail movie-content-section">
                                            <div className="movie-iconbtn">
                                                <div className="movie-icon-button">
                                                    {isAuthenticated ? (<Rent
                                                        modalBtn={<NavLink
                                                            to={`/payment-option/${movieDetails?.id}`}></NavLink>}/>) : ("")}
                                                </div>
                                                <p>Expiry in one week</p>
                                            </div>
                                            <h1 className="movie-title">{movieDetails?.title}</h1>
                                            <span className="movie-time">
                      {`${movieDetails?.duration} • ${movieDetails?.categories ? movieDetails?.categories?.slice(0, 2)?.join(",") : ""} • ${movieDetails?.ageGroup?.join(",")}`}
                    </span>
                                            <div className="movie-EventAttributes">
                                                <h6 to="/">
                                                    {movieDetails?.languages?.slice(0, 3)?.join(",")}
                                                </h6>
                                            </div>
                                            <DhakadRating
                                                reatingIcon={getRatingStatus(movieDetails?.dhaakadRating)}
                                                tooltipText={movieDetails?.toolTip ? movieDetails?.toolTip : "Lorem Ipsum has been the industry's standard"}
                                            />
                                            <p>{movieDetails?.description}</p>
                                            <div className="movie-icon-button">
                                                {isAuthenticated ? (<div className="flex">
                                                        <Rent
                                                            modalBtn={<NavLink to={`/payment-option/${movieDetails?.id}`}>
                                                                <UniqueBtn
                                                                    title={`RENT ₹ ${movieDetails?.price}`}
                                                                    icon=""/>
                                                            </NavLink>}/>
                                                        {shareSection}
                                                    </div>

                                                ) : (

                                                    <UniqueBtn
                                                        title={`RENT ₹ ${movieDetails?.price}`}
                                                        icon=""
                                                        onClick={() => checkAuthenticate()}
                                                    />

                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid padding-globle" id="movie-band-details">
                    <div className="movie-about section-heading section-heading-band">
                        <h3>| About the movie</h3>
                        <p>{movieDetails?.description}</p>
                        <hr style={{width: "30%", border: "0.2px solid #FFFFFF"}}/>
                    </div>
                    <div className="movie-cast-detail section-heading section-heading-band">
                        <h3>| Cast</h3>
                        <div className="movie-subtitle row">
                            {castsIds ? castsIds?.map((cast, index) => {
                                return (<div className="movie-subcast" key={index}>
                                    <img
                                        src={cast?.photo}
                                        alt="cast"
                                        className="rounded-circle"
                                    />
                                    <h5 className="card-title">{`${cast?.firstName} ${cast?.lastName}`}</h5>
                                </div>);
                            }) : ""}
                        </div>
                    </div>
                </div>
                <Crousel
                    infinite={moreMovieDetails?.length >= 5 ? true : false}
                    crouselHeading="| More Like this">
                    {moreMovieDetails ? moreMovieDetails?.map((item, index) => {
                        return (<Cards
                            key={index}
                            MovieCard={item?.banners[0]}
                            movieTitle={item?.title}
                            movieLanguages={item?.languages?.slice(0, 3)?.join(",")}>
                            <NavLink exact to={`${item?.id}`}>
                                <div
                                    className="crousel-overly-inner"
                                    onClick={() => window.scrollTo({
                                        behavior: "smooth", top: myRef.current.offsetTop,
                                    })}
                                    ref={myRef}>
                                    <div className="crousel-overly-play-outer">
                                        <HoverPlayer
                                            videoUrl={movieDetails?.trailerUrl?.[0]}
                                            hoverPoster={movieDetails?.banners?.[0]}
                                        />
                                    </div>
                                    <div className="crousel-overly-content-outer">
                                        <div
                                            className="crousel-overly-movie-details d-flex justify-content-between">
                                            <h4 className="crousel-overly-movie-title">
                                                {item?.title}
                                            </h4>
                                            <span
                                                className="crousel-overly-movie-status "
                                                style={{letterSpacing: 1.3}}
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
                                </div>
                            </NavLink>
                        </Cards>);
                    }) : ""}
                </Crousel>
                {loggedIn()}
                <div
                    className="container-fluid padding-globle"
                    id="movie-container-header">
                    <div className="movie-review-wrapper">
                        <div className="movie-review-content col-md-8  mx-auto mt-5 ">
                            <div className="col-md-12 review-form-header mb-4">
                                <FaEdit/>
                                <h4>Rate & Reviews</h4>
                            </div>
                            <div className="review-user-detail-form">
                                {chechReview?.length === 0 ? (<>
                                    <div className="col-md-12 review-user-detail">
                                        <div className="review-user-profile">
                                            <img
                                                src={userDetails ? userDetails?.photo : RatingProfile}
                                                alt="user-profile"
                                            />
                                        </div>
                                        <div className="review-user-title">
                                            <h5>{userDetails?.userName}</h5>
                                        </div>
                                    </div>
                                    <Formik
                                        initialValues={{
                                            review: "", rating: "", movieId: "", description: "", user: "",
                                        }}
                                        onSubmit={(values) => {
                                            const payload = {
                                                ...values, rating: start, movieId: id, user: user_id,
                                            };
                                            dispatch(addReview(payload));
                                        }}
                                    >
                                        {({values, handleBlur, handleChange, handleSubmit}) => (
                                            <form onSubmit={handleSubmit}>
                                                <div className="rating-icons">
                                                    <Rating
                                                        name="rating"
                                                        onChange={(value) => {
                                                            setStars(value);
                                                        }}
                                                        onBlur={handleBlur}
                                                        defaultValue={values.rating}
                                                    />
                                                </div>
                                                <div className="rating-comment-box col-md-12">
                                                    <div className="rating-comment-title">
                                                        <label className="rating-lable-text">
                                                            Review Heading
                                                        </label>
                                                        <input
                                                            type="text"
                                                            name="review"
                                                            defaultValue={values.title}
                                                            className="rating-title-area"
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                        />
                                                    </div>
                                                    <div className="rating-comment">
                                                        <label className="rating-lable-text">
                                                            Write your review
                                                        </label>
                                                        <textarea
                                                            name="description"
                                                            type="text"
                                                            className="rating-comment-area"
                                                            rows="5"
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            defaultValue={values.description}
                                                        ></textarea>
                                                        <div className="review-submit-sec">
                                                            <button type="submit">Submit</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>)}
                                    </Formik>
                                    <hr/>
                                </>) : ("")}

                                <div className="user-reviews-sec col-md-12">
                                    {reviewLists ? reviewLists?.map((item, index) => {
                                        return (<RatingReview
                                            key={index}
                                            userProfile={item ? item?.user?.photo : RatingProfile}
                                            userName={item?.user?.userName}
                                            reviewDate={dateFormat(item?.createdAt, "dd/mm/yyyy")}
                                            startRaing={<Rating
                                                startRaing={item?.rating}
                                                editRating={false}
                                            />}
                                            lable={item?.review}
                                            description={item?.description}
                                        />);
                                    }) : ""}
                                </div>
                            </div>
                        </div>
                    </div>
                    <Register/>
                </div>
                {movieDetails && <Trailer trailerLink={movieDetails?.trailerUrl[0] || 'NA'}
                                          onPlayerReady={handlePlayerReady}
                                          onTrailerClose={onHandleTrailerClose}/>}
            </>}
        </React.Fragment>);
};

const mapStateToProps = (state) => {
    return {
        is_loading: state.movie_list.is_loading,
    };
};
export default connect(mapStateToProps, {
    getMovie, movieLists, getUser, addReview,
})(MyMovie);
