class Priorityqueue {
  constructor() {
    this.values = [];
  }
  enqueue(val, priority) {
    this.values.push({ val, priority });
    this.sort();
  }
  dequeue() {
    return this.values.shift();
  }
  sort() {
    this.values.sort((a, b) => a.priority - b.priority);
  }
}

class Graphweighted {
  constructor() {
    this.adjancencyList = {};
  }
  addVertex(vertex) {
    if (!this.adjancencyList[vertex]) this.adjancencyList[vertex] = [];
  }
  addEdge(v1, v2, weight) {
    this.adjancencyList[v1].push({ node: v2, weight });
    this.adjancencyList[v2].push({ node: v1, weight });
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
  dfsRecursive(start) {
    let result = [];
    let visited = {};
    let adjancencyList = this.adjancencyList;

    function trav(vertex) {
      if (!vertex) return null;
      visited[vertex] = true;
      result.push(vertex);

      adjancencyList[vertex].forEach((neighbor) => {
        if (!visited[vertex]) {
          return trav(neighbor);
        }
      });
    }

    trav(start);
    return result;
  }
  dfsLoop(start) {
    let stack = [start];
    let result = [];
    let visited = {};
    let adjancencyList = this.adjancencyList;
    let currentVertex;

    visited[start] = true;

    while (stack.length) {
      console.log(stack);
      currentVertex = stack.pop();
      result.push(currentVertex);
      adjancencyList[currentVertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          stack.push(neighbor);
        }
      });
    }
    return result;
  }
  bfsLoop(start) {
    let queueu = [start];
    let visited = {};
    let result = [];
    let currentVertex;
    visited[currentVertex] = true;
    while (queueu.length) {
      currentVertex = queueu.shift();

      result.push(currentVertex);
      this.adjancencyList.forEach((neighbor) => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          queueu.push(neighbor);
        }
      });
    }
    return result;
  }
  dijkstra(start, finish) {
    let nodes = new Priorityqueue();
    let distances = {};
    let previous = {};
    let smallest;
    let path = []; //to be returned

    //Initialize everything
    for (let vertex in this.adjancencyList) {
      if (vertex === start) {
        distances[vertex] = 0;
        nodes.enqueue(vertex, 0);
      } else {
        distances[vertex] = Infinity;
        nodes.enqueue(vertex, Infinity);
      }
      previous[vertex] = null;
    }

    //Do the main job
    while (nodes.values.length) {
      smallest = nodes.dequeue().val;
      if (smallest === finish) {
        //Make the path shortest
        while (previous[smallest]) {
          path.push(smallest);
          smallest = previous[smallest];
        }
        break;
      }
      if (smallest || distances[smallest] !== Infinity) {
        let neighbors = this.adjancencyList[smallest];
        for (let neighbor in neighbors) {
          let nextNeighbor = neighbors[neighbor];
          let canditate = distances[smallest] + nextNeighbor.weight;
          if (canditate < distances[nextNeighbor.node]) {
            distances[nextNeighbor.node] = canditate;
            previous[nextNeighbor.node] = smallest;
            nodes.enqueue(nextNeighbor.node, canditate);
          }
        }
      }
    }
    return path.concat(smallest).reverse();
  }
}

let g = new Graphweighted();

g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");

g.addEdge("A", "B", 4);
g.addEdge("A", "C", 2);
g.addEdge("B", "E", 3);
g.addEdge("C", "D", 2);
g.addEdge("C", "F", 4);
g.addEdge("D", "E", 3);
g.addEdge("D", "F", 1);
g.addEdge("E", "F", 1);

// console.log(g.adjancencyList);
console.log(g.dijkstra("A", "E"));
