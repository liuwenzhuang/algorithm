import { CountAndSay } from '../0038-count-and-say'

describe('CountAndSay', () => {
  const countAndSay = new CountAndSay()
  it('CountAndSay should work properly', () => {
    expect(countAndSay.firstSolution(1)).toBe('1')
    expect(countAndSay.firstSolution(4)).toBe('1211')
    expect(countAndSay.firstSolution(10)).toBe('13211311123113112211')
  })
})
