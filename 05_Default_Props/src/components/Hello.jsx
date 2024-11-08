import React from "react";

const Hello = (props) => {
  console.log(props);

  let bangs = "!".repeat(props.bangs);

  return (
    <div>
      <p>
        Hi {props.to} from {props.from}
        {bangs} {props.data}
      </p>
      <img src={props.img} alt="" />
    </div>
  );
};

Hello.defaultProps = {
  from: "<this atribute is missing>",
  bangs: 1,
};

export default Hello;
