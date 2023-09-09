import axios from "axios";
import {API_URL} from "../../Utils/helpers/api_url";
import {CURRENT_USER_MOVIE_TIME} from "./type";

export const saveMovieCurrentTime = (currentTime, movieId) => async (dispatch) => {
    try {
        await axios.post(
            `${API_URL}/api/v1/current-user-movie`,
            {
                currentTime,
                movieId
            }
        );
    } catch (err) {
        console.log(err, "err");
    }
};

export const getMovieCurrentTime = (movieId) => async (dispatch) => {
    try {
        const config = {
            headers: {
                "Content-Type": "application/json",
            },
        };
        const res = await axios.get(
            `${API_URL}/api/v1/current-user-movie/`+movieId,
            config
        );
        if (res) {
            dispatch({
                type: CURRENT_USER_MOVIE_TIME,
                payload: res.data,
            });
        }
    } catch (err) {
        console.log(err, "err");
    }
};
