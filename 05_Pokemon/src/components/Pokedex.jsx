import "./Pokedex.css";
import Pokecard from "./Pokecard";

const Pokedex = (props) => {
  return (
    <div className="Pokedex">
      <h1>Pokedex</h1>
      <p>Total Experience: {props.exp}</p>
      <p>{props.isWinner ? "WINNER" : "LOSER"}</p>
      <div className="Pokedex-cards">
        {props.pokemon.map((p) => (
          <Pokecard
            key={p.id}
            id={p.id}
            name={p.name}
            type={p.type}
            experience={p.experience}
          />
        ))}
      </div>
    </div>
  );
};

export default Pokedex;
