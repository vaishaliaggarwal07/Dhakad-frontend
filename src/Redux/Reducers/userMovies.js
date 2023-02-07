import { ADD_USER_MOVIE, IS_LOADING } from "../Actions/type";
const INITIAL_STATE = {
  user_movie: {},
  is_loading: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case IS_LOADING:
      return { ...state, is_loading: true };
    case ADD_USER_MOVIE:
      return { ...state, user_movie: action.payload, is_loading: false };
    default:
      return state;
  }
};
