/**
 * 给定数量 n ，得到所有合法的括号组合
 * // n=1 -> ()
 * // n=2 -> ()() 、(())
 * // n=3 => ()()() 、(())() 、()(())、(()())、((()))
 * 任意时刻，右括号的数量都应大于等于左括号的数量
 * @param n
 */
export function getAllParenthesisKinds(n: number) {
  if (n < 1) {
    return null
  }

  const result: string[] = []

  /**
   * @param remainLeft 剩余的左括号的数量
   * @param remainRight 剩余的右括号的数量
   */
  function solve(
    remainLeft: number,
    remainRight: number,
    parenthesisArr: string[] = [],
    index: number = 0
  ) {
    if (remainLeft === 0 && remainRight === 0) {
      result.push(parenthesisArr.join(''))
      parenthesisArr = []
    } else {
      if (remainLeft > 0) {
        parenthesisArr[index] = '('
        solve(remainLeft - 1, remainRight, parenthesisArr, index + 1)
      }
      if (remainRight > remainLeft) {
        parenthesisArr[index] = ')'
        solve(remainLeft, remainRight - 1, parenthesisArr, index + 1)
      }
    }
  }

  solve(n, n, [], 0)

  return result
}
