class MinHeap {
  constructor() {
    this.heap = [-1];
  }

  getParentIndex(idx) {
    return Math.floor(idx / 2);
  }

  getLeftChildIndex(idx) {
    return idx * 2;
  }

  getRightChildIndex(idx) {
    return idx * 2 + 1;
  }

  swap(idx1, idx2) {
    [this.heap[idx1], this.heap[idx2]] = [this.heap[idx2], this.heap[idx1]];
  }

  isEmpty() {
    return this.heap.length === 1;
  }

  insert(node) {
    this.heap.push(node);
    this.heapifyUp();
  }

  heapifyUp() {
    let index = this.heap.length - 1;

    while (index > 1) {
      let parentIndex = this.getParentIndex(index);

      if (this.heap[parentIndex][1] > this.heap[index][1]) {
        this.swap(index, parentIndex);
        index = parentIndex;
      } else {
        break;
      }
    }
  }

  pop() {
    if (this.heap.length === 1) return null;

    const node = this.heap[1];
    const last = this.heap.pop();

    if (this.heap.length > 1) {
      this.heap[1] = last;
      this.heapifyDown();
    }

    return node;
  }

  heapifyDown() {
    let index = 1;

    while (true) {
      let leftChildIndex = this.getLeftChildIndex(index);
      let rightChildIndex = this.getRightChildIndex(index);
      let smallest = index;
      if (leftChildIndex < this.heap.length && this.heap[leftChildIndex][1] < this.heap[smallest][1]) {
        smallest = leftChildIndex;
      }

      if (rightChildIndex < this.heap.length && this.heap[rightChildIndex][1] < this.heap[smallest][1]) {
        smallest = rightChildIndex;
      }

      if (smallest !== index) {
        this.swap(smallest, index);
        index = smallest;
      } else {
        break;
      }
    }
  }
}

let [NMX, ...inputs] = `4 8 2
1 2 4
1 3 2
1 4 7
2 1 1
2 3 5
3 1 2
3 4 4
4 2 3`.split("\n");
const [N, M, X] = NMX.split(" ").map(Number);
inputs = inputs.map(i => i.split(" ").map(Number));

// graph[1] = [2, 4]
// 1에서 2로 가는 시간은 4라는 뜻
const graph = Array(N + 1)
  .fill()
  .map(() => []);
const reverseGraph = Array(N + 1)
  .fill()
  .map(() => []);

for (const [start, end, cost] of inputs) {
  graph[start].push([end, cost]);
  reverseGraph[end].push([start, cost]);
}

// 거꾸로 그래프로 사람들이 X까지 가는데 최단시간을 구함
// 원래같으면 시작점이 각 마을, 도착점이 X겠지만
// 그래프를 반대로 해놔서 X에서 각 마을까지 최단시간을 구할 수 있음.
// 즉 원래는 마을 -> X인데, X->마을의 가중치를 저장해둔거임 (물론 오는 경로로..)
const goResult = dijkstra(X, reverseGraph);

// 반대로 X에서 사람들이 다 집으로 갈거야
const returnResult = dijkstra(X, graph);

let maxTime = 0;
for (let i = 1; i <= N; i++) {
  maxTime = Math.max(maxTime, goResult[i] + returnResult[i]);
}
console.log(maxTime);

function dijkstra(start, graph) {
  const table = Array(N + 1).fill(Infinity);
  const pq = new MinHeap();

  table[start] = 0;
  pq.insert([start, 0]);

  while (!pq.isEmpty()) {
    const [v, dist] = pq.pop();

    if (dist > table[v]) continue; // 테이블에 최소거리보다 길면 ㄴㄴ
    // if (v === end) return table[end]; // 최소거리가 내가 구한 목적지면 리턴

    for (const [w, wDist] of graph[v]) {
      const newDist = table[v] + wDist;
      if (table[w] > newDist) {
        table[w] = newDist;
        pq.insert([w, newDist]);
      }
    }
  }

  return table;
}
