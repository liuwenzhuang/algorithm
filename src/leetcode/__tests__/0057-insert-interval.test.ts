import { InsertInterval } from '../0057-insert-interval'

describe('InsertInterval', () => {
  const insertInterval = new InsertInterval()
  it('InsertInterval should work properly', () => {
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
})
