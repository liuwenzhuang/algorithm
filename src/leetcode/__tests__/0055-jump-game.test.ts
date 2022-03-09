import { JumpGame } from '../0055-jump-game'

describe('JumpGame', () => {
  const jumpGame = new JumpGame()
  it('JumpGame should work properly', () => {
    expect(jumpGame.firstSolution([2, 3, 1, 1, 4])).toBe(true)
    expect(jumpGame.firstSolution([3, 2, 1, 0, 4])).toBe(false)
    expect(jumpGame.firstSolution([1])).toBe(true)
    expect(jumpGame.firstSolution([0])).toBe(true)
  })
})
