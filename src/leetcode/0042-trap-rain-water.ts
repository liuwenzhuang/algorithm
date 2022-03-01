/**
 * @fileoverview https://leetcode.com/problems/trapping-rain-water/
 * (nums: number[]) => number
 * nums 中每个数字表示挡板的高度，这些挡板的宽度都是 1，
 * 将这些挡板排成一排，形成的结构最多能存多少水
 */

/**
 * |
 * |
 * |    _
 * |  _   _
 * |_____________________________
 *  0 1 2 3
 */

export class TrapRainWater {
  /**
   * 针对每个 index，左边最高的 height 和 右边最高的 height 之间的小值，
   * 如果大于当前 index 的 height，则其蓄水的值为 Math.min(leftMax, rightMax) - currentHeight，
   * 将所有 index 的蓄水值相加得到结果
   * @param nums
   * @returns
   */
  bruteForceSolution(nums: number[]) {
    let result = 0
    const len = nums.length
    for (let i = 0; i < len; i++) {
      let leftMax = 0
      let rightMax = 0

      for (let j = i - 1; j >= 0; j--) {
        leftMax = Math.max(nums[j], leftMax)
      }
      for (let k = i + 1; k < len; k++) {
        rightMax = Math.max(nums[k], rightMax)
      }
      if (leftMax > nums[i] && rightMax > nums[i]) {
        const water = Math.min(leftMax, rightMax) - nums[i]
        result += water
      }
    }

    return result
  }

  /**
   * 在 {@link TrapRainWater.bruteForceSolution} 中，存在重复逻辑，
   * 从头部开始填充对应位置的 leftMax 的列表
   * 从尾部开始填充对应位置的 rightMax 的列表
   * @param nums
   */
  dpSolution(nums: number[]) {
    const len = nums.length

    // 存放对应 index 的 leftMax，对于第一个元素来说，由于没有左边界，故其 leftMax 为 0
    const leftMaxDp = [0]
    for (let i = 1; i < len; i++) {
      leftMaxDp[i] = Math.max(nums[i - 1], leftMaxDp[i - 1])
    }

    // 存放对应 index 的 rightMax，对于最后一个元素来说，由于没有右边界，故其 rightMax 为 0
    const rightMaxDp = [0]
    for (let i = len - 2; i > -1; i--) {
      rightMaxDp.unshift(Math.max(nums[i + 1], rightMaxDp[0]))
    }

    let result = 0
    for (let i = 0; i < len; i++) {
      if (leftMaxDp[i] > nums[i] && rightMaxDp[i] > nums[i]) {
        result += Math.min(leftMaxDp[i], rightMaxDp[i]) - nums[i]
      }
    }
    return result
  }

  /**
   * leftPointer(->) 和 rightPointer(<-) 用于查找 leftMax 和 rightMax，以及确定对应位置的蓄水量
   * 如果 leftMax <= rightMax && leftMax > height[leftPointer] 表示 leftPointer 处能蓄水，量为 leftMax - height[leftPointer]
   * 如果 leftMax > rightMax && rightMax > height[rightPointer] 表示 rightPointer 处能蓄水，量为 rightMax - height[rightPointer]
   * 对于蓄水来说，左边界和右边界谁高谁低是一样的
   * @param nums
   */
  twoPointerSolution(nums: number[]) {
    let left = 1
    let right = nums.length - 2
    let leftMax = 0
    let rightMax = 0
    let result = 0
    while (left <= right) {
      leftMax = Math.max(leftMax, nums[left - 1])
      rightMax = Math.max(rightMax, nums[right + 1])

      if (leftMax <= rightMax) {
        // 左低右高
        if (leftMax > nums[left]) {
          // left 的位置，可以蓄水
          result += leftMax - nums[left]
        }
        left++
      } else {
        // 右低左高
        if (rightMax > nums[right]) {
          // right 的位置，可以蓄水
          result += rightMax - nums[right]
        }
        right--
      }
    }
    return result
  }

  /**
   * 上面的 {@link TrapRainWater.bruteForceSolution} 和 {@link TrapRainWater.dpSolution} 都是
   * 按列蓄水，此方法是按行蓄水。
   * stack 存储 index，当前 index 对应的高度高于 stack 顶部的 index 对应的 height 时，表示 stack 顶部 index 可以蓄水，将其 pop ，此时当前 index 为右边界，stack 顶部的 index 对应的是左边界，此时两者之间的蓄水量为高度差 * 宽度
   * @param nums
   * @returns
   */
  stackSolution(nums: number[]) {
    let result = 0

    const indexStack: number[] = []
    let currentIndex = 0
    const len = nums.length

    while (currentIndex < len) {
      while (
        indexStack.length > 0 &&
        nums[currentIndex] > nums[indexStack[indexStack.length - 1]]
      ) {
        // 凹陷处
        const sunkIndex = indexStack.pop()
        if (indexStack.length < 1) {
          break
        }
        const leftIndex = indexStack[indexStack.length - 1]
        const rightIndex = currentIndex
        let xDis = rightIndex - leftIndex - 1
        // 左边界，右边界的较小值 - 凹陷高度
        let yDis = Math.min(nums[leftIndex], nums[rightIndex]) - nums[sunkIndex]
        // 每次加的是长方形的面积
        result += xDis * yDis
      }
      indexStack.push(currentIndex++)
    }

    return result
  }
}
