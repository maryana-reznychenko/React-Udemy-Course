//This is the stateful parent to Box.jsx-child

import React from "react";
import Box from "./Box";
import "./BoxContainer.css";

const BoxContainer = () => {
  const allBoxes = {
    numBoxes: 6,
    allColors: ["purple", "magenta", "violet", "pink"],
  };
  const boxes = Array.from({ length: allBoxes.numBoxes });

  return (
    <div className="BoxContainer">
      {boxes.map((_, index) => (
        <div key={index}>
          <Box colors={allBoxes.allColors} />
        </div>
      ))}
    </div>
  );
};

export default BoxContainer;
