import { useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();

  function handleClick() {
    alert("LOGGED YOU IN");
    navigate("/food/salmon");
    {
      /*allows to connect component to router in url whithout router path in APP.jsx */
    }
  }
  function handleGoBack() {
    navigate(-1);
    {
      /* Equivalent to history.goBack() one step backword */
    }
  }
  return (
    <div className="Navbar">
      <button onClick={handleClick}>Log In</button>
      <button onClick={handleGoBack}>go back</button>
    </div>
  );
};

export default Navbar;
