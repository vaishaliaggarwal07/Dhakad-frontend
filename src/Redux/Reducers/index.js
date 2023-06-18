import { combineReducers } from "redux";
import auth from "./auth";
import casts from "./casts";
import languages from "./languages";
import movies from "./movies";
import coupon from "./coupon";
import review from "./review";
import order from "./order";
import currentUserMovie from "./currentUserMovies";
const rootReducers = combineReducers({
  movie_list: movies,
  cast_list: casts,
  coupons: coupon,
  laguages_list: languages,
  user: auth,
  reviews: review,
  movie_order: order,
  current_user_movie:currentUserMovie,
});

export default rootReducers;
