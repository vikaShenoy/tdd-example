import { expect, test, describe } from "vitest"
import { findMaxEvolution } from "./recursion"
import { Pokemon } from "../../types/pokemon"

describe("Recursion functions, find pokemon's final evolution", () => {
  test("should return null when an empty list is passed", () => {
    expect(findMaxEvolution(0, [])).toBe(null)
  })

  test("should return the inital pokemon name if it doesnt evolve", () => {
    const pokemons: Pokemon[] = [{id:1, name:'pika', level: 12}, {id:3, name:'pikac', level: 125}, {id:13, name:'pikachu', level: 2}]
    expect(findMaxEvolution(1, pokemons)).toBe('pika')
  })

  test("should return the evolved pokemon name if it evolves", () => {
    const pokemons: Pokemon[] = [{id:1, name:'pika', level: 12, evolution: 13}, {id:3, name:'pikac', level: 125}, {id:13, name:'pikachu', level: 2}]
    expect(findMaxEvolution(1, pokemons)).toBe('pikachu')
  })

  test("should return the last evolved pokemon name if it evolves", () => {
    const pokemons: Pokemon[] = [{id:1, name:'pika', level: 12, evolution: 3}, {id:3, name:'pikac', level: 125, evolution:14}, {id:13, name:'pikachu', level: 2}, {id:14, name:'pikachuchu', level: 2}]
    expect(findMaxEvolution(1, pokemons)).toBe('pikachuchu')
  })

  test("should return null if the id provided is not in the list", () => {
    const pokemons: Pokemon[] = [{id:1, name:'pika', level: 12, evolution: 3}, {id:3, name:'pikac', level: 125, evolution:14}, {id:13, name:'pikachu', level: 2}, {id:14, name:'pikachuchu', level: 2}]
    expect(findMaxEvolution(134, pokemons)).toBe(null)
  })
})