import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = ({ dogs }) => {
  const dogLinks = dogs.map((dog) => (
    <li className="nav-item" key={dog.name}>
      <NavLink to={`/dogs/${dog.name}`} className="nav-link">
        {dog.name}
      </NavLink>
    </li>
  ));
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link to="/dogs" className="navbar-brand">
        Dog Shelter
      </Link>

      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink to="/dogs" className="nav-link">
              Home
            </NavLink>
          </li>
          <ul className="navbar-nav">{dogLinks}</ul>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
