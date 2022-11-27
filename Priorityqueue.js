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

let Emergency = new Priorityqueue();

Emergency.enqueue("common cold", 5);
Emergency.enqueue("gunshot wound", 1);
Emergency.enqueue("high fever", 4);
Emergency.enqueue("broken arm", 2);
Emergency.enqueue("glass in foot", 3);

let serve1 = Emergency.dequeue();
console.log(serve1);
