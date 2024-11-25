import { Link } from "react-router-dom";
import Message from "./Message";
import "./Sardines.css";

const Sardines = () => {
  return (
    <div
      className="Sardines"
      style={{
        backgroundImage:
          "url(https://media.giphy.com/media/tVk4w6EZ7eGNq/giphy.gif)",
      }}
    >
      <Message>
        <h1>you don't eat the sardines. the sardines est you!</h1>
        <Link to="/">Go Back</Link>
      </Message>
    </div>
  );
};

export default Sardines;
