import { WordsCount } from '../words-count'

describe('WordsCount', () => {
  it('simple sentence', () => {
    const count = new WordsCount(
      'Chocolate cake for dinner and pound cake for dessert'
    )
    count.populateWordsToCounts()
    expect(count.wordsCountMap).toEqual(
      new Map([
        ['Chocolate', 1],
        ['cake', 2],
        ['for', 2],
        ['dinner', 1],
        ['and', 1],
        ['pound', 1],
        ['dessert', 1],
      ])
    )
  })

  it('contain punctuation', () => {
    const count = new WordsCount('Chiffon cake? I like it!')
    count.populateWordsToCounts()
    expect(count.wordsCountMap).toEqual(
      new Map([
        ['Chiffon', 1],
        ['cake', 1],
        ['I', 1],
        ['like', 1],
        ['it', 1],
      ])
    )
  })

  it('contain hyphenated Words', () => {
    const count = new WordsCount('lwz hyphenated form is liu-wen-zhuang')
    count.populateWordsToCounts()
    expect(count.wordsCountMap).toEqual(
      new Map([
        ['lwz', 1],
        ['hyphenated', 1],
        ['form', 1],
        ['is', 1],
        ['liu-wen-zhuang', 1],
      ])
    )
  })

  it('ellipses between words', () => {
    const count = new WordsCount('Mmm...mmm...choice')
    count.populateWordsToCounts()
    expect(count.wordsCountMap).toEqual(
      new Map([
        ['mmm', 2],
        ['choice', 1],
      ])
    )
  })

  it('contain apostrophes', () => {
    const count = new WordsCount(`Lwz's home`)
    count.populateWordsToCounts()
    expect(count.wordsCountMap).toEqual(
      new Map([
        [`Lwz's`, 1],
        ['home', 1],
      ])
    )
  })
})
