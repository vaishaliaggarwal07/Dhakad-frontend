import axios from "axios";
import { toast } from "react-toastify";
import { API_URL } from "../../Utils/helpers/api_url";
import {
  IS_FEATURED,
  IS_TRANDING,
  MOVIE_BY_ID,
  IS_LOADING,
  COMING_SOON_MOVIE,
  RECENT_ADDED_MOVIE,
  MOVIE_LIST,
  PRE_BOOKED_MOVIE,
  STREAMING_LIBRARY,
  SEARCH_MOVIE,
  MOVIES_BY_LANGUAGES,
  RELATED_MOVIE_LIST,
  RENTED_MOVIE_LIST,
  PURCHASED_LIST,
  PURCHASED_LIST_FIELD,
} from "./type";
export const movieLists = () => async (dispatch) => {
  try {
    dispatch({
      type: IS_LOADING,
    });
    var config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const res = await axios.get(`${API_URL}/api/v1/movies`, config);
    dispatch({
      type: MOVIE_LIST,
      payload: res.data,
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
// featuredMovie
export const featuredMovies = () => async (dispatch) => {

  try {
    dispatch({
      type: IS_LOADING,
    });
    var config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const res = await axios.get(`${API_URL}/api/v1/movies?feature=yes`, config);
    dispatch({
      type: IS_FEATURED,
      payload: res.data,
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
// topTrandingMovie
export const topTrandingMovies = () => async (dispatch) => {

  try {
    dispatch({
      type: IS_LOADING,
    });

    const res = await axios.get(`${API_URL}/api/v1/movies/top-trending`);
    if (res) {
      dispatch({
        type: IS_TRANDING,
        payload: res.data.data,
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
// getMovie
export const getMovie = (id) => async (dispatch) => {

  try {
    dispatch({
      type: IS_LOADING,
    });

    const res = await axios.get(`${API_URL}/api/v1/movies/${id}`);
    if (res) {
      dispatch({
        type: MOVIE_BY_ID,
        payload: res.data.data,
      });
    }
  } catch (err) {
    const error = err?.response ? err?.response?.data?.message : err?.message;
    if (error) {
      toast.error(error, {
        theme: "dark",
      });
    }
  }
};
// coming soon movie
export const comingMovies = () => async (dispatch) => {

  try {
    dispatch({
      type: IS_LOADING,
    });

    const res = await axios.get(`${API_URL}/api/v1/movies/coming-movies`);
    if (res) {
      dispatch({
        type: COMING_SOON_MOVIE,
        payload: res.data.data,
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

// Recent added movie
export const recentMovie = () => async (dispatch) => {

  try {
    dispatch({
      type: IS_LOADING,
    });
    const res = await axios.get(`${API_URL}/api/v1/movies`);
    if (res) {
      dispatch({
        type: RECENT_ADDED_MOVIE,
        payload: res.data.data,
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
// pre booking movie
export const preBookedMovie = (id) => async (dispatch) => {

  try {
    dispatch({
      type: IS_LOADING,
    });

    const res = await axios.get(`${API_URL}/api/v1/movies/getpbookedMovies/${id}`);
    if (res) {
      dispatch({
        type: PRE_BOOKED_MOVIE,
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
// streaming movie
export const UpDateStrMovie = (id) => async (dispatch) => {

  axios.patch(`${API_URL}/api/v1/trasncations/${id}`, {
    streamed: true,
    startedAt: new Date(),
  }).then((result) => {
      console.log('movies:result : UpDateStrMovie ',result);
    }).catch((error) => console.log("error", error));
};

// streamingLibrary
export const streamingLibrary = (id) => async (dispatch) => {
  try {
    dispatch({
      type: IS_LOADING,
    });
    const res = await axios.get(
      `${API_URL}/api/v1/trasncations/getAllStreanedMovies/${id}`
    );
    dispatch({
      type: STREAMING_LIBRARY,
      payload: res.data,
    });
  } catch (err) {
    const error = err?.res ? err?.res?.data?.message : err?.message;
    if (error) {
      toast.error(error, {
        theme: "dark",
      });
    }
  }
};

// Search movie
export const searchMovies = (movie) => async (dispatch) => {
  try {
    dispatch({
      type: IS_LOADING,
    });

    const res = await axios.get(`${API_URL}/api/v1/movies?search=${movie}`);
    if (res) {
      dispatch({
        type: SEARCH_MOVIE,
        payload: res.data.data,
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
// Movie by languages
export const moviesByLanguages = (language) => async (dispatch) => {
  try {
    var config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const res = await axios.get(
      `${API_URL}/api/v1/movies?language=${language}`,
      config
    );
    dispatch({
      type: MOVIES_BY_LANGUAGES,
      payload: res.data,
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

// more like this movies
export const moreLikeMovie = (type) => async (dispatch) => {
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
      `${API_URL}/api/v1/movies?page=1&limit=10&categories=${type}`,
      config
    );
    if (res) {
      dispatch({
        type: RELATED_MOVIE_LIST,
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
// rented movie

export const getRentedMovie = (id) => async (dispatch) => {
  try {
    dispatch({
      type: IS_LOADING,
    });
    const res = await axios.get(
      `${API_URL}/api/v1/trasncations/getAllRentedMovies/${id}`
    );
    dispatch({
      type: RENTED_MOVIE_LIST,
      payload: res?.data,
    });
  } catch (err) {
    const error = err?.res ? err?.res?.data?.message : err?.message;
    if (error) {
      toast.error(error, {
        theme: "dark",
      });
    }
  }
};

// purchase history
export const purchaseHistory = (id) => async (dispatch) => {
  try {
    dispatch({
      type: IS_LOADING,
    });
    const response = await axios.get(
      `${API_URL}/api/v1/movies/purches-movies/${id}`,
    );
    if (response) {
      dispatch({
        type: PURCHASED_LIST,
        payload: response?.data,
      });
    }
  } catch (err) {
    console.log(err);
    dispatch({
      type: PURCHASED_LIST_FIELD,
      payload: err.response,
    });
  }
};
