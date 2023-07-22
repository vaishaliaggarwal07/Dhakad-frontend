import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import BottomNavbar from "../../Components/Helper/BottomNavbar";
import { useDispatch, connect } from "react-redux";
import { getRentedMovie, purchaseHistory } from "../../Redux/Actions/movies";
import LoadingSpinner from "../../Components/LoaderSpinner";
import demo_img from "../../Assets/Images/demo_img.png";
import dateFormat from "dateformat";

const PurchaseHistory = ({ Is_loading, purch_list, rented_movieList }) => {
  const id = localStorage.getItem("id");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(purchaseHistory(id));
    dispatch(getRentedMovie(id));
  }, [dispatch, id]);
  const data_list = purch_list?.results;
  const rented_data = rented_movieList?.data?.order?.filter(
    (item) => item.userId._id === id
  ); // loading
  const loggedIn = () => {
    if (Is_loading === true) {
      console.log('PurchaseHistory:loggedIn: ');
      return <LoadingSpinner />;
    }
  };
  return (
    <React.Fragment>
      <div className="main-content">
        <BottomNavbar />
        <div className="container-fluid padding-globle">
          <div className="history-header ">
            <div className="booking-all-history">
              <div className="container">
                <div className="col-12 col-sm-12 col-md-10  mx-auto">
                  {rented_data && rented_data?.length > 0 ? (
                    rented_data.slice(0, 2)?.map((item) => {
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
                                alt="banners"
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
                                  {dateFormat(
                                    item?.movieId?.createdAt,
                                    "dd/mm/yyyy"
                                  )}
                                </em>
                              </span>
                            </div>
                          </div>
                        </div>
                      );
                    })
                  ) : (
                    <p>You don't seem to have any recent bookings.</p>
                  )}
                  {loggedIn()}
                  {data_list && data_list?.length > 1 ? (
                    <Link to="/purchased-all-history">View all bookings</Link>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>
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
export default connect(mapStateToProps, { purchaseHistory })(PurchaseHistory);
