//The parent component.
//Whole functionality goes here and sends as props to the child. (React data flow)
import { choise } from "../components/helpers";
import { useState } from "react";
import head from "../assets/head_side.jpg";
import tail from "../assets/tail_side.jpg";
import Coin from "./Coin";

const CoinContainer = () => {
  const coins = [
    { side: "head", imgSrc: head },
    { side: "tail", imgSrc: tail },
  ];

  const [currState, setCurrState] = useState({
    currCoin: null, //to don't show the coin at the beginning
    nFlips: 0,
    nHeads: 0,
    nTails: 0,
  });

  function flipCoin() {
    const newCoin = choise(coins); // Randomly pick a coin by using choise function and coins as it argument

    setCurrState((st) => {
      //st -> represents the old state

      let newState = {
        ...st,
        currCoin: newCoin,
        nFlips: st.nFlips + 1,
      };
      if (newCoin.side === "head") {
        newState.nHeads += 1;
      } else {
        newState.nTails += 1;
      }
      return newState;
    });
  }

  //(e) -> stands for 'event'
  function handleClick(e) {
    flipCoin();
  }

  const [currCoin, setCurrCoin] = useState();
  return (
    <div className="CoinContainer">
      <h2>Let's Flip a Coin!</h2>
      {currState.currCoin && <Coin data={currState.currCoin} />}
      <button onClick={handleClick}>Flip the coin</button>
      <p>Out of {currState.nFlips} flips.</p>
      <p>
        There have been {currState.nHeads} heads, and {currState.nTails}.
      </p>
    </div>
  );
};

export default CoinContainer;
