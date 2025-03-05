import React from "react";

const Box = ({ height, width, color, removeBox }) => {
  return (
    <>
      <div
        style={{
          height: `${height}em`,
          width: `${width}em`,
          backgroundColor: color,
        }}
      ></div>
      <button onClick={removeBox}>X</button>
    </>
  );
};

export default Box;
