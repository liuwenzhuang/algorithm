import {
  bruteForceLongestCommonSubsequence,
  checkSubSeqIn,
  getAllSubSequences,
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

  it('bruteForceLongestCommonSubsequence should work', () => {
    let result = bruteForceLongestCommonSubsequence('ABCDGH', 'AEDFHR')
    expect(result).toBe('ADH')

    result = bruteForceLongestCommonSubsequence('DAGGTABC', 'FDTCB')
    expect(result).toBe('DTC')
  })
})
