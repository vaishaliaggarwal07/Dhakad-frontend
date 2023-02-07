import { IS_LOADING, COUPONS_LIST } from "../Actions/type";
const INITIAL_STATE = {
  coupons_list: {},
  is_loading: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case IS_LOADING:
      return { ...state, is_loading: true };
    case COUPONS_LIST:
      return { ...state, coupons_list: action.payload, is_loading: false };
    default:
      return state;
  }
};
