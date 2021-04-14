import { hasOwnProperty } from '../helper/util'
import { Queue } from '../queue/queue'

export class Graph<T = any> {
  public adjMap = new Map<T, Set<T>>()

  addVertex(vertex: T) {
    if (!this.adjMap.has(vertex)) {
      this.adjMap.set(vertex, new Set<T>([]))
    }
  }

  addEdge(startVertex: T, endVertext: T) {
    this.addVertex(startVertex)
    this.addVertex(endVertext)
    this.adjMap.get(startVertex).add(endVertext)
    this.adjMap.get(endVertext).add(startVertex)
  }
}

export function bfsGraph(graph: Graph) {
  const vertexIterator = graph.adjMap.keys()
  const firstVertex = vertexIterator.next().value
  const visitedSet = new Set([firstVertex])
  const visitingQueue = new Queue([firstVertex])
  while (visitingQueue.size > 0) {
    const vertex = visitingQueue.dequeue()
    const neighbors = graph.adjMap.get(vertex)
    neighbors.forEach((neighborVertex) => {
      if (!visitedSet.has(neighborVertex)) {
        visitingQueue.enqueue(neighborVertex)
        visitedSet.add(neighborVertex)
      }
    })

    // 防止有游离的节点
    const nextVertex = vertexIterator.next().value
    if (nextVertex !== undefined && !visitedSet.has(nextVertex)) {
      visitingQueue.enqueue(nextVertex)
      visitedSet.add(nextVertex)
    }
  }
  return visitedSet
}

export function dfsGraph(graph: Graph) {
  const vertexIterator = graph.adjMap.keys()
  const firstVertex = vertexIterator.next().value
  const visitedSet = new Set()
  const visitingStack = [firstVertex]
  while (visitingStack.length) {
    const vertex = visitingStack.pop()
    visitedSet.add(vertex)
    const neighbors = graph.adjMap.get(vertex)
    neighbors.forEach((neighborVertex) => {
      if (!visitedSet.has(neighborVertex)) {
        visitingStack.unshift(neighborVertex)
      }
    })
  }
  return visitedSet
}

/**
 * 利用广度优先遍历查找从 startNode 到 endNode 的最短路径
 * @param graph
 * @param startNode
 * @param endNode
 */
export function findShortestPath<T extends string>(
  graph: Graph<T>,
  startNode: T,
  endNode: T
) {
  const adjMap = graph.adjMap
  if (!adjMap.has(startNode)) {
    throw new Error(`startNode: ${startNode} is not in graph`)
  }
  if (!adjMap.has(endNode)) {
    throw new Error(`endNode: ${endNode} is not in graph`)
  }
  const visitedMap = {} // 保存已遍历的兄弟节点和当前节点的关系，key表示目的地，value表示来源
  visitedMap[startNode as string] = null // startNode 没有来源
  const visitingQueue = new Queue<T>([startNode])

  while (visitingQueue.size > 0) {
    const vertex = visitingQueue.dequeue()
    if (vertex === endNode) {
      // 找到结束节点，从 visitedMap 中解析出路径
      const path = []
      let currentNode = endNode
      while (currentNode) {
        // 从结束节点倒推回起点
        path.unshift(currentNode)
        currentNode = visitedMap[currentNode as string]
      }
      return path
    }

    const neighbors = adjMap.get(vertex)
    neighbors.forEach((neighborVertex) => {
      if (hasOwnProperty(visitedMap, neighborVertex)) {
        visitingQueue.enqueue(neighborVertex)
        visitedMap[neighborVertex as string] = vertex
      }
    })
  }

  return null
}
