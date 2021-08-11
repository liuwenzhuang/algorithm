import { zigzagConversion } from '../zigzag-conversion'

describe('zigzagConversion', () => {
  it('zigzagConversion', () => {
    // 边界：只有1行
    expect(zigzagConversion('PAYPALISHIRING', 1)).toBe('PAYPALISHIRING')
    // 边界：1列放不满
    expect(zigzagConversion('PAYPALISHIRING', 20)).toBe('PAYPALISHIRING')

    expect(zigzagConversion('PAYPALISHIRING', 3)).toBe('PAHNAPLSIIGYIR')
    expect(zigzagConversion('PAYPALISHIRING', 4)).toBe('PINALSIGYAHRPI')
    expect(zigzagConversion('PAYPALISHIRING', 5)).toBe('PHASIYIRPLIGAN')
  })
})
