import React from "react";
import "./Die.css";

const Die = (props) => {
  return (
    <div>
      <i
        className={`Die 
        fa-solid fa-dice-${props.face}
        ${props.rolling && "make_wobble"}`}
      ></i>
    </div>
  );
};

export default Die;
