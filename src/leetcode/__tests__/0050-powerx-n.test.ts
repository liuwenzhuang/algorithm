import { PowerxN } from '../0050-powerx-n'

describe('PowerxN', () => {
  const powerxN = new PowerxN()
  it('PowerxN.firstSolution should work properly', () => {
    expect(powerxN.firstSolution(2, 10)).toBe(1024)
    expect(powerxN.firstSolution(2.1, 3).toFixed(3)).toBe('9.261')
    expect(powerxN.firstSolution(2, -2).toFixed(2)).toBe('0.25')
  })

  it('PowerxN.recursiveSolution should work properly', () => {
    expect(powerxN.recursiveSolution(2, 10)).toBe(1024)
    expect(powerxN.recursiveSolution(2.1, 3).toFixed(3)).toBe('9.261')
    expect(powerxN.recursiveSolution(2, -2).toFixed(2)).toBe('0.25')
  })
})
