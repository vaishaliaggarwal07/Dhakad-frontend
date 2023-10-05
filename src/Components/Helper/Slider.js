import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "../Helper/Style.css";
import SliderMain from "../SliderMain";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
import RatingThumb1 from "../../Assets/Images/sparkler.gif";
import RatingThumb2 from "../../Assets/Images/rating-thumb-2.gif";
import RatingThumb3 from "../../Assets/Images/bomb.gif";
import RatingThumb4 from "../../Assets/Images/nuclear 2.gif";
import RatingThumb5 from "../../Assets/Images/volcano.gif";
import RatingThumb6 from "../../Assets/Images/anar 2.gif";
import { connect, useDispatch, useSelector } from "react-redux";
import { featuredMovies } from "../../Redux/Actions/movies";
import DhakadRating from "../DhakadRating";
import ShareIcon from "@material-ui/icons/Share";
import AddIcon from "@material-ui/icons/Add";
import DoneIcon from "@material-ui/icons/Done";
import Share from "../Helper/Modal/Share";
import UniqueBtn from "../../Components/UniqueBtn";
import StarIcon from "@material-ui/icons/Star";
import { NavLink } from "react-router-dom";
import LoadingSpinner from "../../Components/LoaderSpinner";
import dateFormat from "dateformat";
import checkAuthenticate from "../../Utils/helpers/IsAuthenticate";
import { useHistory } from "react-router-dom";

SwiperCore.use([Navigation, Pagination, Autoplay]);
const token = localStorage.getItem("token");
const isAuthenticated = token;

const Slider = (props) => {
  const featuredList = useSelector((state) => state.movie_list);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(featuredMovies());
  }, [dispatch]);
  const featuredMovie = featuredList?.featured_lists?.data?.feature
    ? featuredList?.featured_lists?.data?.feature
    : "";

  // loading
  const loggedIn = () => {
    if (props.is_loading === true) {
      // return <LoadingSpinner />;
    }
  };
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
  const history = useHistory();

  const addToWishList = (movieDetails)=>{
    console.log('Slider:addToWishList: ',movieDetails);
  }

  return (
    <React.Fragment>
      {loggedIn()}
      <div
        className="main-swiper-slider home-slider"
        id="masthead-overlay-swiper"
      >
        <Swiper
          autoplay={{
            disableOnInteraction: false, // Optional, but recommended
            delay: 3000,
            pauseOnMouseEnter: true,
          }}
          initialSlide={1}
          navigation={true}
          speed={1000}
          spaceBetween={20}
          slidesPerView={1}
          centeredSlides={true}
          pagination={{
            clickable: true,
            el: `.swiper-pagination`,
          }}
          className="mySwiper"
        >
          {featuredMovie
            ? featuredMovie?.map((item, index) => {
                return (
                  <SwiperSlide key={index}>
                    <SliderMain
                      title="Premiere"
                      SliderBanner={item.banners?.[0]}
                      changeReatingIcon={RatingThumb3}
                      hoverPoster={item.banners?.[0]}
                      videoSrc={item?.trailerUrl?.[0]}
                    >
                      <div className="movie-detail  col-md-12">
                        <h1>{item?.title}</h1>
                        <div className="rent-text"> <DoneIcon className="movie-slider-done-icon"/> Watch movie on a rent starting at just INR {item?.price} (No Ads)  </div>
                        <div className="movie-time">
                          {item?.brandTitle ? item?.brandTitle : ""} <br />
                          {item?.duration} • {item?.categories?.join(",")} •{" "}
                          {item?.ageGroup?.join(",")}
                        </div>
                        <div className="movie-EventAttributes">
                          <ul>
                            <li>{dateFormat(item?.releaseDate, "yyyy")}</li>
                            <li
                              className="border-rounded"
                              style={{
                                width: 62,
                                borderRadius: 50,
                                height: 32,
                                color: " #ffb800",
                                border: "1px solid #ffb800",
                                padding: "3px 0px",
                                fontWeight: 300,
                                textAlign: "center",
                              }}
                            >
                              18+
                            </li>
                            <li>
                              <StarIcon />
                            </li>
                            <li>{item?.averageRating?.toPrecision(2)}</li>
                            <li>
                              <h6>{item?.languages?.join(",")}</h6>
                            </li>
                          </ul>
                        </div>
                        <DhakadRating
                          reatingIcon={getRatingStatus(item?.dhaakadRating)}
                          tooltipText={
                            item?.toolTip
                              ? item?.toolTip
                              : "Lorem Ipsum has been the industry's standard"
                          }
                        />
                        <div className="movie-information-outer mt-3">
                          <div className="movie-icon-button rent-option-button">
                            {isAuthenticated ? (
                              <NavLink to={`/payment-option/${item?.id}`}>
                                <UniqueBtn
                                  title={`Rent Now`}
                                  icon=""
                                />
                              </NavLink>
                            ) : (
                              <UniqueBtn
                                title={`Rent Now`}
                                icon=""
                                onClick={() => checkAuthenticate()}
                              />
                            )}
                          </div>
                          <div className="movie-information">
                            <NavLink to={`/movie-detail/${item?.id}`}>
                              <UniqueBtn title="More Info" icon="" />
                            </NavLink>
                          </div>

                          {isAuthenticated &&
                              <div style={{ marginLeft: "10px" }}>
                                <button className="add-icon-btn" onClick={()=>addToWishList(item)}>
                                  <AddIcon className="add-icon" />
                                </button>
                              </div>
                          }


                          <div
                              className="share_icon"
                              style={{ marginLeft: "10px" }}
                              data-bs-toggle="modal"
                              data-bs-target="#shareModal">
                            <Share
                                link={`/movie-detail/${item?._id}?shareT=true`}
                                modalBtn={
                                  <button className="share-icon-btn"><ShareIcon className="share-icon" /></button>
                                }
                            />
                          </div>
                        </div>
                      </div>
                    </SliderMain>
                  </SwiperSlide>
                );
              })
            : ""}
          <div className="swiper-pagination"></div>
        </Swiper>
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => ({
  is_loading: state?.movie_list?.is_loading,
});

export default connect(mapStateToProps, { featuredMovies })(Slider);
