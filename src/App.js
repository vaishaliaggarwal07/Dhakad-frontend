import React, {useEffect, useState} from "react";
import {Route, Switch, Redirect} from "react-router-dom";
import Navbar from "../src/Components/Header/index.jsx";
import Home from "./Screen/Home/index.jsx";
import AboutCompany from "./Screen/AboutCompany/index.jsx";
import AboutFounder from "./Screen/AboutFounder/index.jsx";
import submitMovie from "./Screen/SubmitMovie/index.jsx";
import imgesClick from "../src/Components/Helper/MovieDetail.js";
import SearchBox from "./Screen/SearchBox/index.js";
import PersonalDetils from "./Screen/TabScreen/Profile.js";
import BookingHistory from "./Screen/TabScreen/BookingHistory.js";
import StreamLibrary from "./Screen/TabScreen/StreamLibrary.js";
import Coupons from "./Screen/TabScreen/Coupons.js";
import Rewards from "./Screen/TabScreen/Rewards.js";
import Footer from "./Components/Footer/index.jsx";
import LoginScreen from "./Screen/LoginScreen.js";


import ForgetScreen from "./Screen/ForgetScreen.jsx";
import PaymentOption from "./Screen/PaymentOption.js";
import RefundPolicy from "./Screen/RefundPolicy.js";
import Email from "./Components/Helper/Modal/Email.js";
import Support from "./Screen/TabScreen/Support.js";
import PurchaseHistory from "./Screen/TabScreen/PurchaseHistory.js";
import PrivateRoute from "./Components/PrivateRoute.js";
import "react-toastify/dist/ReactToastify.css";
import VideoPlayer from "./Components/Helper/VideoPlayer/VideoPlayer.js";
import MovieLanguages from "./Screen/Movies.js";
import {ToastContainer} from "react-toastify";
import RentedMovies from "./Screen/TabScreen/RentedMovies.js";
import BookingAllHistory from "./Screen/TabScreen/BookingAllHistory.js";
import ExpiredMovie from "./Screen/ExpiredMovie.js";
import PrivacyPolicy from "./Screen/PrivacyPolicy/PrivacyPolicy";
import UserAgreement from "./Screen/UserAgreement/UserAgreement";
import Grievance from "./Screen/Grievance/Grievance";
import FAQ from "./Screen/FAQ/FAQ";
import TermsAndConditions from "./Screen/TermsAndConditions/TermsAndConditions";
import "./Components/Helper/Style.css";
import axios from "axios";
import {API_URL} from "./Utils/helpers/api_url";
import "./Utils/helpers/axios-interceptor";
import LoadingSpinner from "./Components/LoaderSpinner";

function App() {
    const [appLoading, setAppLoading] = useState(true);
    useEffect(() => {
        if (!localStorage.getItem("token")) {
            let axiosConfig = {
                withCredentials: true,
            }
            axios.get(`${API_URL}/api/v1/users/token/public`,axiosConfig)
                .then(res => {
                    console.log('index:res: ', res);
                    setAppLoading(false);
                }, err => {
                    console.error('index:unable to get pub token: ', err);
                })
        }else{
            setAppLoading(false);
        }
    }, []);

    const token = localStorage.getItem("token");
    const isAuthenticated = token;
    if(appLoading){
        return <LoadingSpinner/>;
    }else{
        return (
            <React.Fragment>
                <Navbar/>
                <ToastContainer autoClose={1000}/>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/home" component={Home}/>
                    <Route exact path="/search-box" component={SearchBox}/>
                    <Route exact path="/about-company" component={AboutCompany}/>
                    <Route exact path="/about-founder" component={AboutFounder}/>
                    <Route exact path="/support" component={Support}/>
                    <Route exact path="/Movie-detail/:id" component={imgesClick}/>
                    <Route exact path="/login" component={LoginScreen}/>
                    <Route exact path="/forget" component={ForgetScreen}/>
                    <Route exact path="/register" component={Email}/>
                    <Route
                        exact
                        path="/movie/language/:language"
                        component={MovieLanguages}
                    />
                    <Route exact path="/refund-policy" component={RefundPolicy}/>
                    <Route exact path="/submit-movie" component={submitMovie}/>

                    <Route exact path="/privacy-policy" component={PrivacyPolicy}/>
                    <Route exact path="/grievance" component={Grievance}/>
                    <Route exact path="/faq" component={FAQ}/>
                    <Route exact path="/user-agreement" component={UserAgreement}/>
                    <Route exact path="/terms-and-conditions" component={TermsAndConditions}/>

                    <PrivateRoute isAuthenticated={isAuthenticated}>
                        <Route exact path="/profile" component={PersonalDetils}/>
                        <Route exact path="/pre-booked" component={BookingHistory}/>
                        <Route exact path="/streaming-library" component={StreamLibrary}/>
                        <Route exact path="/rented-movies" component={RentedMovies}/>
                        <Route exact path="/coupons" component={Coupons}/>
                        <Route exact path="/rewards" component={Rewards}/>
                        <Route exact path="/purchase-history" component={PurchaseHistory}/>
                        <Route exact path="/movie-expired" component={ExpiredMovie}/>
                       

                        <Route
                            exact
                            path="/purchased-all-history"
                            component={BookingAllHistory}
                        />
                        <Route exact path="/payment-option/:id" component={PaymentOption}/>
                        <Route exact path="/view-cart" component={PaymentOption}/>
                        <Route exact path="/about-company" component={PaymentOption}/>
                        <Route exact path="/about-founder" component={PaymentOption}/>
                        <Route exact path="/movie/watch/:id" component={VideoPlayer}/>
                        <Route exact path="/watch" component={VideoPlayer}/>
                    </PrivateRoute>
                    <Redirect to="/"/>
                </Switch>
                <Footer/>
            </React.Fragment>
        );
    }

}

export default App;
