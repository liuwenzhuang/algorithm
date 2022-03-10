/**
 * @fileoverview
 * https://leetcode.com/problems/insert-interval/
 * (intervals: [number, number][], interval: [number, number]) => [number, number][]
 * intervals 是按 [number, number][0] 排序的，不存在相互覆盖的二元组的数组，
 * interval 是待插入的二元组，要求插入后，intervals 仍是排序的，且无相互覆盖（必要时可进行 interval 的合并）
 */

type IntervalTuple = [number, number]

export class InsertInterval {
  firstSolution(intervals: IntervalTuple[], newInterval: IntervalTuple) {
    // 从后找到升序的插入位置
    let i = intervals.length - 1
    for (; i >= 0; i--) {
      const curInterval = intervals[i]
      if (newInterval[0] >= curInterval[0]) {
        break
      }
    }

    intervals.splice(i + 1, 0, newInterval)

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

  optimizeSolution(intervals: IntervalTuple[], newInterval: IntervalTuple) {
    let result: IntervalTuple[] = []

    for (let i = 0, len = intervals.length; i < len; i++) {
      const curInterval = intervals[i]
      if (newInterval[1] < curInterval[0]) {
        // 已找到插入位置，直接插入，合并后续的
        // prev:[1,2] cur:[3,4]
        result.push(newInterval)
        result = result.concat(intervals.slice(i))
        return result
      } else if (curInterval[1] < newInterval[0]) {
        // cur: [1,2] prev:[3,4]
        result.push(curInterval)
      } else {
        // 需要合并
        // prev: [2,5]  cur: [1,3]
        newInterval[0] = Math.min(newInterval[0], curInterval[0])
        newInterval[1] = Math.max(newInterval[1], curInterval[1])
      }
    }
    result.push(newInterval)

    return result
  }
}
