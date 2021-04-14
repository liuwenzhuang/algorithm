/**
 * @fileoverview 单词搜索树
 *        a
 *    b       d
 *  c   ##  e   f
 * ##      ##   ##
 */

import { hasOwnProperty } from '../helper/util'

export class Trie {
  tree = {}
  /**
   * 标识一个词的结尾
   */
  private endOfWord = '##'

  checkExist(word: string) {
    const len = word.length
    let currentNode = this.tree

    for (let i = 0; i < len; i++) {
      const char = word[i]
      if (hasOwnProperty(currentNode, char) === false) {
        return false
      }

      currentNode = currentNode[char]
    }

    if (hasOwnProperty(currentNode, this.endOfWord)) {
      return true
    }

    return false
  }

  /**
   * 添加，返回 false 表示已存在，返回 true 表示不存在且添加成功
   * @param word
   * @returns
   */
  addWord(word: string) {
    const len = word.length
    let currentNode = this.tree
    let isNewWord = false

    for (let i = 0; i < len; i++) {
      const char = word[i]
      if (hasOwnProperty(currentNode, char) === false) {
        currentNode[char] = {}
        isNewWord = true
      }

      currentNode = currentNode[char]
    }

    if (hasOwnProperty(currentNode, this.endOfWord) === false) {
      currentNode[this.endOfWord] = {}
      isNewWord = true
    }

    return isNewWord
  }

  /**
   * 删除，存在则返回 true，否则返回 false
   * @param word
   * @returns
   */
  delete(word: string) {
    const len = word.length
    let currentNode = this.tree

    for (let i = 0; i < len; i++) {
      const char = word[i]
      if (hasOwnProperty(currentNode, char) === false) {
        return false
      }

      currentNode = currentNode[char]
    }

    if (hasOwnProperty(currentNode, this.endOfWord)) {
      delete currentNode[this.endOfWord]
      return true
    }

    return false
  }
}
