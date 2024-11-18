//- - - - - - - - - - - - - - - - - - - - - - -
//Update state based off of existing state
//- - - - - - - - - - - - - - - - - - - - - - -

import { useState } from "react";

const ScoreKeeper = () => {
  const [score, setScore] = useState(0);

  function doSingleKill() {
    setScore(score + 1);
  }
  //   function doTripleleKill() {
  //     setScore(score + 1);
  //     setScore(score + 1);
  //     setScore(score + 4); // it takes the last value
  //   }

  function increamentScore(currentState) {
    return currentState + 1;
  }

  function doTripleleKill() {
    setScore((currentState) => increamentScore(currentState));
    setScore((currentState) => increamentScore(currentState));
    setScore((currentState) => increamentScore(currentState));
  }
  return (
    <div>
      <h1>Score is: {score}</h1>

      <button onClick={doSingleKill}>Single Kill!</button>
      <button onClick={doTripleleKill}>Triple Kill!</button>
    </div>
  );
};

export default ScoreKeeper;
