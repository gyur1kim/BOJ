class Queue {
  constructor() {
    this.items = {};
    this.headIndex = 0;
    this.tailIndex = 0;
  }

  enqueue(item) {
    this.items[this.tailIndex] = item;
    this.tailIndex++;
  }

  dequeue() {
    const item = this.items[this.headIndex];
    delete this.items[this.headIndex];
    this.headIndex++;
    return item;
  }

  isEmpty() {
    return this.headIndex - this.tailIndex === 0;
  }
}

function main() {
  const input = `10
1 1 1 0 0 0 0 1 1 1
1 1 1 1 0 0 0 0 1 1
1 0 1 1 0 0 0 0 1 1
0 0 1 1 1 0 0 0 0 1
0 0 0 1 0 0 0 0 0 1
0 0 0 0 0 0 0 0 0 1
0 0 0 0 0 0 0 0 0 0
0 0 0 0 1 1 0 0 0 0
0 0 0 0 1 1 1 0 0 0
0 0 0 0 0 0 0 0 0 0`.split("\n");
  const N = Number(input.shift());
  const map = input.map((i) => i.split(" ").map(Number));
  let minBridge = Infinity;

  // 섬 번호매기기
  let lslandLabel = -1;
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (map[i][j] === 1) {
        labelIsland(i, j, 1, lslandLabel--);
      }
    }
  }

  // 섬 하나씩 찾아보면서 다리 놓기
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (map[i][j] < 0) {
        buildBridge(i, j);
        labelIsland(i, j, map[i][j], 1);
      }
    }
  }
}

/**
 * 범위 밖인지
 * @param {*} nr next row(행)
 * @param {*} nc next column(열)
 * @returns true or false
 */
function checkOutOfRange(nr, nc) {
  return nr < 0 || nr >= N || nc < 0 || nc >= N;
}

/**
 *
 * @param {*} i row
 * @param {*} j column
 * @param {*} target 이 값을
 * @param {*} newLabel 이 값으로 바꿀래요
 */
function labelIsland(i, j, target, newLabel) {
  const directions = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1],
  ];

  const queue = new Queue();
  queue.enqueue([i, j]);

  while (!queue.isEmpty()) {
    const [r, c] = queue.dequeue();
    map[r][c] = newLabel;

    for (let d = 0; d < 4; d++) {
      const [nr, nc] = [directions[d][0] + r, directions[d][1] + c];

      if (checkOutOfRange(nr, nc)) continue;

      if (map[nr][nc] === target) {
        queue.enqueue([nr, nc]);
        map[nr][nc] = newLabel;
      }
    }
  }
}

function buildBridge(r, c) {
  const directions = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1],
  ];

  const visited = Array(N)
    .fill()
    .map(() => Array(N).fill(false));
  const currentIslandLabel = map[r][c];
  let tempCnt = 1;

  const queue = new Queue();
  queue.enqueue([r, c]);
  visited[r][c] = true;

  while (!queue.isEmpty()) {}
}
