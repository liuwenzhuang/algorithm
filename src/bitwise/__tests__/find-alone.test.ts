import { findAlone } from '../find-alone'

describe('xor', () => {
  it('xor twice should restore origin', () => {
    const origin = 0x1
    const xorRight = 0x0
    const expected = origin ^ xorRight ^ xorRight
    expect(expected).toBe(origin)
  })

  it('findAlone should find the only alone num', () => {
    expect(findAlone([4, 4, 1, 2, 2])).toBe(1)
  })
})
