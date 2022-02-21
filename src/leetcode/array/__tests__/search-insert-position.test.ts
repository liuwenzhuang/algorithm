import { SearchInsertPosition } from '../search-insert-position'

describe('SearchInsertPosition', () => {
  const sip = new SearchInsertPosition()

  it('SearchInsertPosition should work properly', () => {
    expect(sip.firstSolution([5, 7], 4)).toBe(0)
    expect(sip.firstSolution([5, 7], 8)).toBe(2)
    expect(sip.firstSolution([5, 7], 6)).toBe(1)
    expect(sip.firstSolution([1, 3, 5, 6], 0)).toBe(0)
    expect(sip.firstSolution([1, 3, 5, 6], 5)).toBe(2)
    expect(sip.firstSolution([1, 3, 5, 6], 2)).toBe(1)
    expect(sip.firstSolution([1, 3, 5, 6], 7)).toBe(4)
  })
})
