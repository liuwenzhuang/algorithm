/**
 * 交换 [leftIndex, rightIndex] 范围内的数据
 * @param arr
 * @param leftIndex
 * @param rightIndex
 * @returns
 */
export function reverseCharArr(
  arr: string[],
  leftIndex = 0,
  rightIndex = arr.length - 1
) {
  while (leftIndex < rightIndex) {
    const temp = arr[leftIndex]
    arr[leftIndex] = arr[rightIndex]
    arr[rightIndex] = temp
    leftIndex++
    rightIndex--
  }

  return arr
}

export function reverseWordArr(arr: string[]) {
  // 目的：'english word check' -> 'check word english'
  // ['e', 'n', 'g', 'l', 'i', 's', 'h', '', 'w', 'o', 'r', 'd', '', 'c', 'h', 'e', 'c', 'k']
  // 第一步，反转所有字符
  // ['k', 'c', 'e', 'h', 'c', '', 'd', 'r', 'o', 'w', '', 'h', 's', 'i', 'l', 'g', 'n', e']
  // 第二步，按单词反转
  // ['c', 'h', 'e', 'c', 'k', '', 'w', 'o', 'r', 'd', '', 'e', 'n', 'g', 'l', 'i', 's', 'h']
  let len = arr.length
  reverseCharArr(arr, 0, len - 1) // 反转所有字符

  let leftIndex = 0
  let rightIndex = 0
  for (let i = 0; i <= len; i++) {
    if (arr[i] === '' || i === len) {
      rightIndex = i - 1
      reverseCharArr(arr, leftIndex, rightIndex)
      leftIndex = i + 1
    }
  }

  return arr
}
