import React, {useState, useEffect} from "react";
import {NavLink} from "react-router-dom";
import "../../Helper/Style.css";
import {InputButton} from "../Input";
import ModelStyle from "./ModelStyle";
import {FaSignLanguage} from "@react-icons/all-files/fa/FaSignLanguage";
import {FaGrinBeam} from "@react-icons/all-files/fa/FaGrinBeam";
import {FaGrinStars} from "@react-icons/all-files/fa/FaGrinStars";
import {FaGrinHearts} from "@react-icons/all-files/fa/FaGrinHearts";
import {RiCoupon2Fill} from "@react-icons/all-files/ri/RiCoupon2Fill";
import {getMovie} from "../../../Redux/Actions/movies";
import {connect, useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {CreateOrder, verifyOrder} from "../../../Redux/Actions/order";
import {API_URL} from "../../../Utils/helpers/api_url";
import {listCoupon} from "../../../Redux/Actions/coupon";
import axios from "axios";
import {toast} from "react-toastify";

// import dateFormat from "dateformat";
// import { toast } from "react-toastify";
export function Rent(props) {
    const dispatch = useDispatch();
    const [user, setUser] = useState();
    const [rentModalClose, setRentModalClose] = useState();

    const {id} = useParams();
    const userId = localStorage.getItem("id");
    const movieList = useSelector((state) => state?.movie_list);
    const couponList = useSelector((state) => state?.coupons?.coupons_list);

    useEffect(() => {
        dispatch(getMovie(id));
        dispatch(listCoupon());

        axios.get(`${API_URL}/api/v1/users/${userId}`)
            .then((result) => setUser(result?.data?.data?.user))
            .catch((error) => console.log("error", error));
    }, [dispatch, id]);

    const [callHadler, setCallHadler] = useState(false);
    const movieData = movieList?.movieby_id?.movie;
    const [tip, setTip] = useState(0);
    const [showInput, showTipInput] = useState(false);

    const hadleTip = (value) => {
        setTip(value);
    };
    // add coupon
    const [showCouponInput, setCouponInput] = useState(false);
    const [couponCode, setCouponCode] = useState("");
    const [couponAmt, setcouponAmt] = useState();
    const couponHandle = (event) => {
        event.preventDefault();
        setcouponAmt(
            couponList?.reward?.filter((item) => item.couponCode == couponCode)?.[0]
                ?.amount
        );
    };

    const expireCoupon = () => {
        axios.patch(`${API_URL}/api/v1/users/expireCoupon/${userId}`, {
            coupons: couponCode,
        }).catch((error) => console.error('Rent:expireCoupon: ', error));
    };

    const expireReward = () => {
        axios.patch(`${API_URL}/api/v1/users/expireReward/${userId}`, {
            rewards: [],
        }).catch((error) => console.error('Rent:expireReward : ', error));
    };

    const createOrder = async (data) => {
        setCallHadler(true);
        let detail = data;
        try {

            const result = await axios.post(`${API_URL}/api/v1/trasncations/createOrder`, {
                userId: detail?.userId,
                movieId: detail?.movieId,
                amount: detail?.paymt,
                currency: detail?.currency,
                receipt: detail?.receipt,
                notes: {
                    description: detail?.notes,
                },
            })
            setCallHadler(false);
            console.log('Rent:newCreateOrder: result', result);
            expireCoupon();
            expireReward();
            // setNewOderData(result.data);
            if (result?.data?.results?.phonePay) {
                const phonePayRes = result.data.results.phonePay;
                if (phonePayRes.code === "PAYMENT_INITIATED") {
                    window.location.href = phonePayRes.data.instrumentResponse.redirectInfo.url;
                } else {
                    toast.error('Payment not initiated: ' + phonePayRes.code, {
                        theme: "dark",
                    });
                }
            } else {
                toast.error('No response from phone pay', {
                    theme: "dark",
                });
            }

        } catch (err) {
            toast.error('Create order failed', {
                theme: "dark",
            });
            console.error('Rent:newCreateOrder: ', err);
        }
    };
    const handleSubmitClick = (event, payment) => {
        event.preventDefault();
        const orderDetails = {
            paymt: Math.trunc(payment) * 100,
            movieId: id,
            userId: userId,
            currency: "INR",
            receipt: "2345",
            notes: "this is order captain america movie todayyy",
        };
        // dispatch(CreateOrder(orderDetails));
        createOrder(orderDetails);

    };

    const rewardPoints = user?.rewards;
    const sumuserRewards = rewardPoints?.reduce(
        (partialSum, a) => partialSum + a.amount,
        0
    );

    const onModalClose = (obj) => {
        console.log('Rent:onModalClose: obj ', obj);
        setRentModalClose(obj)
        props.handleClose(obj)
    }
    return (
        <React.Fragment>
            <ModelStyle modalTitle="Rent" modalBtn={props.modalBtn} handleClose={onModalClose}>
                <div className="rent-wrapper">
                    <div className="rent-descripton col-md-12">
                        <p>
                            You can rent this movie for one week but will have 9 hours to
                            watch it once you start playback (available for download)
                            Streaming is expensive.
                        </p>
                    </div>
                    <div className="payment-option-tip">
                        <p>
                            For us to sustain we have a bit restriction on the viewing time.
                            Kindly bear
                        </p>
                        <h4>Please Tip</h4>
                        <p>
                            Your tip helps us to support new talent and independent cinema.
                        </p>
                        <div className="payment-tip-prices mt-3 mb-4">
                            <input
                                type="radio"
                                className="btn-check"
                                name="price-tip"
                                id="price-tip1"
                                autoComplete="off"
                                value={5}
                                onChange={(e) => hadleTip(e.target.value)}
                            />
                            <label className="btn btn-outline-warning" htmlFor="price-tip1">
                                <FaGrinBeam/> ₹5
                            </label>
                            {/* <input
                type="radio"
                className="btn-check"
                name="price-tip"
                id="price-tipremove"
                autoComplete="off"
                value={5}
                onChange={(e) => removeTip(e.target.value)}
              />
              <label
                className="btn btn-outline-warning"
                htmlFor="price-tipremove"
              >
                <FaGrinBeam /> -₹5
              </label> */}
                            <input
                                type="radio"
                                className="btn-check"
                                name="price-tip"
                                id="price-tip2"
                                autoComplete="off"
                                value={20}
                                onChange={(e) => hadleTip(e.target.value)}
                            />
                            <label className="btn btn-outline-warning" htmlFor="price-tip2">
                                <FaGrinStars/> ₹20
                            </label>
                            <input
                                type="radio"
                                className="btn-check"
                                name="price-tip"
                                id="price-tip3"
                                autoComplete="off"
                                value={30}
                                onChange={(e) => hadleTip(e.target.value)}
                            />
                            <label className="btn btn-outline-warning" htmlFor="price-tip3">
                                <FaGrinHearts/> ₹30
                            </label>
                            <input
                                type="radio"
                                className="btn-check"
                                name="price-tip"
                                id="price-tip4"
                                autoComplete="off"
                                onClick={() => showTipInput(!showInput)}
                                onChange={() => setTip("")}
                            />
                            <label className="btn btn-outline-warning" htmlFor="price-tip4">
                                <FaSignLanguage/> Other
                            </label>
                            <input
                                type="radio"
                                className="btn-check"
                                name="price-tip"
                                id="price-tip5"
                                onClick={() => setCouponInput(!showCouponInput)}
                            />
                            <label className="btn btn-outline-warning" htmlFor="price-tip5">
                                <RiCoupon2Fill/> Coupon
                            </label>
                        </div>
                        {showInput ? (
                            <div className="form-group mb-4">
                                <label htmlFor="tip">Tip Amount</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="tip"
                                    onChange={(e) => hadleTip(e.target.value)}
                                    ariaDescribedby="tip"
                                    placeholder="₹"
                                    onKeyPress={(event) => {
                                        if (!/[0-9]/.test(event.key)) {
                                            event.preventDefault();
                                        }
                                    }}
                                />
                            </div>
                        ) : (
                            ""
                        )}
                        {showCouponInput ? (
                            <div className="form-group mb-4">
                                <label htmlFor="coupon">Add Coupon Code</label>
                                <div className="d-flex coupon-code-input">
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="coupon"
                                        onChange={(e) => setCouponCode(e.target.value)}
                                        aria-describedby="coupon"
                                        placeholder="coupon code"
                                        // onKeyPress={(event) => {
                                        //   if (!/[0-9]/.test(event.key)) {
                                        //     event.preventDefault();
                                        //   }
                                        // }}
                                    />
                                    <button
                                        onClick={(event) => couponHandle(event, couponCode)}
                                        className="btn"
                                    >
                                        continue
                                    </button>
                                </div>
                            </div>
                        ) : (
                            ""
                        )}
                    </div>
                    <div className="col-md-12 rent-content-price">
                        <h4 className="rent-price-title float-right">Price</h4>
                        <h4 className="rent-price-price float-left">
                            <span className="rent-price-price-icon">₹</span>
                            {rewardPoints?.length == 0
                                ? Number(movieData?.price ? movieData?.price : 0) +
                                Number(tip ? tip : 0) -
                                Number(couponAmt ? couponAmt : 0)
                                : Number(movieData?.price ? movieData?.price : 0) +
                                Number(tip ? tip : 0) -
                                (Number(couponAmt ? couponAmt : 0) +
                                    Number(sumuserRewards ? sumuserRewards : 0))}{" "}
                            {rewardPoints?.length != 0 && rewardPoints != "undefined" ? (
                                <span style={{textDecoration: "line-through"}}>
                  {Number(movieData?.price ? movieData?.price : 0) +
                      Number(tip ? tip : 0) -
                      Number(couponAmt ? couponAmt : 0)}
                </span>
                            ) : (
                                ""
                            )}
                        </h4>
                    </div>
                    <p className="mt-3">
                        By continuing, you agree to the
                        <NavLink to="/refund-policy" className="modal-form-sign-in-option ">
                            Refund policy
                        </NavLink>
                    </p>
                </div>
                <span data-bs-dismiss="modal" aria-label="Close">
          {callHadler === true ? (
              <InputButton
                  TextTopGroup="d-none"
                  TextBottomGroup="d-none"
                  buttonTitle={
                      <div
                          className="spinner-border"
                          style={{width: "25px", height: "25px"}}
                          role="status"
                      ></div>
                  }
              />
          ) : (
              <InputButton
                  TextTopGroup="d-none"
                  TextBottomGroup="d-none"
                  buttonTitle={`continue ${
                      rewardPoints?.length != 0
                          ? movieData?.price +
                          Number(tip) -
                          (Number(couponAmt ? couponAmt : 0) + sumuserRewards)
                          : movieData?.price +
                          Number(tip) -
                          Number(couponAmt ? couponAmt : 0)
                  }`}
                  submitNavLink={(event) =>
                      handleSubmitClick(event, movieData?.price + Number(tip))
                  }
              />
          )}
        </span>
            </ModelStyle>
        </React.Fragment>
    );
}

const mapStateToProps = (state) => {
    return {
        orderData: state.movie_order.order_data,
    };
};
export default connect(mapStateToProps, {getMovie, CreateOrder, verifyOrder})(
    Rent
);
