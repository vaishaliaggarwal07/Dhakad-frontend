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
  UPDATE_STREAM_MOVIE,
} from "../Actions/type";
const INITIAL_STATE = {
  featured_lists: {},
  trending_lists: {},
  coming_movie: {},
  recent_movie: {},
  movieby_id: {},
  movie_lists: {},
  pre_booked: {},
  stream_movie: {},
  search_movies: {},
  moviesby_langes: {},
  relatedmovie_lists: {},
  rented_mov: {},
  is_loading: false,
  purchased_list: {},
  stream_Data: {},
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case IS_LOADING:
      return { ...state, is_loading: true };
    case MOVIE_LIST:
      return {
        ...state,
        movie_lists: action.payload,
        is_loading: false,
      };
    case RELATED_MOVIE_LIST:
      return {
        ...state,
        relatedmovie_lists: action.payload,
        is_loading: false,
      };

    case IS_FEATURED:
      return {
        ...state,
        featured_lists: action.payload,
        is_loading: false,
      };
    case IS_TRANDING:
      return {
        ...state,
        trending_lists: action.payload,
        is_loading: false,
      };
    case COMING_SOON_MOVIE:
      return {
        ...state,
        coming_movie: action.payload,
        is_loading: false,
      };
    case RECENT_ADDED_MOVIE:
      return {
        ...state,
        recent_movie: action.payload,
        is_loading: false,
      };
    case MOVIES_BY_LANGUAGES: //******************* */
      return {
        ...state,
        moviesby_langes: action.payload,
        is_loading: false,
      };
    case MOVIE_BY_ID:
      return {
        ...state,
        movieby_id: action.payload,
        is_loading: false,
      };
    case PRE_BOOKED_MOVIE:
      return {
        ...state,
        pre_booked: action.payload,
        is_loading: false,
      };
    case RENTED_MOVIE_LIST:
      return {
        ...state,
        rented_mov: action.payload,
        is_loading: false,
      };
    case PURCHASED_LIST:
      return {
        ...state,
        purchased_list: action.payload,
        is_loading: false,
      };
    case PURCHASED_LIST_FIELD:
      return {
        ...state,
        purchased_list: action.payload,
        is_loading: false,
      };
    case STREAMING_LIBRARY:
      return {
        ...state,
        stream_movie: action.payload,
        is_loading: false,
      };
    case UPDATE_STREAM_MOVIE:
      return {
        ...state,
        stream_Data: action.payload,
        is_loading: false,
      };

    case SEARCH_MOVIE:
      return {
        ...state,
        search_movies: action.payload,
        is_loading: false,
      };
    default:
      return state;
  }
};
