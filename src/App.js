import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
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
import TermAndCondition from "./Screen/TermAndCondition/TermAndCondition.js";
import PrivacyPolicy from "./Screen/TermAndCondition/PrivacyPolicy.js";
import Support from "./Screen/TabScreen/Support.js";
import PurchaseHistory from "./Screen/TabScreen/PurchaseHistory.js";
import PrivateRoute from "./Components/PrivateRoute.js";
import "react-toastify/dist/ReactToastify.css";
import VideoPlayer from "./Components/Helper/VideoPlayer/VideoPlayer.js";
import MovieLanguages from "./Screen/Movies.js";
import { ToastContainer } from "react-toastify";
import RentedMovies from "./Screen/TabScreen/RentedMovies.js";
import BookingAllHistory from "./Screen/TabScreen/BookingAllHistory.js";
import ExpiredMovie from "./Screen/ExpiredMovie.js";
import VideoJSPlayer from "./Components/Helper/VideoPlayer/VideoJSPlayer";
import videojs from 'video.js';

function App() {
  const token = localStorage.getItem("token");
  const isAuthenticated = token;

  return (
    <React.Fragment>
      <Navbar />
      <ToastContainer autoClose={1000} />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/search-box" component={SearchBox} />
        <Route exact path="/about-company" component={AboutCompany} />
        <Route exact path="/about-founder" component={AboutFounder} />
        <Route exact path="/support" component={Support} />
        <Route exact path="/Movie-detail/:id" component={imgesClick} />
        <Route exact path="/login" component={LoginScreen} />
        <Route exact path="/forget" component={ForgetScreen} />
        <Route exact path="/register" component={Email} />
        <Route
          exact
          path="/movie/language/:language"
          component={MovieLanguages}
        />
        <Route exact path="/refund-policy" component={RefundPolicy} />
        <Route exact path="/term&conditions" component={TermAndCondition} />
        <Route exact path="/privacy-policy" component={PrivacyPolicy} />
        <Route exact path="/submit-movie" component={submitMovie} />

        <PrivateRoute isAuthenticated={isAuthenticated}>
          <Route exact path="/profile" component={PersonalDetils} />
          <Route exact path="/pre-booked" component={BookingHistory} />
          <Route exact path="/streaming-library" component={StreamLibrary} />
          <Route exact path="/rented-movies" component={RentedMovies} />
          <Route exact path="/coupons" component={Coupons} />
          <Route exact path="/rewards" component={Rewards} />
          <Route exact path="/purchase-history" component={PurchaseHistory} />
          <Route exact path="/movie-expired" component={ExpiredMovie} />
          <Route
            exact
            path="/purchased-all-history"
            component={BookingAllHistory}
          />
          <Route exact path="/payment-option/:id" component={PaymentOption} />
          <Route exact path="/view-cart" component={PaymentOption} />
          <Route exact path="/about-company" component={PaymentOption} />
          <Route exact path="/about-founder" component={PaymentOption} />
          <Route exact path="/movie/watch/:id" component={VideoPlayer} />
          <Route exact path="/watch" component={VideoPlayer} />
        </PrivateRoute>
        <Redirect to="/" />
      </Switch>
      <Footer />
    </React.Fragment>
  );
}

/*const App = ()=>{
  const playerRef = React.useRef(null);

  const videoJsOptions = {
    autoplay: true,
    controls: true,
    responsive: true,
    fluid: true,
    sources: [{
      src: 'https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
      type: 'video/mp4'
    }]
  };

  const handlePlayerReady = (player) => {
    playerRef.current = player;

    player.currentTime(120);

    // You can handle player events here, for example:
    player.on('waiting', () => {
      videojs.log('player is waiting');
    });

    player.on('dispose', () => {
      videojs.log('player will dispose');
    });
  };

  return (
      <>
        <div>Rest of app here</div>
        <VideoJSPlayer options={videoJsOptions} onReady={handlePlayerReady} />
        <div>Rest of app here</div>
      </>
  );
}*/

export default App;
