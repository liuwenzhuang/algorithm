import { WildcardMatching } from '../0044-wildcard-matching'

describe('WildcardMatching', () => {
  const wildcardMatching = new WildcardMatching()
  it('WildcardMatching.firstSolution should work properly', () => {
    expect(wildcardMatching.firstSolution('aa', 'a')).toBe(false)
    expect(wildcardMatching.firstSolution('aa', '*')).toBe(true)
  })
  it('WildcardMatching.dpSolution should work properly', () => {
    expect(wildcardMatching.dpSolution('aa', 'a')).toBe(false)
    expect(wildcardMatching.dpSolution('aa', '*')).toBe(true)
    expect(wildcardMatching.dpSolution('abcd', 'ab*')).toBe(true)
  })
})
