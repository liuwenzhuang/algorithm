import { isEven, isOdd } from '../../helper/util'

/**
 * 在一个数组内找到中位数
 * @param arr
 * @param len
 */
export function findMedianInSingleArray(arr: number[], len?: number) {
  len = len === undefined ? arr.length : len
  if (len === 0) {
    return null
  }
  if (isEven(len)) {
    // 偶数
    const midIndex = len / 2
    return (arr[midIndex] + arr[midIndex - 1]) / 2
  }
  if (isOdd(len)) {
    return arr[Math.floor(len / 2)]
  }
}

export function findMedianOfTwoNum(num1: number, num2: number) {
  return (num1 + num2) / 2
}

export function findMedianOfThreeNum(num1: number, num2: number, num3: number) {
  // 中位数：总和 - 最小值 - 最大值
  return (
    num1 + num2 + num3 - Math.max(num1, num2, num3) - Math.min(num1, num2, num3)
  )
}

export function findMedianOfFourNum(
  num1: number,
  num2: number,
  num3: number,
  num4: number
) {
  // 中位数：(总和 - 最小值 - 最大值) / 2
  return (
    (num1 +
      num2 +
      num3 +
      num4 -
      Math.max(num1, num2, num3, num4) -
      Math.min(num1, num2, num3, num4)) /
    2
  )
}

/**
 * 在两个有序数组中找到中位数
 * 时间复杂度：O(log(Math.min(m, n)))
 * https://redquark.org/leetcode/0004-median-of-two-sorted-arrays/
 * @param arr1
 * @param arr2
 * @returns
 */
export function findMedianOfTwoSortedArray(arr1: number[], arr2: number[]) {
  const len1 = arr1.length
  const len2 = arr2.length
  if (len1 > len2) {
    // 保证前面的数组长度比较小
    return findMedianOfTwoSortedArray(arr2, arr1)
  }

  let start = 0
  let end = len1
  while (start <= end) {
    // 小数组的分割点
    let partition1 = start + Math.floor((end - start) / 2)
    // 大数组的分割点
    let partition2 = Math.floor((len1 + len2 + 1) / 2) - partition1
    // 小数组分割点前一个数据，即分割点前最大的值
    let beforePartition1Value =
      partition1 === 0 ? Number.MIN_SAFE_INTEGER : arr1[partition1 - 1]
    // 小数组分割点数据
    let partition1Value =
      partition1 === len1 ? Number.MAX_SAFE_INTEGER : arr1[partition1]

    // 大数组分割点前一个数据，即分割点前最大的值
    let beforePartition2Value =
      partition2 === 0 ? Number.MIN_SAFE_INTEGER : arr2[partition2 - 1]
    // 大数组分割点数据
    let partition2Value =
      partition2 === len2 ? Number.MAX_SAFE_INTEGER : arr2[partition2]

    if (
      beforePartition1Value <= partition2Value &&
      beforePartition2Value <= partition1Value
    ) {
      if (isEven(len1 + len2)) {
        // 偶数
        // 5           17 29
        // 4 6 11      13 14
        return (
          (Math.max(beforePartition1Value, beforePartition2Value) +
            Math.min(partition1Value, partition2Value)) /
          2
        )
      } else {
        // 奇数
        // 5              17 18 19 29
        // 4 6 11 13 14   15
        return Math.max(beforePartition1Value, beforePartition2Value)
      }
    } else if (beforePartition1Value > partition2Value) {
      end--
    } else {
      start++
    }
  }
}
