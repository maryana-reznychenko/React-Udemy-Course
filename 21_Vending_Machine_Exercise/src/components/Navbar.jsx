import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="Navbar">
      <NavLink
        className={({ isActive }) => (isActive ? "Navbar-active" : undefined)}
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "Navbar-active" : undefined)}
        to="/chips"
      >
        Chips
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "Navbar-active" : undefined)}
        to="/soda"
      >
        Soda
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "Navbar-active" : undefined)}
        to="/sardines"
      >
        Sardines
      </NavLink>
    </div>
  );
};

export default Navbar;
