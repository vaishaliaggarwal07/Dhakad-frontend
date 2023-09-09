import { API_URL } from "../../Utils/helpers/api_url";
import { IS_LOADING, LANGUAGES } from "./type";
import axios from "axios";
import { toast } from "react-toastify";

export const leguages = () => async (dispatch) => {
  try {
    dispatch({
      type: IS_LOADING,
    });
    var config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const res = await axios.get(`${API_URL}/api/v1/languages`, config);
    dispatch({
      type: LANGUAGES,
      payload: res?.data,
    });
  } catch (err) {
    const error = err.response ? err.response.data.message : err.message;
    if (error) {
      toast.error(error, {
        theme: "dark",
      });
    }
  }
};
