import {
  bruteForceLongestCommonSubsequence,
  checkSubSeqIn,
  dpFindLCSLength,
  getAllSubSequences,
  getAllSubSequencesByBit,
  recursiveFindLCSLength,
} from '../longest-common-subsequence'

describe('LCS', () => {
  it('checkSubSeqIn', () => {
    let result = checkSubSeqIn('ADH', 'ABCDGH')
    expect(result).toBe(true)

    result = checkSubSeqIn('AHD', 'ABCDGH')
    expect(result).toBe(false)
  })

  it('getAllSubSequences', () => {
    let result = getAllSubSequences('ABC')
    expect(result).toIncludeAllMembers(['A', 'AB', 'ABC', 'AC', 'B', 'BC', 'C'])

    result = getAllSubSequences('A')
    expect(result).toIncludeAllMembers(['A'])

    result = getAllSubSequences('')
    expect(result).toIncludeAllMembers([])
  })

  it('getAllSubSequencesByBit', () => {
    let result = getAllSubSequencesByBit('ABC')
    expect(result).toIncludeAllMembers(['A', 'AB', 'ABC', 'AC', 'B', 'BC', 'C'])

    result = getAllSubSequencesByBit('A')
    expect(result).toIncludeAllMembers(['A'])

    result = getAllSubSequencesByBit('')
    expect(result).toIncludeAllMembers([])
  })

  it('bruteForceLongestCommonSubsequence should work', () => {
    let result = bruteForceLongestCommonSubsequence('ABCDGH', 'AEDFHR')
    expect(result).toBe('ADH')

    result = bruteForceLongestCommonSubsequence('DAGGTABC', 'FDTCB')
    expect(result).toBe('DTC')
  })

  it('recursiveFindLCSLength', () => {
    let result = recursiveFindLCSLength('DATGB', 'CAFJB')
    expect(result).toBe(2)

    result = recursiveFindLCSLength('ABCDGH', 'AEDFG')
    expect(result).toBe(3)
  })

  it('dpFindLCSLength', () => {
    let result = dpFindLCSLength('DATGB', 'CAFJB')
    expect(result).toBe(2)

    result = dpFindLCSLength('ABCDGH', 'AEDFG')
    expect(result).toBe(3)
  })
})
