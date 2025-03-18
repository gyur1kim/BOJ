// 최소힙 기반 우선순위 큐 구현 (메모리 효율적으로)
class MinHeap {
  constructor() {
    this.heap = [-1];
  }

  getParentIndex(index) {
    return Math.floor(index / 2);
  }

  getLeftChildIndex(index) {
    return 2 * index;
  }

  getRightChildIndex(index) {
    return 2 * index + 1;
  }

  swap(index1, index2) {
    [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]];
  }

  insert(node) {
    this.heap.push(node);
    this.heapifyUp();
  }

  pop() {
    if (this.heap.length === 1) return null;

    const minNode = this.heap[1];
    const last = this.heap.pop();

    if (this.heap.length > 1) {
      this.heap[1] = last;
      this.heapifyDown();
    }

    return minNode;
  }

  heapifyUp() {
    let index = this.heap.length - 1;

    while (index > 0) {
      const parentIndex = this.getParentIndex(index);
      if (this.heap[parentIndex].dist > this.heap[index].dist) {
        this.swap(parentIndex, index);
        index = parentIndex;
      } else {
        break;
      }
    }
  }

  heapifyDown() {
    let index = 1;
    const length = this.heap.length;

    while (true) {
      const leftChildIndex = this.getLeftChildIndex(index);
      const rightChildIndex = this.getRightChildIndex(index);
      let smallest = index;

      if (leftChildIndex < length && this.heap[leftChildIndex].dist < this.heap[smallest].dist) {
        smallest = leftChildIndex;
      }

      if (rightChildIndex < length && this.heap[rightChildIndex].dist < this.heap[smallest].dist) {
        smallest = rightChildIndex;
      }

      if (smallest !== index) {
        this.swap(index, smallest);
        index = smallest;
      } else {
        break;
      }
    }
  }

  isEmpty() {
    return this.heap.length === 1;
  }
}

// 다익스트라 알고리즘 구현 (메모리 최적화)
function dijkstra(graph, start, end) {
  const d = new Array(N + 1).fill(Infinity);
  d[start] = 0;

  const minHeap = new MinHeap();
  minHeap.insert({ node: start, dist: 0 });

  while (!minHeap.isEmpty()) {
    const { node: v, dist } = minHeap.pop();

    // 최단 거리가 아니면 무시
    if (dist > d[v]) continue;

    if (v === end) break;

    // 이웃 노드들 확인
    if (graph[v]) {
      for (const { node: w, dist: distW } of graph[v]) {
        const newDist = dist + distW;

        if (newDist < d[w]) {
          d[w] = newDist;
          minHeap.insert({ node: w, dist: newDist });
        }
      }
    }
  }

  return d[end];
}

const inputs = `5
8
1 2 2
1 3 3
1 4 1
1 5 10
2 4 2
3 4 1
3 5 1
4 5 3
1 5`.split("\n");

const N = +inputs[0];
const M = +inputs[1];
const graph = Array.from({ length: N + 1 }, () => []);
for (let i = 2; i < M + 2; i++) {
  const [v, w, dist] = inputs[i].split(" ").map(Number);
  graph[v].push({ node: w, dist });
}

const [start, end] = inputs[M + 2].split(" ").map(Number);
const answer = dijkstra(graph, start, end);
console.log(answer);
