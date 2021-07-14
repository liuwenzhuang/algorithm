import { reverseCharArr, reverseWordArr } from '../reverse-word-arr'

describe('reverseCharArr', () => {
  it('reverseCharArr should work for both even and odd arr', () => {
    expect(reverseCharArr(['a'])).toEqual(['a'])
    expect(reverseCharArr(['a', 'b'])).toEqual(['b', 'a'])
    expect(reverseCharArr(['a', 'b', 'c'])).toEqual(['c', 'b', 'a'])
  })
  it('reverseCharArr should work for empty arr', () => {
    expect(reverseCharArr([])).toEqual([])
  })
  it('reverseCharArr should work for specified range', () => {
    expect(reverseCharArr(['a', 'b', 'c'], 0, 0)).toEqual(['a', 'b', 'c'])
    expect(reverseCharArr(['a', 'b', 'c'], 0, 1)).toEqual(['b', 'a', 'c'])
  })
})

describe('reverseWordArr', () => {
  it('reverseCharArr should work for both even and odd arr', () => {
    expect(
      reverseWordArr([
        'e',
        'n',
        'g',
        'l',
        'i',
        's',
        'h',
        '',
        'w',
        'o',
        'r',
        'd',
        '',
        'c',
        'h',
        'e',
        'c',
        'k',
      ])
    ).toEqual([
      'c',
      'h',
      'e',
      'c',
      'k',
      '',
      'w',
      'o',
      'r',
      'd',
      '',
      'e',
      'n',
      'g',
      'l',
      'i',
      's',
      'h',
    ])
    expect(reverseWordArr([])).toEqual([])
  })
})
