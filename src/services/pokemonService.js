import { api } from "../api";
import { downloadPdf } from "../utils/pdf";

export const getPokemons = async (page = 0, searchTerm = "") => {
  const response = await api.get(
    `/pokemons?limit=20&page=${page}&searchterm=${searchTerm}`
  );

  return response.data;
};

export const getPokemon = async (nameOrId) => {
  const response = await api.get(`/pokemon/${nameOrId}`);

  return response.data;
};

export const getPokemonPdf = async (nameOrId, fileName = "pokemon") => {
  const response = await api.get(`/pokemon-download/${nameOrId}`, {
    responseType: "arraybuffer",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/pdf",
    },
  });

  downloadPdf(response.data, fileName);
};
