import { stringToInteger } from '../string-to-integer'

describe('stringToInteger', () => {
  it('stringToInteger', () => {
    expect(stringToInteger('42')).toBe(42)
    expect(stringToInteger('   42')).toBe(42)
    expect(stringToInteger('   -42')).toBe(-42)
    expect(stringToInteger('4193 with words')).toBe(4193)
    expect(stringToInteger('  4193+ with words')).toBe(4193)
    expect(stringToInteger('-91283472332')).toBe(-2147483648)
  })
})
