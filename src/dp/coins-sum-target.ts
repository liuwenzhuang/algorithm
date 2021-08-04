/**
 * @fileoverview
 * Given 3 numbers {1, 3, 5}, we need to tell
 * the total number of ways we can form a number 'N'
 * using the sum of the given three numbers.
 * (allowing repetitions and different arrangements).
 */

export function getTotalWaySumToTarget(target: number, coins = [1, 3, 5]) {
  const dp: number[] = []
  function solve(target: number) {
    if (target < 0) {
      return 0
    }
    if (target === 0) {
      return 1
    }
    /* dp[target] =
      getTotalWaySumToTarget(target - coins[0]) +
      getTotalWaySumToTarget(target - coins[1]) +
      getTotalWaySumToTarget(target - coins[2]) */
    dp[target] = coins.reduce((acc, cur) => {
      return acc + solve(target - cur)
    }, 0)
    return dp[target]
  }

  return solve(target)
}

/**
 * target = 6
 * State(6):
 * 1 + 1 + 1 + 1 + 1 + 1
 * 1 + 1 + 1 + 3
 * 1 + 1 + 3 + 1
 * 1 + 3 + 1 + 1
 * 3 + 1 + 1 + 1
 * 3 + 3
 * 1 + 5
 * 5 + 1
 *
 * target = 7
 * State(7):
 * State(7 - 1) + 1 // 6 的方案上，都加 1
 * State(7 - 3) + 3 // 4 的方案上，都加 3
 * State(7 - 5) + 5 // 2 的方案上，都加 5
 * 故，State(7) = State(7 - 1) + State(7 - 3) + State(7 - 5)
 */
