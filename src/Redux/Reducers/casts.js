import { CAST_BY_ID, IS_LOADING } from "../Actions/type";
const INITIAL_STATE = {
  castby_ids: {},
  is_loading: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case IS_LOADING:
      return { ...state, is_loading: true };
    case CAST_BY_ID:
      return { ...state, castby_ids: action.payload, is_loading: false };
    default:
      return state;
  }
};
