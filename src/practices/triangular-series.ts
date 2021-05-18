/**
 * @fileoverview
 * 三角序列:
 *
 *          A
 *        A   A
 *      A   A   A
 *    A   A   A   A
 *  A   A   A   A   A    n = 5
 *
 * 层数和数量相等（层数从 1 开始），且每一层数量都比上一层多 1
 * 其层数 n 和 总和有如下关系：
 * sum = (n + 1) * (n / 2) = (n * n + n) / 2
 */

export class TriangularSeries {
  /**
   * n + 1 长度的数组，每一个元素的值的范围是 [1...n]，且都会出现在数组中
   * 所以，必然有个值会重复，找出重复的值
   * @param numbers
   */
  findRepeatNum(numbers: number[]) {
    const len = numbers.length
    if (len < 2) {
      return null
    }

    const n = len - 1
    const sumWithoutDuplicate = (n * n + n) / 2 // 不重复时，即为三角序列的和
    const actualSum = numbers.reduce((acc, cur) => acc + cur, 0) // 重复序列的真实和

    return actualSum - sumWithoutDuplicate
  }
}
