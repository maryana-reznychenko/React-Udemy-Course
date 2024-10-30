import React from "react";
import useToggle from "./hooks/useToggle";

const Toggler = () => {
  const [isHappy, toggleIsHappy] = useToggle(true);
  const [isHeartbroken, toggleIsHeartbroken] = useToggle(true);
  const [isBanana, toggleIsBanana] = useToggle(true);

  return (
    <div>
      <h1 onClick={toggleIsHappy}>{isHappy ? "😄" : "😭"}</h1>
      <h1 onClick={toggleIsHeartbroken}>{isHeartbroken ? "❤️" : "💔"}</h1>
      <h1 onClick={toggleIsBanana}>{isBanana ? "🍌" : "🍍"}</h1>
    </div>
  );
};

export default Toggler;
