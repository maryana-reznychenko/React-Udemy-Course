import { useState } from "react";

const BrockenButton = () => {
  const [isClicked, setIsClicked] = useState(false);

  function handleClick(e) {
    setIsClicked(true);
  }

  return (
    <div>
      <h1>{isClicked ? "Clicked!!!" : "Not Clicked"}</h1>
      <button onClick={handleClick}>No, Click me!</button>
    </div>
  );
};

export default BrockenButton;
