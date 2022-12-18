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
}
