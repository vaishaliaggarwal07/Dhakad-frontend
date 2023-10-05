import { REVIEW_LIST_BY_MOVIE, ADD_REVIEW, IS_LOADING } from "./type";
import axios from "axios";
// import { API_URL } from "../../Utils/base";
import { API_URL } from "../../Utils/helpers/api_url";
import { toast } from "react-toastify";
// import checkAuthenticate from "../../Utils/helpers/IsAuthenticate";


export const reviewListByMovies =
  ({ id }) =>
  async (dispatch) => {
    try {
      dispatch({
        type: IS_LOADING,
      });
      var config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const res = await axios.get(
        `${API_URL}/api/v1/reviews?movieId=${id}`,
        config
      );
      dispatch({
        type: REVIEW_LIST_BY_MOVIE,
        payload: res?.data,
      });
    } catch (err) {
      console.log(err);
    }
  };

export const addReview = (data) => async (dispatch) => {
  const token = localStorage.getItem('token')
  if (token === null) {
    // toast.error("No access without login !", {
    //   theme: "dark",
    // });
    window.location.href = "/register";
    return true;
  }
  try {
    var config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const res = await axios.post(`${API_URL}/api/v1/reviews`, data, config);
    dispatch({
      type: ADD_REVIEW,
      payload: res.data,
    });
    if (res) {
      const response = res.data ? res.data.message : res.message;
      toast.success(response, {
        theme: "dark",
      });
    }
  } catch (err) {
    const error = err.response ? err.response.data.message : err.message;
    toast.error(error, {
      theme: "dark",
    });
  }
};
