/**
 * @fileoverview
 * 对象扁平化
 * 说明：请实现 flatten(input) 函数，input 为一个 javascript 对象（Object 或者 Array），返回值为扁平化后的结果。
 * 示例：
 *   var input = {
 *     a: 1,
 *     b: [ 1, 2, { c: true }, [ 3 ] ],
 *     d: { e: 2, f: 3 },
 *     g: null,
 *   }
 *   var output = flatten(input);
 *   output如下
 *   {
 *     "a": 1,
 *     "b[0]": 1,
 *     "b[1]": 2,
 *     "b[2].c": true,
 *     "b[3][0]": 3,
 *     "d.e": 2,
 *     "d.f": 3,
 *     // "g": null,  值为null或者undefined，丢弃
 *  }
 */

export function flattenObject(obj, parentKey = '', result = {}) {
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      let keyName = `${parentKey}${key}`
      if (typeof obj[key] === 'object') {
        flattenObject(obj[key], keyName + '.', result)
      } else {
        result[keyName] = obj[key]
      }
    }
  }
  return result
}

export function flattenObject2(
  obj,
  parentKey = '',
  connector = '.',
  result = {}
) {
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      let keyName = key
      if (parentKey) {
        if (connector === '.') {
          keyName = `${parentKey}.${key}`
        }
        if (connector === '[') {
          keyName = `${parentKey}[${key}]`
        }
      }
      if (typeof obj[key] === 'object') {
        if (Array.isArray(obj[key])) {
          flattenObject2(obj[key], keyName, '[', result)
        } else {
          flattenObject2(obj[key], keyName, '.', result)
        }
      } else {
        result[keyName] = obj[key]
      }
    }
  }
  return result
}
