import { useFetch, useEffect } from "../hooks/useFetch";

export default function WordsArray() {
  const pokemonLimit = 151;
  const pokeApiUrl = `https://pokeapi.co/api/v2/pokemon/?limit=${pokemonLimit}`;
  let myPokemons = [];

  let fetchedWords;
  useEffect(() => {
    fetchedWords = useFetch(pokeApiUrl);
  }, [pokeApiUrl]);
  if (!fetchedWords.loading) {
    const pokemonData = fetchedWords.data.results;
    pokemonData.map(item => myPokemons.push(item.name));

    // remove difficult words with unusual signs
    myPokemons = myPokemons.filter(e => e !== "nidoran-m" && e !== "nidoran-f");
    return myPokemons;
  } else {
    return "loading";
  }
}
