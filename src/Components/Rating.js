import React from "react";
import ReactStars from "react-rating-stars-component";

import { useState } from "react";
const Rating = (props) => {
  const [stars, setStars] = useState(props.startRaing);

  var example = {
    size: 24,
    count: 5,
    transition: true,
    value: stars,
    isHalf: true,
    edit: props.editRating,
    color: "#dddd",
    activeColor: "#ffcc00",
    onChange: props.onChange,
  };
  return (
    <div className="App">
      <ReactStars name={props.name} onBlur={props.onBlur} {...example} />
    </div>
  );
};

export default Rating;
