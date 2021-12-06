/**
 * @fileoverview
 * bitmapSort 用于处理大量非负整数的去重和排序，如 QQ 号的校验等
 * 它将每一位代表一个数字，32 bit 就能够表示 32 个整数
 * 注意此算法能够节省内存，但并不一定能够更快，具体可见：https://stackoverflow.com/questions/23278469/why-is-my-bitmap-sort-not-infintely-faster-than-my-mergesort
 */


export function bitmapSort(arr: number[], maxInteger = 1000000000) {
  // 1 个 byte，8 个 bit，数组每一项 32 个 bit，每一位表示一个数字
  // 4 byte: | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | |
  // 4 byte: | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | |
  const bitmap = new Array(Math.ceil(maxInteger / 32))
  for (let i = 0, len = arr.length; i < len; i++) {
    const item = arr[i]
    // 对应 byte 内的对应 bit，设置为 1
    // 1 表示第 0 个 4byte 的第 1 bit 为 1
    // 15 表示第 0 个 4byte 的第 15 bit 为 1
    const bucket = Math.floor(item / 32)
    if (bitmap[bucket] === undefined) {
      bitmap[bucket] = 0
    }
    bitmap[bucket] |= 1 << item % 32
  }

  const sortedArr = []
  for (let i = 0, len = bitmap.length; i < len; i++) {
    let item = bitmap[i]
    let bitIndex = 1

    while (item !== 0) {
      if ((item & 1) === 1) {
        const value = i * 32 + bitIndex - 1
        sortedArr.push(value)
      }
      bitIndex++
      // 用 0 补充左侧
      item = item >>> 1
    }
  }

  return sortedArr
}
