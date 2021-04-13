import { timeWindowReg } from '../regexp'

describe('test timeWindowReg', () => {
  it('should work in [00:00-24:00] time ranges', () => {
    expect(timeWindowReg.test('23:00-08:00,12:00-24:00')).toBe(true)
    expect(timeWindowReg.test('22:00-24:01')).toBe(false)
  })

  it('should only allow two length hour and minute', () => {
    expect(timeWindowReg.test('2:00-24:00')).toBe(false)
    expect(timeWindowReg.test('02:00-23:1')).toBe(false)
  })
})
