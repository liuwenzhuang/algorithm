/**
 * @fileoverview
 * 根据表达式计算字母数
 * 说明：
 *   给定一个描述字母数量的表达式，计算表达式里的每个字母实际数量
 *   表达式格式：
 *     字母紧跟表示次数的数字，如 A2B3
 *     括号可将表达式局部分组后跟上数字，(A2)2B
 *     数字为1时可缺省，如 AB3。
 * 示例：
 *   countOfLetters('A2B3'); // { A: 2, B: 3 }
 *   countOfLetters('A(A3B)2'); // { A: 7, B: 2 }
 *   countOfLetters('C4(A(A3B)2)2'); // { A: 14, B: 4, C: 4 }
 */

const isNum = (char) => /[0-9]/.test(char)
const isLetter = (char) => /[A-Z]/i.test(char)
const getIndexNum = (str: string, index: number) => {
  let num = ''
  while (isNum(str[index])) {
    num += str[index]
    index++
  }
  return num
}

export function countOfLetters(str: string) {
  const stack = [[]]

  let i = 0

  while (i < str.length) {
    if (isLetter(str[i])) {
      let char = str[i]
      i += char.length

      let obj: {
        name: string
        value: number
      } = {} as any

      obj.name = char
      if (isNum(str[i])) {
        let num = getIndexNum(str, i)
        i += num.length // 跳过多位数字
        obj.value = Number(num)
      } else {
        obj.value = 1 // 缺省为 1
      }
      stack[stack.length - 1].push(obj)
    } else if (str[i] === '(') {
      stack.push([])
      i++
    } else if (str[i] === ')') {
      i++
      let multi = getIndexNum(str, i)
      i += multi.length
      let left = stack[stack.length - 2]
      let right = stack[stack.length - 1]
      for (let j = 0; j < right.length; ++j) {
        left.push({
          name: right[j].name,
          value: Number(multi) * right[j].value,
        })
      }
      stack.pop()
    }
  }

  const result = {}
  for (let i = 0; i < stack[0].length; ++i) {
    result[stack[0][i].name] = 0
  }
  for (let i = 0; i < stack[0].length; ++i) {
    result[stack[0][i].name] += stack[0][i].value
  }

  return result
}
