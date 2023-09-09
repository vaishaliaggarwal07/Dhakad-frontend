import { COUPONS_LIST, IS_LOADING } from "./type";
import { API_URL } from "../../Utils/helpers/api_url";
import axios from "axios";
//List Coupon

export const listCoupon = () => async (dispatch) => {
  try {
    dispatch({
      type: IS_LOADING,
    });
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    const res = await axios.get(`${API_URL}/api/v1/rewards/`, requestOptions);
    if (res) {
      dispatch({
        type: COUPONS_LIST,
        payload: res.data.data,
      });
    }
  } catch (err) {
    console.log(err);
  }
};
