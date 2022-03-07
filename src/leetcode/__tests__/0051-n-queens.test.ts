import { NQueens } from '../0051-n-queens'

describe('NQueens', () => {
  const nQueens = new NQueens()
  it('NQueens should work properly', () => {
    expect(nQueens.firstSolution(4)).toEqual([
      ['.Q..', '...Q', 'Q...', '..Q.'],
      ['..Q.', 'Q...', '...Q', '.Q..'],
    ])
  })
})
