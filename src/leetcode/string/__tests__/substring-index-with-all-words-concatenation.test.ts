import { SubstringIndexWithAllWordsConcatenation } from '../substring-index-with-all-words-concatenation'

describe('SubstringIndexWithAllWordsConcatenation', () => {
  const siwawc = new SubstringIndexWithAllWordsConcatenation()

  it('SubstringIndexWithAllWordsConcatenation.firstSolution should work properly', () => {
    expect(siwawc.firstSolution('barfoothefoobarman', ['foo', 'bar'])).toEqual([
      0,
      9,
    ])

    expect(
      siwawc.firstSolution('barfoofoobarthefoobarman', ['bar', 'foo', 'the'])
    ).toEqual([6, 9, 12])

    expect(
      siwawc.firstSolution('wordgoodgoodgoodbestword', [
        'word',
        'good',
        'best',
        'word',
      ])
    ).toEqual([])
  })

  it('SubstringIndexWithAllWordsConcatenation.checkIndexSolutionForSameLengthWords should work properly', () => {
    expect(
      siwawc.checkIndexSolutionForSameLengthWords('barfoothefoobarman', ['foo', 'bar'])
    ).toEqual([0, 9])

    expect(
      siwawc.checkIndexSolutionForSameLengthWords('barfoofoobarthefoobarman', [
        'bar',
        'foo',
        'the',
      ])
    ).toEqual([6, 9, 12])

    expect(
      siwawc.checkIndexSolutionForSameLengthWords('wordgoodgoodgoodbestword', [
        'word',
        'good',
        'best',
        'word',
      ])
    ).toEqual([])
  })
})
