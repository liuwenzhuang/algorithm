import { StrStrImplementation } from '../strstr-implementation'

describe('StrStrImplementation', () => {
  const ssi = new StrStrImplementation()

  it('StrStrImplementation should work properly', () => {
    expect(ssi.firstSolution('abc', '')).toBe(0)
    expect(ssi.firstSolution('abc', 'a')).toBe(0)
    expect(ssi.firstSolution('abcdefg', 'xx')).toBe(-1)
    expect(ssi.firstSolution('abcdefg', 'cdefgh')).toBe(-1)
    expect(ssi.firstSolution('abc', 'b')).toBe(1)
  })
})
