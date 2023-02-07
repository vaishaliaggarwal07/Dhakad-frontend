import { CREATE_ORDER } from "../Actions/type";

const INITIAL_STATE = {
  order_data: null,
};
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CREATE_ORDER:
      return {
        ...state,
        order_data: action.payload,
      };
    default:
      return state;
  }
};
