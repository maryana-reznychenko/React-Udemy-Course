import "./Pokedex.css";
import Pokecard from "./Pokecard";

const Pokedex = (props) => {
  let title;
  if (props.isWinner) {
    title = <h2 className="Pokedex-winner">Winning Hand</h2>;
  } else {
    title = <h2 className="Pokedex-looser">Loosing Hand</h2>;
  }

  return (
    <div className="Pokedex">
      {title}
      <h3>Total Experience: {props.exp}</h3>

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
