/**
 * 从数组中找到只出现过一次的数字，假定只有1个，如 [4, 4, 1, 2, 2]
 * 和同一个数据进行两次按位异或操作，会相互抵消掉
 * 0 和 其他数据进行按位异或操作，不会改变此数据
 * O(n) 时间 + O(1) 空间
 * @param arr
 */
export function findAlone(arr: number[]) {
  let result = 0x0
  for (let item of arr) {
    result ^= item
  }

  return result
}
