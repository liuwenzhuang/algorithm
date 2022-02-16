import { NextPermutationOfArray } from '../next-permutation-of-array'

describe('NextPermutationOfArray', () => {
  const npoa = new NextPermutationOfArray()

  it('NextPermutationOfArray.helper should work properly', () => {
    let arr = [1, 2, 3, 4]
    npoa.swap(arr, 1, 2)
    expect(arr).toEqual([1, 3, 2, 4])

    arr = [1, 2, 3, 4]
    npoa.reverse(arr, 1)
    expect(arr).toEqual([1, 4, 3, 2])
  })

  it('NextPermutationOfArray.solution should work properly', () => {
    expect(npoa.solution([1, 2, 3])).toEqual([1, 3, 2])
    expect(npoa.solution([3, 2, 1])).toEqual([1, 2, 3])
    expect(npoa.solution([1, 1, 5])).toEqual([1, 5, 1])
  })
})
