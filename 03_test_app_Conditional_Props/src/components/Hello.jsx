import React from "react";

const Hello = (props) => {
  console.log(props);

  let bangs = "!".repeat(props.bangs);

  return (
    <div>
      <p>
        Hi {props.to} from {props.from}
        {bangs}
      </p>
      <img src={props.img} alt="" />
    </div>
  );
};

export default Hello;
