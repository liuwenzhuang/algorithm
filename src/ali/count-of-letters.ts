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
