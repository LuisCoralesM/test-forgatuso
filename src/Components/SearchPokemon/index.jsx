import React from "react";
import StateContext from "../../context/StateContext";
import { SearchIcon } from "@heroicons/react/solid";
import { useSearch } from "../../hooks/useSearch";

const { Provider } = StateContext;

export const SearchPokemon = () => {
  const { setPokemonName, pokeSearch } = useSearch();

  return (
      <div className="relative w-full text-gray-400 focus-within:text-gray-600">
        <button
          onClick={pokeSearch}
          className="absolute inset-y-0 left-0 flex items-center cursor-pointer"
        >
          <SearchIcon className="h-5 w-5" aria-hidden="true" />
        </button>
        <input
          id="search-field"
          className="block w-full h-full pl-8 pr-3 py-2 border-transparent text-gray-900 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-0 focus:border-transparent sm:text-sm"
          placeholder="Search"
          type="search"
          name="search"
          onChange={(e) => {
            setPokemonName(e.target.value);
          }}
        />
      </div>
  );
};
