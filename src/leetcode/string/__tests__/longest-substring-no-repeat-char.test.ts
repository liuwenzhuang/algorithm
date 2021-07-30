import { findLonestSubstringWithoutRepeatChar } from '../longest-substring-no-repeat-char'

describe('findLonestSubstringWithoutRepeatChar', () => {
  it('findLonestSubstringWithoutRepeatChar should return longest substr', () => {
    let result = findLonestSubstringWithoutRepeatChar('abcabcbb')
    expect(result).toBe('abc')

    result = findLonestSubstringWithoutRepeatChar('bbbbb')
    expect(result).toBe('b')

    result = findLonestSubstringWithoutRepeatChar('pwwkew')
    expect(result).toBe('wke')

    result = findLonestSubstringWithoutRepeatChar('')
    expect(result).toBe('')
  })
})
