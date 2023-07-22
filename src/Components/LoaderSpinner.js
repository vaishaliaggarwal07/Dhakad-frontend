import React from "react";
import "./loader.css";

const LoadingSpinner = () => {
  console.log('LoaderSpinner:LoadingSpinner: ');
  return (
      <div className="loader-outer">
        <div className="lds-spinner">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
  );
}


export default LoadingSpinner;
