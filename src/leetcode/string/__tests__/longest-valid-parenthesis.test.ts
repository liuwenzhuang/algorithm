import { LongestValidParenthesis } from '../longest-valid-parenthesis'

describe('LongestValidParenthesis', () => {
  const lvp = new LongestValidParenthesis()

  it('LongestValidParenthesis.checkValid should work properly', () => {
    expect(lvp.checkValid('(()')).toBe(false)
    expect(lvp.checkValid('())')).toBe(false)
    expect(lvp.checkValid('()')).toBe(true)
    expect(lvp.checkValid('(())')).toBe(true)
  })

  it('LongestValidParenthesis.firstSolution should work properly', () => {
    expect(lvp.firstSolution('')).toBe(0)
    expect(lvp.firstSolution('((')).toBe(0)
    expect(lvp.firstSolution('())')).toBe(2)
    expect(lvp.firstSolution('()')).toBe(2)
    expect(lvp.firstSolution('(())')).toBe(4)
    expect(lvp.firstSolution(')()())')).toBe(4)
    expect(lvp.firstSolution('())((())')).toBe(4)
  })

  it('LongestValidParenthesis.dpSolution should work properly', () => {
    expect(lvp.dpSolution('')).toBe(0)
    expect(lvp.dpSolution('((')).toBe(0)
    expect(lvp.dpSolution('())')).toBe(2)
    expect(lvp.dpSolution('()')).toBe(2)
    expect(lvp.dpSolution('(())')).toBe(4)
    expect(lvp.dpSolution(')()())')).toBe(4)
    expect(lvp.dpSolution('())((())')).toBe(4)
  })
})
