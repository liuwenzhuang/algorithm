const process = require('process')
const fs = require('fs')
const path = require('path')
const { kebabCase, camelCase, last, take } = require('lodash')

const argv = process.argv

if (argv.length < 3) {
  console.error('usage: yarn addtype [type | path]')
  process.exit(1)
}

let initialType = argv[2].trim()
let isPath = false

const paths = initialType.split('/').filter((item) => !!item)
const len = paths.length
if (len > 1) {
  // 路径形式的
  initialType = last(paths)
  isPath = true
}

const type = kebabCase(initialType) // 连字符的形式作为文件(夹)名
const camelCaseType = camelCase(initialType) // 驼峰形式
const classType = camelCaseType[0].toUpperCase() + camelCaseType.slice(1) // 类名

const newPath = path.join(
  __dirname,
  '../src',
  ...(isPath ? take(paths, len - 1) : [type])
)
const newClsPath = path.join(newPath, `${type}.ts`)
const newTestPath = path.join(newPath, '__tests__')
const newTestFilePath = path.join(newTestPath, `${type}.test.ts`)

if (!fs.existsSync(newPath)) {
  fs.mkdirSync(newPath, {
    recursive: true,
  })
}

if (!fs.existsSync(newTestPath)) {
  fs.mkdirSync(newTestPath, {
    recursive: true,
  })
}

if (!fs.existsSync(newClsPath)) {
  fs.writeFileSync(newClsPath, `export class ${classType} {}`)
}

if (!fs.existsSync(newTestFilePath)) {
  fs.writeFileSync(
    path.join(newTestPath, `${type}.test.ts`),
    `import { ${classType} } from '../${type}'

describe('${classType}', () => {
  it('${classType} should balala', () => {

  })
})
  `
  )
}
