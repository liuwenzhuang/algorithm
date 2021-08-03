import {
  checkIsPanlidromic,
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
  it('findLongestPalindromicSubstring should balala', () => {
    let result = findLongestPalindromicSubstring('babad')
    expect(result).toBe('bab')

    result = findLongestPalindromicSubstring('cbbd')
    expect(result).toBe('bb')

    result = findLongestPalindromicSubstring('a')
    expect(result).toBe('a')

    result = findLongestPalindromicSubstring('ac')
    expect(result).toBe('a')
  })
})
