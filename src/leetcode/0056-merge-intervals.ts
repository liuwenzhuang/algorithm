/**
 * @fileoverview
 * https://leetcode.com/problems/merge-intervals/
 * (intervals: [number, number][]) => [number, number][]
 * intervals 中每个元素是一个二元组，合并有重合的二元组
 */

export class MergeIntervals {
  firstSolution(intervals: [number, number][]) {
    // [[1,3],[2,6],[8,10],[15,18]]
    // 按 item[0] 排序
    intervals.sort((a, b) => {
      return a[0] - b[0]
    })
    const result: [number, number][] = [intervals[0]]
    for (let i = 1, len = intervals.length; i < len; i++) {
      const prev = result[result.length - 1]
      const cur = intervals[i]
      if (cur[0] <= prev[1]) {
        // overlap
        prev[1] = Math.max(prev[1], cur[1])
      } else {
        result.push(cur)
      }
    }

    return result
  }

  mergeOverlap(a: [number, number], b: [number, number]): [number, number] {
    // [2, 3] [0, 1] F 0 > 0  1 > 1
    // [2, 3] [0, 4] Y 0 > 0  1 < 1
    // [0, 1] [2, 3] F 0 < 0  1 < 1
    if (Math.max(...a) < Math.min(...b) || Math.max(...b) < Math.min(...a)) {
      return null
    }
    return [Math.min(...a, ...b), Math.max(...a, ...b)]
  }
}
