import { MaxsumSubarray } from '../0053-maxsum-subarray'

describe('MaxsumSubarray', () => {
  const maxsumSubarray = new MaxsumSubarray()
  it('MaxsumSubarray.dpSolution should work properly', () => {
    expect(maxsumSubarray.firstSolution([-2, 1, -3, 4, -1, 2, 1, -5, 4])).toBe(
      6
    )
    expect(maxsumSubarray.firstSolution([1])).toBe(1)
    expect(maxsumSubarray.firstSolution([5, 4, -1, 7, 8])).toBe(23)
  })

  it('MaxsumSubarray.noDpSolution should work properly', () => {
    expect(maxsumSubarray.noDpSolution([-2, 1, -3, 4, -1, 2, 1, -5, 4])).toBe(6)
    expect(maxsumSubarray.noDpSolution([1])).toBe(1)
    expect(maxsumSubarray.noDpSolution([5, 4, -1, 7, 8])).toBe(23)
  })
})
