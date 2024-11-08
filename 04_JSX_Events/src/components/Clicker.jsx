import { useState } from "react";

const Clicker = () => {
  const [number, setNumber] = useState(1);

  function genRandomNum() {
    let randNum = Math.floor(Math.random() * 10) + 1;
    setNumber(randNum);
  }

  return (
    <div>
      <h1>The number is {number}</h1>
      {number === 7 && <h2>YOU WINN!!!</h2>}
      {number !== 7 && <button onClick={genRandomNum}>Random number</button>}
    </div>
  );
};

export default Clicker;
