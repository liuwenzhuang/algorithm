import { recursiveFindLISLength } from '../longest-increasing-subsequence'

describe('LIS', () => {
  it('recursiveFindLISLength', () => {
    let result = recursiveFindLISLength([])
    expect(result).toBe(0)

    result = recursiveFindLISLength([2])
    expect(result).toBe(1)

    result = recursiveFindLISLength([5, 2, 3, 10, 8, 39, 28, 41])
    expect(result).toBe(5)
  })
})
