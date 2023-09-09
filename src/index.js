import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import store from "./store";
import ScrollToTop from './Components/Helper/ScrollToTop';


if (!localStorage.getItem('token')) {

}

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <ScrollToTop/>
            <App/>
        </Provider>
    </BrowserRouter>,
    document.getElementById("root")
);

