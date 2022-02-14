import { GenerateParenthesisPairs } from '../generate-parenthesis-pairs'

describe('GenerateParenthesisPairs', () => {
  let gpp = new GenerateParenthesisPairs()

  it('GenerateParenthesisPairs.firstSolution should work properly', () => {
    expect(gpp.firstSolution(1)).toEqual(['()'])
    expect(gpp.firstSolution(2)).toEqual(['(())', '()()'])
    expect(gpp.firstSolution(3)).toEqual([
      '((()))',
      '(())()',
      '(()())',
      '()()()',
      '()(())',
    ])
  })

  it('GenerateParenthesisPairs.solution should work properly', () => {
    expect(gpp.solution(1)).toEqual(['()'])
    expect(gpp.solution(2)).toEqual(['(())', '()()'])
    expect(gpp.solution(3)).toEqual([
      '((()))',
      '(()())',
      '(())()',
      '()(())',
      '()()()',
    ])
  })
})
