import { InsertInterval } from '../0057-insert-interval'

describe('InsertInterval', () => {
  const insertInterval = new InsertInterval()
  it('InsertInterval should work properly', () => {
    // 头部
    expect(
      insertInterval.firstSolution(
        [
          [2, 3],
          [6, 9],
        ],
        [0, 1]
      )
    ).toEqual([
      [0, 1],
      [2, 3],
      [6, 9],
    ])

    // 尾部
    expect(
      insertInterval.firstSolution(
        [
          [2, 3],
          [6, 9],
        ],
        [10, 11]
      )
    ).toEqual([
      [2, 3],
      [6, 9],
      [10, 11],
    ])

    // 头部合并
    expect(
      insertInterval.firstSolution(
        [
          [1, 3],
          [6, 9],
        ],
        [2, 5]
      )
    ).toEqual([
      [1, 5],
      [6, 9],
    ])

    expect(
      insertInterval.firstSolution(
        [
          [1, 2],
          [3, 5],
          [6, 7],
          [8, 10],
          [12, 16],
        ],
        [4, 8]
      )
    ).toEqual([
      [1, 2],
      [3, 10],
      [12, 16],
    ])
  })

  it('InsertInterval.optimizeSolution should work properly', () => {
    // 头部
    expect(
      insertInterval.optimizeSolution(
        [
          [2, 3],
          [6, 9],
        ],
        [0, 1]
      )
    ).toEqual([
      [0, 1],
      [2, 3],
      [6, 9],
    ])

    // 尾部
    expect(
      insertInterval.optimizeSolution(
        [
          [2, 3],
          [6, 9],
        ],
        [10, 11]
      )
    ).toEqual([
      [2, 3],
      [6, 9],
      [10, 11],
    ])

    // 头部合并
    expect(
      insertInterval.optimizeSolution(
        [
          [1, 3],
          [6, 9],
        ],
        [2, 5]
      )
    ).toEqual([
      [1, 5],
      [6, 9],
    ])

    // 跨多区合并
    expect(
      insertInterval.optimizeSolution(
        [
          [1, 2],
          [3, 5],
          [6, 7],
          [8, 10],
          [12, 16],
        ],
        [4, 8]
      )
    ).toEqual([
      [1, 2],
      [3, 10],
      [12, 16],
    ])
  })
})
