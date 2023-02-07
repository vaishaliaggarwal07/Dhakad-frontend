import { createStore, applyMiddleware } from "redux";
import rootReducers from "../src/Redux/Reducers";
import Redexthunk from "redux-thunk";

const store = createStore(rootReducers, {}, applyMiddleware(Redexthunk));
export default store;
