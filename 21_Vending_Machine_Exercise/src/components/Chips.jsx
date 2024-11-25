import { Link } from "react-router-dom";
import { useState } from "react";
import chipsImg from "../assets/chips.jpg";
import Message from "./Message";
import "./Chips.css";

const Chips = () => {
  const [bags, setBags] = useState([]);

  function handleClick() {
    const x = window.innerWidth * Math.random(); // Random x-coordinate
    const y = window.innerHeight * Math.random(); // Random y-coordinate
    setBags((prevBags) => [...prevBags, { x, y }]); // Update the state with the new bag position
  }

  return (
    <div className="Chips" style={{ position: "relative", height: "100vh" }}>
      <Message>
        <div>
          <h1>
            Bags eaten: {bags.length}
            <button onClick={handleClick}>nom nom nom</button>
          </h1>
        </div>
        {bags.map((bag, i) => (
          <img
            key={i}
            src={chipsImg}
            className="bag"
            style={{
              top: `${bag.y}px`,
              left: `${bag.x}px`,
              height: "200px",
              width: "150px",
            }}
            alt="bag of Lay's chips"
          />
        ))}
        <Link to="/">Go Back</Link>{" "}
      </Message>
    </div>
  );
};

export default Chips;
