import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const FoodSearch = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  function handleChange(e) {
    setQuery(e.target.value);
  }

  function handleClick() {
    //1. Do something
    alert("Saved to DB");

    //2.Rederect somwhere else
    navigate(`/food/${query}`); // Oh WOW🤩
  }
  return (
    <div>
      <h1>Search for a food:</h1>
      <br />
      <input
        type="text"
        placeholder="search for a food"
        value={query}
        onChange={handleChange}
      />
      <Link to={`/food/${query}`}>Go!</Link>
      <button onClick={handleClick}>Save New Food</button>
    </div>
  );
};

export default FoodSearch;
