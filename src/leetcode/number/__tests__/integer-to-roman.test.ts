import { integerToRoman } from '../integer-to-roman'

describe('integerToRoman', () => {
  it('integerToRoman should work properly', () => {
    expect(integerToRoman(3)).toBe('III')
    expect(integerToRoman(4)).toBe('IV')
    expect(integerToRoman(9)).toBe('IX')
    expect(integerToRoman(49)).toBe('XLIX')
    expect(integerToRoman(58)).toBe('LVIII')
    expect(integerToRoman(143)).toBe('CXLIII')
    expect(integerToRoman(199)).toBe('CXCIX')
    expect(integerToRoman(1994)).toBe('MCMXCIV')
    expect(integerToRoman(3000)).toBe('MMM')
    expect(integerToRoman(3999)).toBe('MMMCMXCIX')
  })
})
