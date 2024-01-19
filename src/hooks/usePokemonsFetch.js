import { useEffect, useState } from "react";
import { usePagination } from "../hooks/usePaginate";

import { getPokemons } from "../services/pokemonService";

export const usePokemonsFetch = () => {
  const [pokemons, setPokemons] = useState([]);

  const [loadingPokemons, setLoadingPokemons] = useState(false);
  const [pokemonsError, setPokemonsError] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const { pagintation, changePage, setChangePage, setPagination } =
    usePagination();

  const fetchPokemons = async (page) => {
    setLoadingPokemons(true);
    setPokemonsError(false);

    try {
      const pokemonsData = await getPokemons(page, searchTerm);
      setPokemons(pokemonsData.pokemons);
      setPagination(pokemonsData.pagination);
    } catch (error) {
      setPokemonsError(true);
    }

    setLoadingPokemons(false);
  };

  useEffect(() => {
    fetchPokemons(changePage);
  }, [changePage, searchTerm]);

  return {
    pokemons,
    pagintation,
    loadingPokemons,
    searchTerm,
    pokemonsError,
    setChangePage,
    setSearchTerm,
  };
};
