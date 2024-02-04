import { expect, test, describe } from "vitest"

import { sumNum, sumNumPositivesOnly, Pokemon, highestLevelPokemon, evolvedPokemon, findIndicesForTargetNumber } from "./Utils"

describe("Utils", () => {
  describe('Q1', () =>{
    test("should return sum of a and b", () => {
    const expected = 5
    const actual = sumNum(2,3)
    expect(expected).toEqual(actual)
    })
  })

  describe('Q2', () => {
    test("should return sum of and b", () => {
      expect(sumNumPositivesOnly(2,3)).toEqual(5)
    })
 
    test('should return null when the sum of a and b is negative', () => {
      expect(sumNumPositivesOnly(2, -5)).toBeNull()
    })

    test('should return 0 when the sum of a and b is "0"', () => {
      expect(sumNumPositivesOnly(2,-2)).toEqual(0)
    })
  })

  describe('Q3', () => {
    test('should return null if the pokemon array is empty', () => {
      const poke = highestLevelPokemon([])
      expect(poke).toBeNull()
    })

    test('should return the highest level pokemon name', () => {
      const pokemon: Pokemon[] = [{name: 'bob', level:1}, {name: 'steve', level: 2}, {name: 'broseph', level:4}]
      const poke = highestLevelPokemon(pokemon)

      expect(poke).toBe('broseph')
    })

    test('should return the last highest level pokemon name is there are multiple of the same level', () => {
      const pokemon: Pokemon[] = [{name: 'bob', level:1}, {name: 'steve', level: 2}, {name: 'broseph', level:4}, {name: 'jeff', level: 4}]
      const poke = highestLevelPokemon(pokemon)

      expect(poke).toBe('jeff')
    })
  })
  
  describe('Q4', () => {
    test('should return null if pokemon array is empty', () => {
      const poke = evolvedPokemon([])
      expect(poke).toBeNull()
    })

    test('should return null if no evolved pokemons in the array', () => {
      const pokemon:Pokemon[] = [{name:'bob', level:2}, {name:'steve', level:3}, {name: 'jeff', level: 4}]
      const poke = evolvedPokemon(pokemon)
      expect(poke).toBeNull()
    })

    test('should return an array with evolved pokemons', () => {
      const pokemon:Pokemon[] = [{name:'bob', level:2, evolution:'bobby'}, {name:'steve', level:3}, {name: 'jeff', level: 4, evolution:'jefferson'}, {name:'pp', level:6, evolution:'popo'}]
      const poke = evolvedPokemon(pokemon)
      const evolvedPoke:Pokemon[] = [{name:'bob', level:2, evolution:'bobby'}, {name: 'jeff', level: 4, evolution:'jefferson'}, {name:'pp', level:6, evolution:'popo'}]
      expect(poke).toStrictEqual(evolvedPoke)
    })
  })

  describe('Q5', () => {
    test('should return null if an empty array is passed', () => {
      expect(findIndicesForTargetNumber([], 9)).toBeNull()
    })

    test('should return null if no two numbers can be added to the target number', () => {
      const numbers = [1,2]
      const target = 20
      expect(findIndicesForTargetNumber(numbers, target)).toBeNull()
    })

    test('should return the indices of the two numbers that add upto the target number', () => {
      const numbers = [1,2,3,4,5,6,7]
      const target = 9
      expect(findIndicesForTargetNumber(numbers, target)).toStrictEqual('The indices are 1 and 6')
    })
    
  })
})