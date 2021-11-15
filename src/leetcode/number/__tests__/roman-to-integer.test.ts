import { linearRomanToInteger, romanToInteger } from '../roman-to-integer'

describe('romanToInteger', () => {
  it('romanToInteger should work properly', () => {
    expect(romanToInteger('III')).toBe(3)
    expect(romanToInteger('IV')).toBe(4)
    expect(romanToInteger('IX')).toBe(9)
    expect(romanToInteger('XLIX')).toBe(49)
    expect(romanToInteger('LVIII')).toBe(58)
    expect(romanToInteger('CXLIII')).toBe(143)
    expect(romanToInteger('CXCIX')).toBe(199)
    expect(romanToInteger('MCMXCIV')).toBe(1994)
    expect(romanToInteger('MMM')).toBe(3000)
    expect(romanToInteger('MMMCMXCIX')).toBe(3999)
  })

  it('linearRomanToInteger should work properly', () => {
    expect(linearRomanToInteger('III')).toBe(3)
    expect(linearRomanToInteger('IV')).toBe(4)
    expect(linearRomanToInteger('IX')).toBe(9)
    expect(linearRomanToInteger('XLIX')).toBe(49)
    expect(linearRomanToInteger('LVIII')).toBe(58)
    expect(linearRomanToInteger('CXLIII')).toBe(143)
    expect(linearRomanToInteger('CXCIX')).toBe(199)
    expect(linearRomanToInteger('MCMXCIV')).toBe(1994)
    expect(linearRomanToInteger('MMM')).toBe(3000)
    expect(linearRomanToInteger('MMMCMXCIX')).toBe(3999)
  })
})
