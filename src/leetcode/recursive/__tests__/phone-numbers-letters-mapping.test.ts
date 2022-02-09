import { PhoneNumbersLettersMapping } from '../phone-numbers-letters-mapping'

describe('PhoneNumbersLettersMapping', () => {
  let pnlm = new PhoneNumbersLettersMapping()
  it('PhoneNumbersLettersMapping.bruteForce should work properly', () => {
    expect(pnlm.bruteForce('')).toEqual([])
    expect(pnlm.bruteForce('2')).toEqual(['a', 'b', 'c'])
    expect(pnlm.bruteForce('23')).toEqual([
      'ad',
      'ae',
      'af',
      'bd',
      'be',
      'bf',
      'cd',
      'ce',
      'cf',
    ])
    expect(pnlm.bruteForce('234')).toEqual([
      'adg',
      'adh',
      'adi',
      'aeg',
      'aeh',
      'aei',
      'afg',
      'afh',
      'afi',
      'bdg',
      'bdh',
      'bdi',
      'beg',
      'beh',
      'bei',
      'bfg',
      'bfh',
      'bfi',
      'cdg',
      'cdh',
      'cdi',
      'ceg',
      'ceh',
      'cei',
      'cfg',
      'cfh',
      'cfi',
    ])
  })

  it('PhoneNumbersLettersMapping.recursive should work properly', () => {
    expect(pnlm.recurive('')).toEqual([])
    expect(pnlm.recurive('2')).toEqual(['a', 'b', 'c'])
    expect(pnlm.recurive('23')).toEqual([
      'ad',
      'ae',
      'af',
      'bd',
      'be',
      'bf',
      'cd',
      'ce',
      'cf',
    ])
    expect(pnlm.recurive('234')).toEqual([
      'adg',
      'adh',
      'adi',
      'aeg',
      'aeh',
      'aei',
      'afg',
      'afh',
      'afi',
      'bdg',
      'bdh',
      'bdi',
      'beg',
      'beh',
      'bei',
      'bfg',
      'bfh',
      'bfi',
      'cdg',
      'cdh',
      'cdi',
      'ceg',
      'ceh',
      'cei',
      'cfg',
      'cfh',
      'cfi',
    ])
  })
})
