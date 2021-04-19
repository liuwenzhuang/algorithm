import { ParenthesisMatch } from '../parenthesis-match'

describe('ParenthesisMatch', () => {
  it('just ()', () => {
    const matcher = new ParenthesisMatch('()')
    expect(matcher.findMatchIndex(0)).toBe(1)
  })

  it('nested parenthesis', () => {
    const matcher = new ParenthesisMatch('kd(kk ( kdkj ) kdjfj)abc')
    expect(matcher.findMatchIndex(2)).toBe(20)
    expect(matcher.findMatchIndex(6)).toBe(13)
    expect(matcher.findMatchIndex(13)).toBe(6)
    expect(matcher.findMatchIndex(20)).toBe(2)
  })

  it('empty string should return null', () => {
    const matcher = new ParenthesisMatch('')
    expect(matcher.findMatchIndex(0)).toBeNull()
  })

  it('wrong pos should return null', () => {
    const matcher = new ParenthesisMatch('akdkkd(kdkd)kkjj')
    expect(matcher.findMatchIndex(2)).toBeNull()
  })

  it('no match should return null', () => {
    const matcher = new ParenthesisMatch('(kd[kdjfjj]')
    expect(matcher.findMatchIndex(3)).toBe(10)
    expect(matcher.findMatchIndex(0)).toBeNull()
  })
})
