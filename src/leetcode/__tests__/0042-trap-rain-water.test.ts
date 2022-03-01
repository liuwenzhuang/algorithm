import { TrapRainWater } from '../0042-trap-rain-water'

describe('TrapRainWater', () => {
  const trapRainWater = new TrapRainWater()
  it('TrapRainWater.bruteForceSolution should work properly', () => {
    expect(
      trapRainWater.bruteForceSolution([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])
    ).toBe(6)
    expect(trapRainWater.bruteForceSolution([4, 2, 0, 3, 2, 5])).toBe(9)
  })

  it('TrapRainWater.dpSolution should work properly', () => {
    expect(trapRainWater.dpSolution([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])).toBe(
      6
    )
    expect(trapRainWater.dpSolution([4, 2, 0, 3, 2, 5])).toBe(9)
  })

  it('TrapRainWater.twoPointerSolution should work properly', () => {
    expect(
      trapRainWater.twoPointerSolution([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])
    ).toBe(6)
    expect(trapRainWater.twoPointerSolution([4, 2, 0, 3, 2, 5])).toBe(9)
  })

  it('TrapRainWater.stackSolution should work properly', () => {
    expect(
      trapRainWater.stackSolution([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])
    ).toBe(6)
    expect(trapRainWater.stackSolution([4, 2, 0, 3, 2, 5])).toBe(9)
  })
})
