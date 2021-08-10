import {
  recursiveFindLISLength,
  dpFindLISLength,
  bruteForceFindLIS,
  dpFindLIS,
} from '../longest-increasing-subsequence'

describe('LIS', () => {
  it('recursiveFindLISLength', () => {
    let result = recursiveFindLISLength([])
    expect(result).toBe(0)

    result = recursiveFindLISLength([2])
    expect(result).toBe(1)

    result = recursiveFindLISLength([5, 2, 3, 10, 8, 39, 4])
    expect(result).toBe(4)

    result = recursiveFindLISLength([5, 2, 3, 10, 8, 39, 28, 41])
    expect(result).toBe(5)
  })

  it('dpFindLISLength', () => {
    let result = dpFindLISLength([])
    expect(result).toBe(0)

    result = dpFindLISLength([2])
    expect(result).toBe(1)

    result = dpFindLISLength([5, 2, 3, 10, 8, 39, 4])
    expect(result).toBe(4)

    result = dpFindLISLength([5, 2, 3, 10, 8, 39, 28, 41])
    expect(result).toBe(5)
  })

  it('bruteForceFindLIS', () => {
    let result = bruteForceFindLIS([])
    expect(result).toEqual([])

    result = bruteForceFindLIS([2])
    expect(result).toEqual([2])

    result = bruteForceFindLIS([5, 2, 3, 10, 8, 39, 4])
    expect(result).toEqual([2, 3, 10, 39])

    result = bruteForceFindLIS([5, 2, 3, 10, 8, 39, 28, 41])
    expect(result).toEqual([2, 3, 10, 39, 41])
  })

  it('dpFindLIS', () => {
    let result = dpFindLIS([])
    expect(result).toEqual([])

    result = dpFindLIS([2])
    expect(result).toEqual([2])

    result = dpFindLIS([5, 2, 3, 10, 8, 39, 4])
    expect(result).toEqual([2, 3, 10, 39])

    result = dpFindLIS([5, 2, 3, 10, 8, 39, 28, 41])
    expect(result).toEqual([2, 3, 10, 39, 41])
  })
})
