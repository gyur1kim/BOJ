// 최소힙 기반 우선순위 큐 구현 (메모리 효율적으로)
class MinHeap {
  constructor() {
    this.heap = [];
  }

  getParentIndex(index) {
    return Math.floor((index - 1) / 2);
  }

  getLeftChildIndex(index) {
    return 2 * index + 1;
  }

  getRightChildIndex(index) {
    return 2 * index + 2;
  }

  swap(index1, index2) {
    [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]];
  }

  enqueue(node) {
    this.heap.push(node);
    this.heapifyUp();
  }

  dequeue() {
    if (this.heap.length === 0) return null;

    const min = this.heap[0];
    const last = this.heap.pop();

    if (this.heap.length > 0) {
      this.heap[0] = last;
      this.heapifyDown();
    }

    return min;
  }

  heapifyUp() {
    let index = this.heap.length - 1;
    while (index > 0) {
      const parentIndex = this.getParentIndex(index);
      // 비용 기준으로 비교
      if (this.heap[parentIndex][1] > this.heap[index][1]) {
        this.swap(parentIndex, index);
        index = parentIndex;
      } else {
        break;
      }
    }
  }

  heapifyDown() {
    let index = 0;
    const length = this.heap.length;

    while (true) {
      const leftChildIndex = this.getLeftChildIndex(index);
      const rightChildIndex = this.getRightChildIndex(index);
      let smallest = index;

      // 왼쪽 자식이 존재하고 현재 노드보다 작으면 가장 작은 노드 갱신
      if (leftChildIndex < length && this.heap[leftChildIndex][1] < this.heap[smallest][1]) {
        smallest = leftChildIndex;
      }

      // 오른쪽 자식이 존재하고 현재 가장 작은 노드보다 작으면 가장 작은 노드 갱신
      if (rightChildIndex < length && this.heap[rightChildIndex][1] < this.heap[smallest][1]) {
        smallest = rightChildIndex;
      }

      // 현재 노드가 가장 작은 노드가 아니면 위치 교환
      if (smallest !== index) {
        this.swap(index, smallest);
        index = smallest;
      } else {
        break;
      }
    }
  }

  isEmpty() {
    return this.heap.length === 0;
  }
}

// 다익스트라 알고리즘 구현 (메모리 최적화)
function dijkstra(graph, start, end) {
  const distance = new Array(N + 1).fill(Infinity);
  distance[start] = 0;

  const minHeap = new MinHeap();
  minHeap.enqueue([start, 0]); // [노드, 거리]

  while (!minHeap.isEmpty()) {
    const [current, dist] = minHeap.dequeue();

    // 현재 거리가 이미 알려진 최소 거리보다 크면 무시
    if (dist > distance[current]) continue;

    // 목적지에 도달하면 바로 반환 (최적화)
    if (current === end) return dist;

    // 이웃 노드들 확인
    if (graph[current]) {
      for (const [next, cost] of graph[current]) {
        const newDist = dist + cost;

        if (newDist < distance[next]) {
          distance[next] = newDist;
          minHeap.enqueue([next, newDist]);
        }
      }
    }
  }

  return distance[end];
}

const inputs = `4
4
4 2 9
2 1 58
1 3 25
2 1 22
4 3`.split("\n");

const N = +inputs[0];
const M = +inputs[1];
const graph = Array.from({ length: N + 1 }, () => []);
for (let i = 2; i < M + 2; i++) {
  const [v, w, dist] = inputs[i].split(" ").map(Number);
  graph[v].push([w, dist]);
}
const [start, end] = inputs[M + 2].split(" ").map(Number);
const answer = dijkstra(graph, start, end);
console.log(answer);
