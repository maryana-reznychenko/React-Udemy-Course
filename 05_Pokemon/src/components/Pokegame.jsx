import Pokedex from "./Pokedex";

const Pokegame = ({
  pokemon = [
    { id: 4, name: "Charmander", type: "fire", experience: 62 },
    { id: 7, name: "Squirtle", type: "water", experience: 63 },
    { id: 11, name: "Metapod", type: "bug", experience: 72 },
    { id: 12, name: "Butterfree", type: "flying", experience: 178 },
    { id: 25, name: "Pikachu", type: "electric", experience: 112 },
    { id: 39, name: "Jigglypuff", type: "normal", experience: 95 },
    { id: 94, name: "Gengar", type: "poison", experience: 225 },
    { id: 133, name: "Eevee", type: "normal", experience: 65 },
  ],
}) => {
  let hand1 = [];
  let hand2 = [...pokemon];

  while (hand1.length < hand2.length) {
    let randIdx = Math.floor(Math.random() * hand2.length);
    let randPokemon = hand2.splice(randIdx, 1)[0];
    hand1.push(randPokemon);
  }

  //Calculate the experience (the props from pokemon data)
  let exp1 = hand1.reduce((exp, pokemon) => exp + pokemon.experience, 0);
  let exp2 = hand2.reduce((exp, pokemon) => exp + pokemon.experience, 0);

  return (
    <div>
      <Pokedex pokemon={hand1} exp={exp1} isWinner={exp1 > exp2} />
      <Pokedex pokemon={hand2} exp={exp2} isWinner={exp2 > exp1} />
    </div>
  );
};

export default Pokegame;
