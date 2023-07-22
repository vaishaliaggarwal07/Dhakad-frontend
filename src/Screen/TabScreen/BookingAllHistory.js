import React, { useEffect } from "react";
import { useDispatch, connect } from "react-redux";
import { getRentedMovie, purchaseHistory } from "../../Redux/Actions/movies";
import LoadingSpinner from "../../Components/LoaderSpinner";
import dateFormat from "dateformat";
import demo_img from "../../Assets/Images/demo_img.png";
const BookingAllHistory = ({ Is_loading, purch_list, rented_movieList }) => {
  const id = localStorage.getItem("id");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(purchaseHistory(id));
    dispatch(getRentedMovie(id));
  }, [dispatch, id]);

  const rented_data = rented_movieList?.data?.order?.filter(
    (item) => item.userId._id === id
  );
  // loading
  const loggedIn = () => {
    if (Is_loading === true) {
      console.log('BookingAllHistory:loggedIn: ');
      return <LoadingSpinner />;
    }
  };
  return (
    <React.Fragment>
      <div className="main-content booking-all-history">
        <div className="container">
          <div className="col-12 col-sm-12 col-md-10  mx-auto">
            {loggedIn()}
            {rented_data
              ? rented_data?.map((item) => {
                  return (
                    <div className="card my-4">
                      <div className="row m-0">
                        <div className="card-poster col-12 col-sm-4 col-md-3 col-lg-2 p-0">
                          <img
                            src={
                              item?.movieId?.banners
                                ? item?.movieId?.banners?.[0]
                                : demo_img
                            }
                            alt="demo_img"
                          />
                        </div>
                        <div className="col-12 col-sm-8 col-md-9 col-lg-10 py-2">
                          <div className="d-flex justify-content-between">
                            <h4 className="m-0">{item?.movieId?.title}</h4>
                            <span>
                              Purchase at :{" "}
                              {dateFormat(item?.createdAt, "dd/mm/yyyy")}
                            </span>
                          </div>
                          <h5 className="my-2">
                            Price : ₹ {item?.movieId?.price}
                          </h5>
                          <span>
                            <em>
                              Expire on :{" "}
                              {dateFormat(item?.createdAt, "dd/mm/yyyy")}
                            </em>
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })
              : " "}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => ({
  Is_loading: state?.movie_list?.is_loading,
  purch_list: state?.movie_list?.purchased_list,
  rented_movieList: state?.movie_list?.rented_mov,
});
export default connect(mapStateToProps, { purchaseHistory })(BookingAllHistory);
