class Graph {
  constructor() {
    this.adjancencyList = {};
  }
  addVertex(vertex) {
    if (!this.adjancencyList[vertex]) this.adjancencyList[vertex] = [];
  }
  addEdge(v1, v2) {
    this.adjancencyList[v1].push(v2); 
    this.adjancencyList[v2].push(v1);
  }
  removeEdge(vertex1, vertex2) {
    this.adjancencyList[vertex1] = this.adjancencyList[vertex1]?.filter(
      (vertex) => vertex !== vertex2
    );
    this.adjancencyList[vertex2] = this.adjancencyList[vertex2]?.filter(
      (vertex) => vertex !== vertex1
    );
  }
  removeVertex(vertex) {
    while (this.adjancencyList[vertex].length) {
      let removeVertex = this.adjancencyList[vertex].pop();
      this.removeEdge(vertex, removeVertex);
    }
    delete this.adjancencyList[vertex];
  }
  dfsRecursive(start){
    let result = []
    let visited = {}
    let adjancencyList = this.adjancencyList

    function trav (vertex){
      if(!vertex) return null
      visited[vertex] = true
      result.push(vertex)

      adjancencyList[vertex].forEach((neighbor) => {
        if(!visited[vertex]){
         return trav(neighbor)
        }
      })
    }

    trav(start)
    return result

  }
  dfsLoop(start){
    let stack = [start]
    let result = []
    let visited = {}
    let adjancencyList = this.adjancencyList
    let currentVertex 

    visited[start] = true

    while(stack.length){
      console.log(stack)
      currentVertex = stack.pop()
      result.push(currentVertex)
      adjancencyList[currentVertex].forEach((neighbor) => {
        if(!visited[neighbor]){
          visited[neighbor] = true
          stack.push(neighbor)
        }
      })
    }
    return result


  }
  bfsLoop(start){
    let queueu = [start]
    let visited = {}
    let result = []
    let currentVertex
    visited[currentVertex] = true
    while(queueu.length){
      currentVertex = queueu.shift()
     
      result.push(currentVertex)
      this.adjancencyList.forEach((neighbor) => {
        if(!visited[neighbor]){
          visited[neighbor] = true
          queueu.push(neighbor)
        }
      })
    }
    return result

    
  }
}
