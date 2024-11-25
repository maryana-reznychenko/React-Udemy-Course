import { Link } from "react-router-dom";
import sodaImg from "../assets/soda.webp";
import Message from "./Message";
import "./Soda.css";

const Soda = () => {
  return (
    <div className="Soda">
      <img
        src={sodaImg}
        alt="coca cola can"
        style={{
          height: "300px",
          width: "280px",
        }}
      />
      <div>
        <Message>
          <h1>SODAAAA IS MY FAVORITE!!!</h1>
          <h3>But now I drink sparkling water instead</h3>
          <p>(I still miss soda)</p>
          <br />
          <Link to="/">Go Back</Link>
        </Message>
      </div>
      <img
        src={sodaImg}
        alt="coca cola can"
        style={{
          height: "300px",
          width: "280px",
        }}
      />
    </div>
  );
};

export default Soda;
