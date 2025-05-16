class PriorityQueue {
  constructor(isMinHeap = true) {
    this.queue = [];
    this.isMinHeap = isMinHeap;
  }

  enqueue(item) {
    if (!this.isMinHeap) item *= -1;
    this.queue.push(item);
    this.heapifyUp();
  }

  dequeue() {
    if (this.queue.length === 0) return null;

    const item = this.queue[0];
    const last = this.queue.pop();

    if (this.queue.length > 0) {
      this.queue[0] = last;
      this.heapifyDown();
    }

    return this.isMinHeap ? item : item * -1;
  }

  isEmpty() {
    return this.queue.length === 0;
  }

  getLeftChildIdx(idx) {
    return idx * 2 + 1;
  }

  getRightChildIdx(idx) {
    return idx * 2 + 2;
  }

  getParentIdx(idx) {
    return Math.floor((idx - 1) / 2);
  }

  swap(idx1, idx2) {
    [this.queue[idx1], this.queue[idx2]] = [this.queue[idx2], this.queue[idx1]];
  }

  heapifyUp() {
    let idx = this.queue.length - 1;

    while (idx > 0) {
      const parentIdx = this.getParentIdx(idx);
      if (this.queue[parentIdx] > this.queue[idx]) {
        this.swap(parentIdx, idx);
        idx = parentIdx;
      } else {
        break;
      }
    }
  }

  heapifyDown() {
    let idx = 0;
    const length = this.queue.length;

    while (idx < length) {
      const leftIdx = this.getLeftChildIdx(idx);
      const rightIdx = this.getRightChildIdx(idx);
      let smallest = idx;

      if (leftIdx < length && this.queue[smallest] > this.queue[leftIdx]) {
        smallest = leftIdx;
      }
      if (rightIdx < length && this.queue[smallest] > this.queue[rightIdx]) {
        smallest = rightIdx;
      }

      if (smallest !== idx) {
        this.swap(idx, smallest);
        idx = smallest;
      } else {
        break;
      }
    }
  }
}

function solution(operations) {
  // pq는 최소힙으로 구현됨
  const MAX_PQ = new PriorityQueue(false);
  const MIN_PQ = new PriorityQueue(true);
  const numMap = new Map();

  for (const operation of operations) {
    let [o, val] = operation.split(" ");
    val = +val;

    switch (o) {
      case "I":
        MAX_PQ.enqueue(val);
        MIN_PQ.enqueue(val);
        numMap.set(val, (numMap.get(val) || 0) + 1);
        break;
      case "D":
        // 작은 값을 빼세요
        if (val === -1) dequeueVal(MIN_PQ);
        // 큰 값을 빼세요
        else dequeueVal(MAX_PQ);
    }
  }

  if (numMap.size === 0) return "EMPTY";

  const min = dequeueVal(MIN_PQ);
  const max = dequeueVal(MAX_PQ);

  if (max === null || min === null) return `${min} ${min}`;
  return `${max} ${min}`;

  function dequeueVal(PQ) {
    while (!PQ.isEmpty()) {
      const item = PQ.dequeue();

      if (!numMap.has(item)) continue;

      const cnt = numMap.get(item);
      cnt === 1 ? numMap.delete(item) : numMap.set(item, cnt - 1);

      return item;
    }
    return null;
  }
}

const input = `1
7
I 66
I 89
D 1
I 78
D 1
I 99
D -1`.split("\n");
const TC = input[0];
let idx = 1;
let ans = [];
for (let tc = 0; tc < TC; tc++) {
  let len = +input[idx];
  const operations = input.slice(idx + 1, idx + len + 1);
  const res = solution(operations);
  ans.push(res);
  idx += len + 1;
}
console.log(ans.join("\n"));
