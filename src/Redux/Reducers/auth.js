import {
  LOGIN_SUCCESS,
  IS_LOADING,
  LOGIN_FAIL,
  LOGOUT,
  GET_USER,
  EDIT_USER,
  FORGOT_PASSWORD,
  UPDATE_USER_PROFILE,
  VERIFY_PASSWORD,
  GET_USER_BY_EMAIL
} from "../Actions/type";

const INITIAL_STATE = {
  user: {},
  user_profile: null,
  is_loading: false,
  user_verify: null,
  user_data: null,
  userId: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case IS_LOADING:
      return { ...state, is_loading: true };
    case LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload,
        is_loading: false,
      };
    case LOGIN_FAIL:
      return {
        ...state,
        user: action.payload,
        is_loading: false,
      };
    case LOGOUT:
      return {
        ...state,
        user: null,
        is_loading: false,
      };
    case GET_USER:
      return {
        ...state,
        user: action.payload,
        is_loading: false,
      };
    case EDIT_USER:
      return {
        ...state,
        user: action.payload,
        is_loading: false,
      };
    case FORGOT_PASSWORD:
      return {
        ...state,
        user: action.payload,
        is_loading: false,
      };
    case VERIFY_PASSWORD:
      return {
        ...state,
        user_verify: action.payload,
        is_loading: false,
      };

    case UPDATE_USER_PROFILE:
      return {
        ...state,
        user_profile: action.payload,
        is_loading: false,
      };

      case GET_USER_BY_EMAIL:
        return {
          ...state,
          user_data: action.payload.userData,
          userId: action.payload.userId,
        };
    default:
      return state;
  }
};
