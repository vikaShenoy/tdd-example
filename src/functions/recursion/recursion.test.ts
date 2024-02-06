import { expect, test, describe } from "vitest"
import { findMaxEvolution } from "./recursion"

describe("Recursion functions", () => {
  test("Can find a pokemon's final evolution", () => {
    expect(findMaxEvolution(0, [])).toBe(null)
  })
})