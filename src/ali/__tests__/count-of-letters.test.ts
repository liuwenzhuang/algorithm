import { countOfLetters } from '../count-of-letters'

describe('countOfLetters', () => {
  it('complete form', () => {
    expect(countOfLetters('A2B3')).toEqual({
      A: 2,
      B: 3,
    })
  })

  it('omit 1 form', () => {
    expect(countOfLetters('AB31')).toEqual({
      A: 1,
      B: 31,
    })
  })

  it('case sensitive', () => {
    expect(countOfLetters('AB31a2')).toEqual({
      A: 1,
      B: 31,
      a: 2,
    })
  })

  it('parens form', () => {
    expect(countOfLetters('C4(A(A3B)2)2')).toEqual({
      A: 14,
      B: 4,
      C: 4,
    })
  })
})
