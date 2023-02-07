import { IS_LOADING, LANGUAGES } from "../Actions/type";
const INITIAL_STATE = {
  is_loading: false,
  laguages: {},
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case IS_LOADING:
      return { ...state, is_loading: true };
    case LANGUAGES:
      return {
        ...state,
        laguages: action.payload,
        is_loading: false,
      };
    default:
      return state;
  }
};
