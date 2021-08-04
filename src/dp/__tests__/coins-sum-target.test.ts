import { getTotalWaySumToTarget } from '../coins-sum-target'

describe('getTotalWaySumToTarget', () => {
  it('getTotalWaySumToTarget work for correctly', () => {
    const state2 = getTotalWaySumToTarget(2, [1, 5])
    expect(state2).toBe(1)

    const state6 = getTotalWaySumToTarget(6, [1, 5])
    expect(state6).toBe(3)

    const state7 = getTotalWaySumToTarget(7, [1, 5])
    // state(7 - 1) + state(7 - 5)
    expect(state7).toBe(state6 + state2)
  })
})
