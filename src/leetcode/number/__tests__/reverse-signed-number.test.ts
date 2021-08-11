import { reverseSignedNumber } from '../reverse-signed-number'

describe('reverseSignedNumber', () => {
  it('reverseSignedNumber', () => {
    expect(reverseSignedNumber(120)).toBe(21)
    expect(reverseSignedNumber(123)).toBe(321)
    expect(reverseSignedNumber(-123)).toBe(-321)
    expect(reverseSignedNumber(0)).toBe(0)
    expect(reverseSignedNumber(2147483648)).toBe(0)
  })
})
