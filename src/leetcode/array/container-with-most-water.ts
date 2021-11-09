/**
 * @fileoverview
 * https://leetcode.com/problems/container-with-most-water/
 */

export function bruteForceGetMostWater(arr: number[]) {
  const len = arr.length
  if (len < 2) {
    return null
  }
  let max = 0
  for (let i = 0; i < len - 1; i++) {
    for (let j = i + 1; j < len; j++) {
      const xDis = j - i
      const yDis = Math.min(arr[i], arr[j])
      const area = xDis * yDis
      max = Math.max(max, area)
    }
  }
  return max
}

export function twoPointerGetMostWater(arr: number[]) {
  let head = 0
  let tail = arr.length - 1
  let max: number = null
  while (head < tail) {
    const headYDis = arr[head]
    const tailYDis = arr[tail]
    max = Math.max(Math.min(headYDis, tailYDis) * (tail - head), max ?? 0)

    if (arr[head] < arr[tail]) {
      head++
    } else {
      tail--
    }
  }
  return max
}
