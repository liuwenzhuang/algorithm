import { ParenthesisMatch } from '../parenthesis-match'

describe('ParenthesisMatch', () => {
  it('just ()', () => {
    const matcher = new ParenthesisMatch('()')
    expect(matcher.match(0)).toBe(1)
  })

  it('nested parenthesis', () => {
    const matcher = new ParenthesisMatch('kd(kk ( kdkj ) kdjfj)abc')
    expect(matcher.match(2)).toBe(20)
    expect(matcher.match(6)).toBe(13)
    expect(matcher.match(13)).toBe(6)
    expect(matcher.match(20)).toBe(2)
  })

  it('empty string should return null', () => {
    const matcher = new ParenthesisMatch('')
    expect(matcher.match(0)).toBeNull()
  })

  it('wrong pos should return null', () => {
    const matcher = new ParenthesisMatch('akdkkd(kdkd)kkjj')
    expect(matcher.match(2)).toBeNull()
  })

  it('no match should return null', () => {
    const matcher = new ParenthesisMatch('(kd(kdjfjj)')
    expect(matcher.match(0)).toBeNull()
  })
})
