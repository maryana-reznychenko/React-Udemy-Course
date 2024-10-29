import React from "react";

const SlotMachine = (props) => {
  {
    /*object distracturing into a variable. Ve get variables s1 s2 s3 and use them in return*/
  }
  const { s1, s2, s3 } = props;
  const isWinner = s1 === s2 && s2 === s3;
  return (
    <div>
      <p>
        {s1}
        {s2}
        {s3}
      </p>
      <p>{isWinner ? "You won!" : "You loose."}</p>
    </div>
  );
};

export default SlotMachine;
