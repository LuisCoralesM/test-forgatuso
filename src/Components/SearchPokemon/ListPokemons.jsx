import React from "react";

export const ListPokemons = ({pokemon, pokemonChosen}) => {
  return (
    <div>
      {!pokemonChosen ? (
        <h1>hola</h1>
      ) : (
        <ul>
          <li>{pokemon.name}</li>
          <li>{pokemon.type}</li>
          <li>{pokemon.hp}</li>
          <li>{pokemon.attack}</li>
          <li>{pokemon.defense}</li>
          <li>
            <img className="w-24 h-24" src={pokemon.img} alt={pokemon.img} />
          </li>
        </ul>
      )}
    </div>
  );
};
