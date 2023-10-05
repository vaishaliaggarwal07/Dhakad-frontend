import { ADD_USER_MOVIE } from "./type";
// import { API_URL } from "../../Utils/base";
import { API_URL } from "../../Utils/helpers/api_url";
import { toast } from "react-toastify";
import axios from "axios";

export const addmovie = (data, id) => async (dispatch) => {
  try {
    const body = {
      name: data?.name,
      email: data?.email,
      language: data?.language,
      productionHouse: data?.productionHouse,
      trailerVideo: data?.trailerVideo,
      movieVideo: data?.movieVideo,
      trailerPass: data?.trailerPass,
      moviePass: data?.moviePass,
      movieDescription: data?.movieDescription,
      status: "Active",
      userId: id,
    };
    console.log(body);
    const res = await axios.post(
      `${API_URL}/api/v1/usermovies/${id}`,
      body
    );
    dispatch({
      type: ADD_USER_MOVIE,
      payload: res.data,
    });
    if (res) {
      toast.success("Movie submitted Successfully", {
        theme: "dark",
      });
    }
  } catch (err) {
    console.log(err, "err");
    // console.log(err, "errerr");
    // const error = err.response ? err.response.data.message : err.message;
    // toast.error(error, {
    //   theme: "dark",
    // });
  }
};
