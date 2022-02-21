export class SearchInsertPosition {
  firstSolution(nums: number[], target: number) {
    let left = 0
    let right = nums.length

    while (left < right) {
      let mid = left + Math.floor((right - left) / 2)

      const midValue = nums[mid]
      if (midValue >= target) {
        right = mid
      } else {
        left = mid + 1
      }
    }

    return left
  }
}
