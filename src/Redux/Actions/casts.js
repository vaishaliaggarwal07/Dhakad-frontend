import { CAST_BY_ID } from "../Actions/type";
import { API_URL } from "../../Utils/helpers/api_url";
const token = localStorage.getItem("token");
export const getCast = (id) => async (dispatch) => {
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

    const res = await fetch(
      `${API_URL}/api/v1/casts/624d482b0a0ab7634ae3c9cd,624dcd650a0ab7634ae3d3cc`,
      requestOptions
    ).then((response) => response.json());
    if (res) {
      dispatch({
        type: CAST_BY_ID,
        payload: res.data,
      });
    }
  } catch (err) {
    const error = err.response ? err.response.data.message : err.message;
    if (error) {
      toast.error(error, {
        theme: "dark",
      });
    }
  }
};
