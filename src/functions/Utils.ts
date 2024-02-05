// 1. Write a function which sums two numbers
function sumNum(a: number, b: number): number {
  return a+b
}

// 2. Write a function which sums two numbers, but returns null if the answer is negative

function sumNumPositivesOnly(a:number, b:number):number | null {
  return a+b >= 0 ? a+b : null 
}

// 3. Write a function which takes an array of pokemon and returns the name of the pokemon with the highest level
// Interface for Pokemon provided below:

export interface Pokemon {
  name: string
  level: number
  evolution?: string
}

function highestLevelPokemon(pokemon:Pokemon[]):string | null {
  if(pokemon.length === 0) {
    return null
  }
  let currentMaxLevel = 0
  let pokeName = ''
  pokemon.forEach((poke: Pokemon) => {
    if(poke.level >= currentMaxLevel) {
      currentMaxLevel = poke.level
      pokeName = poke.name
    }
  })
  return pokeName
}

// 4. Write a function which takes an array of pokemon and returns an array of pokemon which have an evolution

function evolvedPokemon( pokemon: Pokemon[] ): Pokemon[] | null {
  if(pokemon.length === 0) {return null}
  let evolvedPoke:Pokemon[] = []
  pokemon.forEach((poke:Pokemon) => {
    if('evolution' in poke) {
      evolvedPoke.push(poke)
    }
  })
  if(evolvedPoke.length === 0){
    return null
  }
  return evolvedPoke
}

// 5. Given an array of integers and a target number, return indices of the two numbers such that they add up to target

function findIndicesForTargetNumber( nums: number[], targetNumber: number ):string | null {
  if(nums.length === 0){
    return null
  }
  for (let i = 0; i <= nums.length; i++){
    for(let j = 0; j <= nums.length; j++) {
      if(nums[i]+ nums[j] === targetNumber && i !== j){
        return (`The numbers in indices ${i} and ${j} add up to ${targetNumber}.`)
      }
      if(nums[i]+ nums[j] === targetNumber && i === j){
        return (`The numbers in the same indices ${i} add up to ${targetNumber}.`)
      }
    }
  }
  return ('None of the numbers in the array add up to the target number.')
}

export { sumNum, sumNumPositivesOnly, highestLevelPokemon, evolvedPokemon, findIndicesForTargetNumber}
