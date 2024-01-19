import { useState } from "react";
import { getPokemon } from "../services/pokemonService";

export const usePokemonFetch = () => {
  const [chosenPokemon, setChosenPokemon] = useState(null);
  const [loadingPokemon, setLoadingPokemon] = useState(false);
  const [pokemonError, setPokemonError] = useState(false);

  const fetchPokemon = async (nameOrId) => {
    setLoadingPokemon(true);
    setPokemonError(false);

    try {
      const pokemon = await getPokemon(nameOrId);
      setChosenPokemon(pokemon);
    } catch (error) {
      setPokemonError(true);
    }

    setLoadingPokemon(false);
  };

  return {
    chosenPokemon,
    loadingPokemon,
    pokemonError,
    fetchPokemon,
  };
};
