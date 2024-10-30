import React from "react";
import "./Pokecard.css";

// const POKE_API =
//   "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";
const POKE_API = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/";

//function to set image id in POKE_API to thre numbers /it is required for this/
let padToThree = (number) => (number <= 999 ? `00${number}`.slice(-3) : number);

const Pokecard = (props) => {
  let imgSrc = `${POKE_API}${padToThree(props.id)}.png`;

  return (
    <div className="Pokecard">
      <h1 className="Pokecard-title">{props.name}</h1>

      <div className="Pokecard-image">
        <img src={imgSrc} alt={props.name} />
      </div>
      <div className="Pokecard-data">Type: {props.type}</div>
      <div className="Pokecard-data">Experience: {props.experience}</div>
    </div>
  );
};

export default Pokecard;
