/**
 * @fileoverview
 * https://leetcode.com/problems/group-anagrams/
 * (strs: string[]) => string[][]
 * strs 中的一些词，是一个词打乱字母顺序的变种，将同一个词的变种们组合在一起
 */

export class GroupAnagrams {
  optimizeFirstSolution(strs: string[]) {
    const map = new Map<string, string[]>()
    for (let str of strs) {
      const key = this.sortStr(str)
      if (map.has(key)) {
        map.get(key).push(str)
      } else {
        map.set(key, [str])
      }
    }
    return [...map.values()]
  }

  firstSolution(strs: string[]) {
    const len = strs.length
    if (len < 1) {
      return []
    }
    const result: string[][] = [[strs[0]]]
    // eat eta aet ate tea tae
    for (let i = 1; i < len; i++) {
      const str = strs[i]
      let flag = false
      for (let j = 0; j < result.length; j++) {
        const settled = result[j][0]
        if (this.checkAnagram(str, settled)) {
          result[j].push(str)
          flag = true
          break
        }
      }
      if (!flag) {
        // 没命中同类，自立门户
        result.push([str])
      }
    }

    return result
  }

  checkAnagram(a: string, b: string) {
    return this.sortStr(a) === this.sortStr(b)
  }

  sortStr(a: string) {
    return [...a].sort((x, y) => x.charCodeAt(0) - y.charCodeAt(0)).join('')
  }
}
