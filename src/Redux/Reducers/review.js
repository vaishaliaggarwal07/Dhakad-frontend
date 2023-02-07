import { IS_LOADING, REVIEW_LIST_BY_MOVIE } from "../Actions/type";
const INITIAL_STATE = {
  review_list: {},
  is_loading: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case IS_LOADING:
      return { ...state, is_loading: true };
    case REVIEW_LIST_BY_MOVIE:
      return { ...state, review_list: action.payload, is_loading: false };
    default:
      return state;
  }
};
