import { useState, createContext } from "react";

export const useSearch = () => {
  const [pokemonName, setPokemonName] = useState("");
  const [pokemon, setPokemon] = useState({});
  const [pokemonChosen, setPokemonChosen] = useState(false);

  const pokeSearch = () => {

    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
      .then((data) => data.json())
      .then((response) => {
        setPokemon({
          name: pokemonName,
          type: response.types[0].type.name,
          hp: response.stats[0].base_stat,
          attack: response.stats[1].base_stat,
          defense: response.stats[2].base_stat,
          img: response.sprites.front_shiny,
        });
        setPokemonChosen(true);
      });
  };

  return {
    setPokemonName,
    pokemon,
    pokeSearch,
    pokemonChosen,
  };
};
