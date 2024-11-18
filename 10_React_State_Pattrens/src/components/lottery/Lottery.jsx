//- - - - - - - - - - - - - - - - - - - - - - -
//Best practices to modeling state and designing components:
//- - - - - - - - - - - - - - - - - - - - - - -

//Props:
//title: title of the lottery
//numBalls: num of balls to display
//maxNum: max value of ball

//State:
//nums: array of [num, num, num,...] for balls

//Events:
//onClick: generate nujms in state

import { useState } from "react";
import LotteryBall from "./LotteryBall";
import "./Lottery.css";

const Lottery = (props) => {
  const defaultProps = {
    title: "Lotto",
    maxBalls: 6,
    maxNum: 40,
  };
  // Merge props with defaultProps
  const { title, maxBalls, maxNum } = { ...defaultProps, ...props };

  const [nums, setNums] = useState(Array.from({ length: maxBalls }));

  function generate() {
    setNums((currentState) =>
      currentState.map(() => Math.floor(Math.random() * maxNum) + 1)
    );
  }

  function handleClick() {
    generate();
  }

  return (
    <section className="Lottery">
      <h1>{title}</h1>
      <div>
        {nums.map((n, index) => (
          <LotteryBall key={index} num={n} />
        ))}
      </div>
      <button onClick={handleClick}>Generate!</button>
    </section>
  );
};

export default Lottery;
