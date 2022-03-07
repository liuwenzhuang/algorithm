import { GroupAnagrams } from '../0049-group-anagrams'

describe('GroupAnagrams', () => {
  const groupAnagrams = new GroupAnagrams()
  it('GroupAnagrams helper function should work properly', () => {
    expect(groupAnagrams.sortStr('tea')).toBe('aet')
    expect(groupAnagrams.checkAnagram('tea', 'eat')).toBe(true)
  })

  it('GroupAnagrams.firstSolution should work properly', () => {
    expect(
      groupAnagrams.firstSolution(['eat', 'tea', 'tan', 'ate', 'nat', 'bat'])
    ).toEqual([['eat', 'tea', 'ate'], ['tan', 'nat'], ['bat']])
    expect(groupAnagrams.firstSolution([''])).toEqual([['']])
    expect(groupAnagrams.firstSolution(['a'])).toEqual([['a']])
  })

  it('GroupAnagrams.optimizeFirstSolution should work properly', () => {
    expect(
      groupAnagrams.optimizeFirstSolution([
        'eat',
        'tea',
        'tan',
        'ate',
        'nat',
        'bat',
      ])
    ).toEqual([['eat', 'tea', 'ate'], ['tan', 'nat'], ['bat']])
    expect(groupAnagrams.optimizeFirstSolution([''])).toEqual([['']])
    expect(groupAnagrams.optimizeFirstSolution(['a'])).toEqual([['a']])
  })
})
