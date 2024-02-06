import { Pokemon } from "../../types/pokemon";

// 1. Implement a function which takes a list of pokemon and starting pokemon
// and returns the name of the starting pokemon's maximum evolution in the collection
export function findMaxEvolution(pokemonId: number, pokemon: Pokemon[]): string | null {
  if(pokemon.length === 0 ){
    return null
  }
  const startingPokemon = pokemon.find((pokemon) => pokemon.id === pokemonId)
  if(startingPokemon === undefined){
    return null
  }
  if(startingPokemon.evolution === undefined){
    return startingPokemon!.name
  }
  return (findMaxEvolution(startingPokemon.evolution!, pokemon))
}