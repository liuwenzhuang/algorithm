import { JumpGame2 } from '../0045-jump-game-2'

describe('JumpGame2', () => {
  const jumpGame2 = new JumpGame2()
  it('JumpGame2 should work properly', () => {
    expect(jumpGame2.backJumpSolution([2, 3, 1, 3, 4, 2, 1])).toBe(3)
    expect(jumpGame2.backJumpSolution([2, 3, 1, 1, 4])).toBe(2)
  })

  it('JumpGame2 should work properly', () => {
    expect(jumpGame2.bfsSolution([2, 3, 1, 3, 4, 2, 1])).toBe(3)
    expect(jumpGame2.bfsSolution([2, 3, 1, 1, 4])).toBe(2)
  })
})
