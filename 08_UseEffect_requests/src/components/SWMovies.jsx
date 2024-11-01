import { useState, useEffect } from "react";
import axios from "axios";

const SWMovies = () => {
  const [number, setNumber] = useState(1);
  const [movie, setMovie] = useState("");

  useEffect(() => {
    async function fetchData() {
      const res = await axios.get(`https://swapi.dev/api/films/${number}`);
      console.log(res);
      setMovie(res.data);
    }
    fetchData();
  }, [number]); //only when the number is changed, the one fetch will happen from useEffect.

  // We can have other code run when something else changes if we need
  // useEffect(() => {
  //   async function fetchData() {
  //     const res = await axios.get(`https://swapi.dev/api/films/${number}`);
  //     console.log(res);
  //     setMovie(res.data);
  //   }
  //   fetchData();
  // }, [somethingOtherChanges]);

  return (
    <div>
      <h1>Pick a movie from the Star Wars saga</h1>
      <h2>{movie.title} part</h2>
      <p>{movie.opening_crawl}</p>
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
