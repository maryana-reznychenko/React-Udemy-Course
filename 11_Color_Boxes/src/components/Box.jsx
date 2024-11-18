import { useState } from "react";
import { choise } from "./helpers";
import "./Box.css";

const Box = ({ colors }) => {
  const [color, setColor] = useState(choise(colors));

  function pickColor() {
    let newColor;
    do {
      newColor = choise(colors);
    } while (newColor === color);
    setColor(newColor);
  }

  function handleClick() {
    pickColor();
  }

  return (
    <div
      className="Box"
      style={{ backgroundColor: color }}
      onClick={handleClick}
    ></div>
  );
};

export default Box;
