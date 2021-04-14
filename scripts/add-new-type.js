const process = require('process')
const fs = require('fs')
const path = require('path')
const { kebabCase, camelCase, capitalize } = require('lodash')

const argv = process.argv

if (argv.length < 3) {
  console.error('usage: yarn addtype [type]')
  process.exit(1)
}

const initialType = argv[2]
const type = kebabCase(initialType) // 连字符的形式作为文件(夹)名
const camelCaseType = capitalize(camelCase(initialType)) // 驼峰形式作为类名

const newPath = path.join(__dirname, '../src', type)
const newClsPath = path.join(newPath, `${type}.ts`)
const newTestPath = path.join(newPath, '__tests__')
const newTestFilePath = path.join(newTestPath, `${type}.test.ts`)

if (!fs.existsSync(newPath)) {
  fs.mkdirSync(newPath)
}

if (!fs.existsSync(newTestPath)) {
  fs.mkdirSync(newTestPath)
}

if (!fs.existsSync(newClsPath)) {
  fs.writeFileSync(newClsPath, `export class ${camelCaseType} {}`)
}

if (!fs.existsSync(newTestFilePath)) {
  fs.writeFileSync(
    path.join(newTestPath, `${type}.test.ts`),
    `import { ${camelCaseType} } from '../${type}'

describe('${camelCaseType}', () => {
  it('${camelCaseType} should balala', () => {

  })
})
  `
  )
}
