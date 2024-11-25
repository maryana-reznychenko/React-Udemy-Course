// import "./VendingMAchine.css";
import vendingMachineImg from "../assets/VendingMAchine.jpeg";
import { Link } from "react-router-dom";
import Message from "./Message";
import "./VendingMachine.css";

const VendingMachine = () => {
  return (
    <div
      className="VendingMachine"
      style={{
        backgroundImage: `url(${vendingMachineImg})`,
      }}
    >
      <Message>
        <h1>hello i am a vending machine. whatwould you like to eat?</h1>
      </Message>
      <Message>
        <Link to="/soda">Soda</Link>
        <Link to="/sardines">Sardines</Link>
        <Link to="/chips">Chips</Link>
      </Message>
    </div>
  );
};

export default VendingMachine;
