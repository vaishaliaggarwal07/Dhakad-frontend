import React from "react";
import { useHistory } from "react-router-dom";

const ExpiredMovie = () => {
  const history = useHistory();
  return (
    <React.Fragment>
      <div className="main-content">
        <div className="error-content p-5 text-center">
          <h1>Your movie has been expired!</h1>
          <p>
            As per our conditions your movie is expired because once you watch
            the movie after 9 hours your movie goes expires. If you wanna watch
            again please rent or buy it again.
          </p>
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => {
              history.push("/");
            }}
          >
            Go Home
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ExpiredMovie;
