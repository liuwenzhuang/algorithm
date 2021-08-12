import { checkPalindromeNumber } from '../check-palindrome-number'

describe('checkPalindromeNumber', () => {
  it('checkPalindromeNumber', () => {
    expect(checkPalindromeNumber(-121)).toBe(false)
    expect(checkPalindromeNumber(0)).toBe(true)
    expect(checkPalindromeNumber(121)).toBe(true)
    expect(checkPalindromeNumber(123)).toBe(false)
  })
})
