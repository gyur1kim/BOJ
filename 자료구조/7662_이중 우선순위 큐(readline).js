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

  clear() {
    this.queue = [];
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

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const MAX_PQ = new PriorityQueue(false);
const MIN_PQ = new PriorityQueue(true);
const numMap = new Map();
const ans = [];
let idx = 0;
let endIdx = 0;

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

rl.on("line", line => {
  if (idx === 0) {
    idx++;
    return;
  }

  if (idx > endIdx) {
    endIdx = Number(line) + idx;

    MIN_PQ.clear();
    MAX_PQ.clear();
    numMap.clear();
    idx += 1;
    return;
  }

  let [o, val] = line.split(" ");
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

  if (idx === endIdx) {
    if (numMap.size === 0) {
      ans.push("EMPTY");
      idx++;
      return;
    }

    const min = dequeueVal(MIN_PQ);
    const max = dequeueVal(MAX_PQ);

    if (max === null || min === null) ans.push(`${min} ${min}`);
    else ans.push(`${max} ${min}`);
  }

  idx++;
});

rl.on("close", () => {
  console.log(ans.join("\n"));
});
