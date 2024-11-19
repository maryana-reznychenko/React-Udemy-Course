import { useState } from "react";
import "./ButtonList.css";

const ButtonList = () => {
  const colors = ["#e056fd", "#eb4d4b", "#badc58", "#f0932b"];

  const [bgColor, setBgColor] = useState("cyan");

  function changeColor(newColor) {
    console.log(`new color is ${newColor}`);

    setBgColor(newColor);
  }

  return (
    <div className="ButtonList" style={{ backgroundColor: bgColor }}>
      {colors.map((c, index) => {
        const colorObj = { backgroundColor: c };
        return (
          <button key={index} style={colorObj} onClick={() => changeColor(c)}>
            Click on me!
          </button>
        );
      })}
    </div>
  );
};

export default ButtonList;
