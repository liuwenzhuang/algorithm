import { cloneDeep } from 'lodash'

export class SearchFolderTree {
  solution(source: any[], key: string) {
    const lowerCaseKey = key.toLowerCase()
    const result = cloneDeep(source).filter(function filter(item) {
      const lowerCaseItemName = item.name.toLowerCase()
      const isItemMatch = lowerCaseItemName.indexOf(lowerCaseKey) >= 0
      if (isItemMatch && item?.data?.type === 'project') {
        // 任务组名称匹配，如果底下有名称匹配的子任务，则打开任务组，否则关闭任务组
        const filteredChilren = item.children?.filter(filter)
        item.open = filteredChilren?.length > 0
        return true
      }

      let childrenBackup: any[] = null
      if (item.children) {
        childrenBackup = item.children.concat()
        item.children = item.children.filter(filter)
      }

      const isChildrenMatch = item.children?.length > 0
      if (isItemMatch && childrenBackup && !isChildrenMatch) {
        // 匹配到了父级，但子级无任何匹配，将子级不匹配的 flow 全部展示出来
        item.children = childrenBackup.filter(
          (item) => !item.children || item.children?.length > 0
        )
        item.open = item.children?.length > 0
        return item.open
      }
      item.open = isItemMatch || isChildrenMatch
      return item.open
    })
    return result
  }
}
