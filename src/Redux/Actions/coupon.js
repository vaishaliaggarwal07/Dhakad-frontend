import { COUPONS_LIST, IS_LOADING } from "./type";
import { API_URL } from "../../Utils/helpers/api_url";

//List Coupon

const token = localStorage.getItem("token");
export const listCoupon = () => async (dispatch) => {
  try {
    dispatch({
      type: IS_LOADING,
    });
    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${token}`);
    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    const res = await fetch(`${API_URL}/api/v1/rewards/`, requestOptions).then(
      (response) => response.json()
    );
    if (res) {
      dispatch({
        type: COUPONS_LIST,
        payload: res.data,
      });
    }
  } catch (err) {
    console.log(err);
  }
};
