//Props:
//num: value of this ball

//CSS for styling.

import React from "react";
import "./LotteryBall.css";

const LotteryBall = (props) => {
  return <div className="LotteryBall">{props.num}</div>;
};

export default LotteryBall;
