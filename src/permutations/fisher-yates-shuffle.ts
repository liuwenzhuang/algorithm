import { getRandom } from '../helper/util'

/**
 * lodash 的 _.shuffle 方法
 * Fisher-Yates 洗牌算法，生成序列的变体，每个变体的生成几率是一样的
 * https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle
 * @param arr
 * @returns
 */
export function fisherYatesShuffle(arr: any[]) {
  const len = arr.length
  if (len < 2) {
    return arr
  }
  const lastIndex = len - 1
  for (let i = 0; i < lastIndex; i++) {
    const randomIndex = getRandom(i, lastIndex)

    if (randomIndex !== i) {
      const temp = arr[randomIndex]
      arr[randomIndex] = arr[i]
      arr[i] = temp
    }
  }

  return arr
}
