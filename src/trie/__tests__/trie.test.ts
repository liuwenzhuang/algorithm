import { Trie } from '../trie'

describe('Trie should work in all conditions', () => {
  const trie = new Trie()

  it('new words', () => {
    expect(trie.addWord('abcd')).toBe(true)
    expect(trie.addWord('aefg')).toBe(true)
  })

  it('prefix is same with existing word', () => {
    expect(trie.addWord('abc')).toBe(true)
  })

  it('word already exist', () => {
    expect(trie.addWord('abcd')).toBe(false)
  })

  it('empty word', () => {
    expect(trie.addWord('')).toBe(true)
    expect(trie.addWord('')).toBe(false)
  })

  it('delete word', () => {
    expect(trie.delete('not-exist')).toBe(false)
    expect(trie.delete('abcd')).toBe(true)
  })

  it('check exists', () => {
    expect(trie.checkExist('something-not-exist')).toBe(false)
    expect(trie.checkExist('abcd')).toBe(false)
    expect(trie.checkExist('abc')).toBe(true)
  })
})
