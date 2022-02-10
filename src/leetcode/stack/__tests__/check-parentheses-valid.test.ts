import { CheckParenthesesValid } from '../check-parentheses-valid'

describe('CheckParenthesesValid', () => {
  it('CheckParenthesesValid should work properly', () => {
    let cpv = new CheckParenthesesValid()
    expect(cpv.solution('()')).toBe(true)
    expect(cpv.solution('()[]{}')).toBe(true)
    expect(cpv.solution('{({})[()]{[()]}}')).toBe(true)
    expect(cpv.solution('(]')).toBe(false)
  })
})
