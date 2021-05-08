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
