class Maxheap {
  constructor() {
    this.values = [];
  }
  insert(val) {
    this.values.push(val);
    this.bubbleUp();
  }
  bubbleUp() {
    let idx = this.values.length - 1;
    let element = this.values[idx];
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parentElement = this.values[parentIdx];
      if (element <= parentElement) break;
      this.values[parentIdx] = element;
      this.values[idx] = parentElement;
      idx = parentIdx;
    }
  }

  remove() {
    let max = this.values[0];
    let end = this.values.pop();
    this.values[0] = end;
    this.bubbleDown();
    return max;
  }

  bubbleDown() {
    let idx = 0;
    let length = this.values.length;
    let element = this.values[0];

    function swapWithLeftChild(leftChildIndex, currentIndex, values) {
      leftChild = values[leftChildIndex];
      values[leftChildIndex] = values[currentIndex];
      values[currentIndex] = leftChild;

      idx = leftChildIndex;
      return;
    }

    function swapWithRightChild(rightChildIndex, currentIndex, values) {
      rightChild = values[rightChildIndex];
      values[rightChildIndex] = values[currentIndex];
      values[currentIndex] = rightChild;

      idx = rightChildIndex;
      return;
    }

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
        if (leftChild > element) {
          swaped = leftChildIdx;
        }
      }

      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx];
        if (
          (swaped === null && rightChild > element) ||
          (swaped !== null && rightChild > leftChild)
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

let binaryHeap1 = new Maxheap();
let yoo = [41, 39, 33, 18, 27, 12, 55, 88, 92];
yoo.map((val) => binaryHeap1.insert(val));

console.log(binaryHeap1.values);

let val1 = binaryHeap1.remove();

console.log(val1);
console.log(binaryHeap1.values);

let val2 = binaryHeap1.remove();

console.log(val2);
console.log(binaryHeap1.values);

let val3 = binaryHeap1.remove();

console.log(val3);
console.log(binaryHeap1.values);

let val4 = binaryHeap1.remove();

console.log(val4);
console.log(binaryHeap1.values);
//   33
// 44  55

// check if there is right and left
//check which is bigger left or right
// the one which is bigger check if it is bigger than element right
//if yes swap other wise no
