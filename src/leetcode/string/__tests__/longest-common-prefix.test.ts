import { longestCommonPrefix } from '../longest-common-prefix'

describe('longestCommonPrefix', () => {
  it('longestCommonPrefix should balala', () => {
    expect(longestCommonPrefix([])).toBe('')
    expect(longestCommonPrefix(['flower'])).toBe('flower')
    expect(longestCommonPrefix(['flower', 'flow'])).toBe('flow')
    expect(longestCommonPrefix(['flower', 'flow', 'flight'])).toBe('fl')
    expect(longestCommonPrefix(['flower', 'flow', 'fly', 'flo', 'fl'])).toBe(
      'fl'
    )
    expect(longestCommonPrefix(['dog', 'racecar', 'car'])).toBe('')
  })
})
