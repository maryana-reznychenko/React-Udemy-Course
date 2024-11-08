import React, { useState, useEffect } from "react";
import axios from "axios";

const SWMovies = () => {
  const [number, setNumber] = useState(1);
  const [movie, setMovie] = useState("");

  useEffect(() => {
    async function getData() {
      const responce = await axios.get(`https://swapi.dev/api/films/${number}`);
      console.log(responce);
      setMovie(responce.data);
    }
    getData();
  }, [number]);

  return (
    <div>
      <h1>Pick a movie</h1>
      <h2>{movie.title}</h2>
      <h3>Director: {movie.director}</h3>
      <p>{movie.opening_crawl}</p>
      <h4>you picked up {number}</h4>
      <select value={number} onChange={(e) => setNumber(e.target.value)}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
      </select>
    </div>
  );
};

export default SWMovies;
