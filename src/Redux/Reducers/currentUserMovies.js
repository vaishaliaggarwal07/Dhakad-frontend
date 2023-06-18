import { CURRENT_USER_MOVIE_TIME, IS_LOADING } from "../Actions/type";
const INITIAL_STATE = {
    current_time: -1,
    is_loading: false,
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case IS_LOADING:
            return { ...state, is_loading: true };
        case CURRENT_USER_MOVIE_TIME:
            console.log('currentUserMovies:actions: ',action);
            return { ...state, current_time: action.payload.data.current_time, is_loading: false };
        default:
            return state;
    }
};
