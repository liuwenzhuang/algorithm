/**
 * @fileoverview
 * https://leetcode.com/problems/two-sum/
 */

/**
 * 数组中找到两个下标，两值之和和提供的数值相等
 * O(n) 时间复杂度
 * @param arr
 * @param target
 * @returns
 */
export function findTwoIndexSumEqualTarget(
  arr: number[],
  target: number
): [number, number] {
  const len = arr?.length
  if (!len || len < 2) {
    return null
  }

  const valueIndexMap = new Map<number, number>()
  for (let i = 0; i < len; i++) {
    const currentValue = arr[i]
    const remainderValue = target - currentValue

    const remainderIndex = valueIndexMap.get(remainderValue)
    if (remainderIndex !== undefined) {
      return [remainderIndex, i]
    } else {
      valueIndexMap.set(currentValue, i)
    }
  }

  return null
}
