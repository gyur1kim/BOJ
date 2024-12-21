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

  /**
   * 한 섬에서 다른 섬까지 다리를 만들어 봅니다
   * @param {*} i
   * @param {*} j
   * @returns 다른 섬에 닿았을 때 그 거리
   */
  function buildBridge(i, j) {
    const directions = [
      [-1, 0],
      [0, 1],
      [1, 0],
      [0, -1],
    ];

    const visited = Array(N)
      .fill()
      .map(() => Array(N).fill(-1));
    const currentIslandLabel = map[i][j];

    let islandQueue = new Queue();
    let queue = new Queue();
    queue.enqueue([i, j]);
    visited[i][j] = 0;

    let min = Infinity;

    while (!queue.isEmpty()) {
      while (!queue.isEmpty()) {
        const [r, c] = queue.dequeue();

        for (let d = 0; d < 4; d++) {
          const [nr, nc] = [r + directions[d][0], c + directions[d][1]];

          if (checkOutOfRange(nr, nc)) continue;

          // 현재 내 섬이면 그냥 넣어
          if (map[nr][nc] === currentIslandLabel && visited[nr][nc] === -1) {
            islandQueue.enqueue([nr, nc]);
            visited[nr][nc] = 0;
          }
          // 바다면 visited를 업데이트 고
          else if (map[nr][nc] === 0 && visited[nr][nc] === -1) {
            queue.enqueue([nr, nc]);
            visited[nr][nc] = visited[r][c] + 1;
          }
          // 다른 섬 만나면 현재 visited return해! (물론 안 가본 섬으로)
          else if (map[nr][nc] !== currentIslandLabel && map[nr][nc] < 0) {
            min = Math.min(min, visited[r][c]);
          }
        }
      }

      queue = islandQueue;
      islandQueue = new Queue();
    }

    return min;
  }

  const input = `5
1 0 0 0 0
0 0 0 1 1
1 1 1 1 1
0 0 0 0 0
0 0 0 0 0`.split("\n");
  const N = Number(input.shift());
  const map = input.map((i) => i.split(" ").map(Number));
  let minBridge = Infinity;

  // 섬 번호매기기
  let islandLabel = -1;
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (map[i][j] === 1) {
        labelIsland(i, j, 1, islandLabel--);
      }
    }
  }

  // console.log(map);

  // 섬 하나씩 찾아보면서 다리 놓기
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (map[i][j] < 0) {
        const tmp = buildBridge(i, j);
        minBridge = Math.min(minBridge, tmp);
        labelIsland(i, j, map[i][j], 1);
      }
    }
  }

  console.log(minBridge);
}

main();
