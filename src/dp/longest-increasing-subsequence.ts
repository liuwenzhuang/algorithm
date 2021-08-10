/**
 * 递归找到最长递增子序列的长度
 * 对于长度为 n 的列表来说，找到对应下标 [0...n-1] 的 LIS 长度，取得最大值
 * LIS(0) = 1
 * LIS(i) = 0 < j < i && arr[j] < arr[i] ? max(LIS(j)) + 1 : 1
 * @param arr
 * @returns
 */
export function recursiveFindLISLength(arr: number[]) {
  if (arr.length < 2) {
    // 长度为 0 或 1 ，LIS分别为 0 和 1
    return arr.length
  }

  // 结果 LIS 长度
  let resultLIS = 0

  function solve(subArr: number[]) {
    const len = subArr.length
    if (len < 2) {
      return 1
    }
    // 当前的 LIS 长度
    let currentLIS = 1

    for (let i = 1; i < len; i++) {
      const res = solve(subArr.slice(0, i))
      if (subArr[i - 1] < subArr[len - 1] && currentLIS < res + 1) {
        currentLIS = res + 1
      }
    }

    if (currentLIS > resultLIS) {
      resultLIS = currentLIS
    }

    return currentLIS
  }

  solve(arr)
  return resultLIS
}

/**
 * 通过动态规划找到最长递增子序列的长度
 * @param arr
 * @returns
 */
export function dpFindLISLength(arr: number[]) {
  const len = arr.length
  if (len < 2) {
    return len
  }
  // 对应下标的 LIS 值
  const lisArr: number[] = Array(len).fill(1)
  let maxLIS = 1
  let index = 1
  for (let i = 1; i < len; i++) {
    for (let j = 0; j < i; j++) {
      // lis[i] = 0 < j < i ? 1 + max(lis[j]) : 1
      if (arr[j] < arr[i] && lisArr[i] < lisArr[j] + 1) {
        lisArr[i] = lisArr[j] + 1
        if (lisArr[i] > maxLIS) {
          maxLIS = lisArr[i]
          index = i
        }
      }
    }
  }

  return lisArr[index]
}

/**
 * 穷举法获取 LIS 序列
 * 时间复杂度：O(n^2)
 * @param arr
 * @returns
 */
export function bruteForceFindLIS(arr: number[]) {
  const len = arr.length
  if (len < 2) {
    return arr
  }

  let currentLISArr: number[] = []
  let longestLISArr: number[] = []

  for (let i = 0; i < len; i++) {
    currentLISArr = []
    let maxValue = Number.MIN_SAFE_INTEGER
    for (let j = i; j < len; j++) {
      if (arr[j] > maxValue) {
        maxValue = arr[j]
        currentLISArr.push(arr[j])
      }
    }
    if (currentLISArr.length > longestLISArr.length) {
      longestLISArr = currentLISArr
    }
  }

  return longestLISArr
}

/**
 * 动态规划获取 LIS 序列
 * 时间复杂度：O(n^2)
 * @param arr
 */
export function dpFindLIS(arr: number[]) {
  const len = arr.length
  if (len < 2) {
    return arr
  }
  // 1, 3, 2, 8
  // L(0) = [1]
  // L(1) = [1, 3]
  // L(2) = [1, 2]
  // L(3) = [...maxLength(L(0), L(1), L(2)), arr[3])
  // arr[0...i-1]都不比 arr[i] 小，此时下标 i 对应的 LIS 序列为其本身

  const indexLISTuple: number[][] = [[arr[0]]]
  // 最长的 LIS
  let longestLIS = [arr[0]]
  for (let i = 1; i < len; i++) {
    // 当前循环下最长的 LIS
    let currentLIS: number[] = []
    for (let j = 0; j < i; j++) {
      if (arr[j] < arr[i]) {
        if (indexLISTuple[j].length > currentLIS.length) {
          currentLIS = indexLISTuple[j]
        }
      }
    }
    indexLISTuple[i] = [...currentLIS, arr[i]]

    if (indexLISTuple[i].length > longestLIS.length) {
      longestLIS = indexLISTuple[i]
    }
  }

  return longestLIS
}
