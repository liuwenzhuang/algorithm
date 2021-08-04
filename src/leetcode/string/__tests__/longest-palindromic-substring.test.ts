import {
  checkIsPanlidromic,
  dpFindLongestPalindromicSubstring,
  findLongestPalindromicSubstring,
} from '../longest-palindromic-substring'

describe('findLongestPalindromicSubstring', () => {
  it('checkIsPanlidromic should check str is panlidromic', () => {
    expect(checkIsPanlidromic('')).toBe(true)
    expect(checkIsPanlidromic('a')).toBe(true)
    expect(checkIsPanlidromic('aa')).toBe(true)
    expect(checkIsPanlidromic('aba')).toBe(true)
    expect(checkIsPanlidromic('abba')).toBe(true)
    expect(checkIsPanlidromic('abcba')).toBe(true)
    expect(checkIsPanlidromic('ab')).toBe(false)
  })
  it('findLongestPalindromicSubstring should work correctly', () => {
    let result = findLongestPalindromicSubstring('babad')
    expect(result).toBe('bab')

    result = findLongestPalindromicSubstring('cbbd')
    expect(result).toBe('bb')

    result = findLongestPalindromicSubstring('a')
    expect(result).toBe('a')

    result = findLongestPalindromicSubstring('ac')
    expect(result).toBe('a')
  })
  it('dpFindLongestPalindromicSubstring should work correctly', () => {
    let result = dpFindLongestPalindromicSubstring('babad')
    expect(result).toBe('bab')

    result = dpFindLongestPalindromicSubstring('cbbd')
    expect(result).toBe('bb')

    result = dpFindLongestPalindromicSubstring('a')
    expect(result).toBe('a')

    result = dpFindLongestPalindromicSubstring('ac')
    expect(result).toBe('a')
  })
})
