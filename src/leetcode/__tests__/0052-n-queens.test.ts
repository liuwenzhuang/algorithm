import { NQueens } from '../0052-n-queens'

describe('NQueens', () => {
  const nQueens = new NQueens()
  it('NQueens should work properly', () => {
    expect(nQueens.backtrackSolution(4)).toBe(2)
  })
})
