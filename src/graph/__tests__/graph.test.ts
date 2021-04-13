import { bfsGraph, dfsGraph, findShortestPath, Graph } from '../graph'

describe('Graph realize by LinkedList', () => {
  test('graph releation between vertex and edge', () => {
    const graph = new Graph<string>()
    graph.addEdge('A', 'B')
    graph.addEdge('A', 'A')
    graph.addEdge('A', 'C')
    graph.addEdge('A', 'D')
    graph.addEdge('B', 'D')
    graph.addEdge('F', 'E') // 游离的

    expect(graph.adjMap.get('A')).toEqual(new Set(['B', 'A', 'C', 'D']))
    expect(graph.adjMap.get('B')).toEqual(new Set(['A', 'D']))

    const bfsVisitResult = bfsGraph(graph)
    expect(Array.from(bfsVisitResult)).toEqual(['A', 'B', 'C', 'D', 'F', 'E'])

    const dfsVisitResult = dfsGraph(graph)
    expect(dfsVisitResult).toEqual(new Set(['A', 'B', 'D', 'C']))
  })

  test('graph find shortest path by bfs', () => {
    const graph = new Graph<string>()
    graph.addEdge('A', 'B')
    graph.addEdge('A', 'C')
    graph.addEdge('A', 'D')
    graph.addEdge('B', 'D')
    graph.addEdge('D', 'E')
    graph.addEdge('G', 'H') // 游离的

    const shortestPath = findShortestPath(graph, 'A', 'E')
    expect(shortestPath).toEqual(['A', 'D', 'E'])

    expect(() => findShortestPath(graph, 'C', 'F')).toThrowError(
      'endNode: F is not in graph'
    )

    expect(findShortestPath(graph, 'A', 'G')).toBeNull()
  })
})
