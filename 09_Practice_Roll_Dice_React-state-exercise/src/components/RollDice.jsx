//RollDice.jsx is the parent component to Die.jsx

import { useState } from "react";
import Die from "./Die";
import "./RollDice.css";

const RollDice = () => {
  const sides = ["one", "two", "three", "four", "five", "six"];

  const [side, setSide] = useState({
    die1: "one",
    die2: "six",
    rolling: false,
  });

  function isRolling() {
    //pick 2 new rolls
    let newDie1 = sides[Math.floor(Math.random() * sides.length)];
    let newDie2 = sides[Math.floor(Math.random() * sides.length)];
    //set state with new rolls
    setSide({
      die1: newDie1,
      die2: newDie2,
      rolling: true,
    });
    //wait one second, than set rolling to false to display "Roll dice!"
    setTimeout(() => {
      setSide((prev) => ({
        ...prev,
        rolling: false,
      }));
    }, 1000);
  }

  return (
    <div className="RollDice">
      <Die face={side.die1} rolling={side.rolling} />
      <Die face={side.die2} rolling={side.rolling} />

      <button onClick={isRolling} disabled={side.rolling}>
        {side.rolling ? "Rolling..." : "Roll dice!"}
      </button>
    </div>
  );
};

export default RollDice;
