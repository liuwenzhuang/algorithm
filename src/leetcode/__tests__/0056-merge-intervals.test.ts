import { MergeIntervals } from '../0056-merge-intervals'

describe('MergeIntervals', () => {
  const mergeIntervals = new MergeIntervals()
  it('MergeIntervals.mergeOverlap should work properly', () => {
    expect(mergeIntervals.mergeOverlap([2, 3], [0, 1])).toBe(null)
    expect(mergeIntervals.mergeOverlap([0, 1], [2, 3])).toBe(null)
    expect(mergeIntervals.mergeOverlap([0, 2], [2, 3])).toEqual([0, 3])
    expect(mergeIntervals.mergeOverlap([2, 3], [0, 2])).toEqual([0, 3])
    expect(mergeIntervals.mergeOverlap([2, 5], [3, 4])).toEqual([2, 5])
    expect(mergeIntervals.mergeOverlap([8, 9], [4, 5])).toBe(null)
  })

  it('MergeIntervals.firstSolution should work properly', () => {
    expect(
      mergeIntervals.firstSolution([
        [2, 3],
        [0, 1],
      ])
    ).toEqual([
      [0, 1],
      [2, 3],
    ])

    expect(
      mergeIntervals.firstSolution([
        [1, 3],
        [2, 6],
        [8, 10],
        [15, 18],
      ])
    ).toEqual([
      [1, 6],
      [8, 10],
      [15, 18],
    ])

    expect(
      mergeIntervals.firstSolution([
        [1, 9],
        [2, 5],
        [19, 20],
        [10, 11],
        [12, 20],
        [0, 3],
        [0, 1],
        [0, 2],
      ])
    ).toEqual([
      [0, 9],
      [10, 11],
      [12, 20],
    ])
  })
})
