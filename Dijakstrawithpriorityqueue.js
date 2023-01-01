class Priorityqueue {
  constructor() {
    this.values = [];
  }
  enqueue(val, priority) {
    let newNode = new Node(val, priority);
    this.values.push(newNode);
    this.bubbleUp();
  }
  bubbleUp() {
    let idx = this.values.length - 1;
    let element = this.values[idx];
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parentElement = this.values[parentIdx];
      if (element.priority >= parentElement.priority) break;
      this.values[parentIdx] = element;
      this.values[idx] = parentElement;
      idx = parentIdx;
    }
  }

  dequeue() {
    let min = this.values[0];
    let end = this.values.pop();
    this.values[0] = end;
    this.bubbleDown();
    return min;
  }

  bubbleDown() {
    let idx = 0;
    let length = this.values.length;
    let element = this.values[0];

    while (true) {
      // console.log("loop is running again with index", idx);
      var swaped;
      var leftChildIdx;
      var rightChildIdx;
      var leftChild, rightChild;
      leftChildIdx = 2 * idx + 1;
      rightChildIdx = 2 * idx + 2;
      swaped = null;

      // if()

      if (leftChildIdx < length) {
        leftChild = this.values[leftChildIdx];
        if (leftChild.priority < element.priority) {
          swaped = leftChildIdx;
        }
      }

      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx];
        if (
          (swaped === null && rightChild.priority < element.priority) ||
          (swaped !== null && rightChild.priority < leftChild.priority)
        ) {
          swaped = rightChildIdx;
        }
      }

      if (swaped === null) break;
      this.values[idx] = this.values[swaped];
      this.values[swaped] = element;
      idx = swaped;
    }
  }
}

class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
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
