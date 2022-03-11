import { PermutationSequence } from '../0060-permutation-sequence'

describe('PermutationSequence', () => {
  const permutationSequence = new PermutationSequence()
  it('PermutationSequence should work properly', () => {
    expect(permutationSequence.firstSolution(3, 1)).toBe('123')
    expect(permutationSequence.firstSolution(3, 2)).toBe('132')
    expect(permutationSequence.firstSolution(4, 9)).toBe('2314')
  })
})
