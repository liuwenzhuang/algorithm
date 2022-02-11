import { GenerateParenthesisPairs } from '../generate-parenthesis-pairs'

describe('GenerateParenthesisPairs', () => {
  let gpp = new GenerateParenthesisPairs()
  it('GenerateParenthesisPairs should work properly', () => {
    expect(gpp.solution(1)).toEqual(['()'])
    expect(gpp.solution(2)).toEqual(['(())', '()()'])
    expect(gpp.solution(3)).toEqual([
      '((()))',
      '(())()',
      '(()())',
      '()()()',
      '()(())',
    ])
  })
})
