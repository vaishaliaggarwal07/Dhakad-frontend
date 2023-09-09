import React, { useEffect, useState } from "react";
import BottomNavbar from "../../Components/Helper/BottomNavbar";
import CouponCard from "../../Components/CouponCard";
import { connect, useSelector, useDispatch } from "react-redux";
import { listCoupon } from "../../Redux/Actions/coupon";
import LoadingSpinner from "../../Components/LoaderSpinner";
import { getRentedMovie } from "../../Redux/Actions/movies";
import { API_URL } from "../../Utils/helpers/api_url";
import axios from "axios";

const Coupons = (props) => {
  const dispatch = useDispatch();
  const coupLists = useSelector((state) => state?.coupons);
  const rented_movieList = useSelector(
    (state) => state?.movie_list?.rented_mov
  );

  const userId = localStorage.getItem("id");

  const rented_data = rented_movieList?.data?.order?.filter(
    (item) => item?.userId?._id == userId
  );
  const [user, setUser] = useState();

  useEffect(() => {
    dispatch(listCoupon());
    dispatch(getRentedMovie(userId));

    axios.get(`${API_URL}/api/v1/users/${userId}`)
      .then((result) => setUser(result?.data?.data?.user))
      .catch((error) => console.log("error", error));
  }, [dispatch, userId]);
  const usedCoupons = user?.coupons;

  const couponDetails = coupLists?.coupons_list?.reward;
  const movieIds = rented_data?.map((i) => {
    const id = i?.movieId?._id;
    return { id };
  });

  // loading
  const loggedIn = () => {
    if (props.is_loading === true) {
      console.log('Coupons:loggedIn: ');
      return <LoadingSpinner />;
    }
  };
  //
  // usedCoupons
  const unexpired = couponDetails
    ? couponDetails?.filter((f) => !usedCoupons?.some((d) => d == f.couponCode))
    : "";
  const validCoupons = [];
  const unexpireds = unexpired
    ? unexpired?.forEach((f) => {
        f?.movieId?.forEach((d) =>
          movieIds?.forEach((i) => {
            if (i.id == d.id) {
              validCoupons?.push(f);
            }
          })
        );
      })
    : "";

  // console.log(validCoupons);

  const notExpired = validCoupons
    ? validCoupons?.filter(
        (item, index) => validCoupons.indexOf(item) === index
      )
    : "";

  return (
    <React.Fragment>
      <div className="main-content">
        {loggedIn()}
        <BottomNavbar />
        <div className="container-fluid padding-globle">
          <div className="reward-content col-md-12">
            <div className="row">
              {notExpired.length ? (
                notExpired?.map((item, index) => {
                  return (
                    <CouponCard
                      key={index}
                      ccode={
                        new Date(item?.expireDate) > new Date()
                          ? item?.couponCode
                          : "Expired"
                      }
                      heading={item?.title}
                      sabheading="this is to be used at weekend"
                      paragraph={item?.description}
                      rupees={`₹ ${item?.amount}`}
                    />
                  );
                })
              ) : (
                <h2 className="text-center mb-4">
                  You don't have any coupon yet!
                </h2>
              )}
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    is_loading: state?.coupons?.is_loading,
  };
};

export default connect(mapStateToProps, { listCoupon })(Coupons);
