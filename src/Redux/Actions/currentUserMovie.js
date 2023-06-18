import axios from "axios";
import { toast } from "react-toastify";
import {API_URL} from "../../Utils/helpers/api_url";
import {CURRENT_USER_MOVIE_TIME} from "./type";

export const saveMovieCurrentTime = (currentTime, movieId) => async (dispatch) => {
    const token = localStorage.getItem("token");
    try {
        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
        };
        const body = JSON.stringify({
            currentTime,
            movieId
        });
        await axios.post(
            `${API_URL}/api/v1/current-user-movie`,
            body,
            config
        );
    } catch (err) {
        console.log(err, "err");
    }
};

export const getMovieCurrentTime = (movieId) => async (dispatch) => {
    const token = localStorage.getItem("token");
    try {
        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
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
