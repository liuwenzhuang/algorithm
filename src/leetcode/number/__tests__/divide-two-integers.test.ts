import { DivideTwoIntegers } from '../divide-two-integers'

describe('DivideTwoIntegers', () => {
  const dti = new DivideTwoIntegers()

  it('DivideTwoIntegers should work properly', () => {
    expect(dti.firstSolution(3, 0)).toBeNull()
    expect(dti.firstSolution(3, 2)).toBe(1)
    expect(dti.firstSolution(-7, -2)).toBe(3)
    expect(dti.firstSolution(-7, 2)).toBe(-3)
  })
})
