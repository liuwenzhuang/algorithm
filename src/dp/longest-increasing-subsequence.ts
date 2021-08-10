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
