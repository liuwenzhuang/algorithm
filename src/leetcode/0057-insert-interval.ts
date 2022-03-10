/**
 * @fileoverview
 * https://leetcode.com/problems/insert-interval/
 * (intervals: [number, number][], interval: [number, number]) => [number, number][]
 * intervals 是按 [number, number][0] 排序的，不存在相互覆盖的二元组的数组，
 * interval 是待插入的二元组，要求插入后，intervals 仍是排序的，且无相互覆盖（必要时可进行 interval 的合并）
 */

type IntervalTuple = [number, number]

export class InsertInterval {
  firstSolution(intervals: IntervalTuple[], interval: IntervalTuple) {
    // 从后找到升序的插入位置
    let i = intervals.length - 1
    for (; i >= 0; i--) {
      const curInterval = intervals[i]
      if (interval[0] >= curInterval[0]) {
        break
      }
    }

    intervals.splice(i + 1, 0, interval)

    // 合并插入后的 intervals
    const result: IntervalTuple[] = [intervals[0]]
    for (let i = 1, len = intervals.length; i < len; i++) {
      const curInterval = intervals[i]
      const prevInterval = result[result.length - 1]
      if (curInterval[0] <= prevInterval[1]) {
        prevInterval[1] = Math.max(prevInterval[1], curInterval[1])
      } else {
        result.push(curInterval)
      }
    }

    return result
  }
}
