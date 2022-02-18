/**
 * @fileoverview
 * https://leetcode.com/problems/longest-valid-parentheses/
 * (str: string) => string
 * str 只包含小括号，返回最长的合法的子串的长度
 */

export class LongestValidParenthesis {
  stackSolution(str: string) {
    // index  0  1  2  3  4  5  6  7
    // symbol (  )  )  (  (  (  )  )
    // initial stack: [-1]
    // i=0 stack=[-1, 0] result=0
    // i=1 stack=[-1] result=1-(-1)=2
    // i=2 stack=[] stack=[2] result=2
    // i=3 stack=[2, 3] result=2
    // i=4 stack=[2, 3, 4] result=2
    // i=5 stack=[2, 3, 4, 5] result=2
    // i=6 stack=[2, 3, 4] result=Math.max(2, 6-4)=2
    // i=7 stack=[2, 3] result=Math.max(2, 7-3) = 4
    const stack = [-1]
    let result = 0
    for (let i = 0, len = str.length; i < len; i++) {
      const char = str.charAt(i)
      if (char === '(') {
        stack.push(i)
      }
      if (char === ')') {
        stack.pop()
        if (stack.length > 0) {
          result = Math.max(result, i - stack[stack.length - 1])
        } else {
          stack.push(i)
        }
      }
    }
    return result
  }

  dpSolution(str: string) {
    // leetcode的解法：
    //  dp 中下标 index 表示在 str 的对应 index 时，合法子串的最大长度
    //        0  1  2  3  4  5  6  7
    //        (  )  )  (  (  (  )  )
    // dp =  [0, 0, 0, 0, 0, 0, 0, 0]
    // dp =  [0, 2, 0, 0, 0, 0, 2, 4]
    // 如果 str[i] === ')' && str[i-1] === '('，如果前面合法，则现在也合法，最大长度+2，dp[i] = dp[i-2] + 2
    // 如果 str[i] === ')' && str[i-1] === ')'，如果 str[i - 1 - dp[i - 1]] === '('，好吧，我有点搞不懂了
    // TODO: understand dp solution
    let result = 0
    const dp = [0]
    for (let i = 1, len = str.length; i < len; i++) {
      if (dp[i] === undefined) {
        // 填充为 0
        dp[i] = 0
      }
      if (str.charAt(i) == ')') {
        if (str.charAt(i - 1) == '(') {
          dp[i] = (i >= 2 ? dp[i - 2] : 0) + 2
        } else if (i - dp[i - 1] > 0 && str.charAt(i - dp[i - 1] - 1) == '(') {
          dp[i] =
            dp[i - 1] + (i - dp[i - 1] >= 2 ? dp[i - dp[i - 1] - 2] : 0) + 2
        }
        result = Math.max(result, dp[i])
      }
    }
    return result
  }

  /**
   * brute force O(n^3)
   * @param str
   * @returns
   */
  firstSolution(str: string) {
    let result = 0
    for (let i = 0, len = str.length; i < len - 1; i++) {
      for (let j = i + 1; j < len + 1; j++) {
        if (this.checkValid(str.substring(i, j))) {
          result = Math.max(result, j - i)
        }
      }
    }

    return result
  }

  checkValid(str: string) {
    const visited: string[] = []
    for (let i = 0, len = str.length; i < len; i++) {
      const char = str.charAt(i)
      if (char === '(') {
        visited.push(char)
      }
      if (char === ')') {
        const latestVisited = visited.pop()
        if (latestVisited === undefined) {
          return false
        }
      }
    }

    return visited.length === 0
  }
}
