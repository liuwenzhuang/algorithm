import { LengthOfLastWord } from '../0058-length-of-last-word'

describe('LengthOfLastWord', () => {
  const lengthOfLastWord = new LengthOfLastWord()
  it('LengthOfLastWord should work properly', () => {
    expect(lengthOfLastWord.firstSolution('Hello World')).toBe(5)
    expect(lengthOfLastWord.firstSolution('World')).toBe(5)
    expect(lengthOfLastWord.firstSolution('   fly me   to   the moon  ')).toBe(
      4
    )
  })
})
