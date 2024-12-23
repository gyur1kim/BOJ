class Queue {
  constructor() {
    this.items = {};
    this.headIndex = 0;
    this.tailIndex = 0;
  }

  enqueue(item) {
    this.items[this.tailIndex] = item;
    this.tailIndex += 1;
  }

  dequeue() {
    const item = this.items[this.headIndex];
    delete this.items[this.headIndex];
    this.headIndex += 1;
    return item;
  }

  isEmpty() {
    return this.tailIndex - this.headIndex === 0;
  }
}

function main() {
  const input = `3 3
0 0 0
0 0 -1
0 -1 1`.split("\n");

  // M이 column, N이 row
  const [M, N] = input.shift().split(" ").map(Number);
  const tomatoes = input.map((i) => i.split(" ").map(Number));

  let countUnripeTomato = 0;

  const queue = new Queue();

  // 일단 초기 상태에서 토마토 검사
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (tomatoes[i][j] === 0) {
        countUnripeTomato++;
      } else if (tomatoes[i][j] === 1) {
        queue.enqueue([i, j]);
      }
    }
  }

  // 안익은 토마토는 있는데 익은 토마토가 없으면 -1
  if (queue.isEmpty() && countUnripeTomato) {
    return -1;
  }

  // 안익은 토마토 없으면 return 0
  if (countUnripeTomato === 0) {
    return 0;
  }

  const day = bfs(queue);

  // 아직도 안익은 토마토가 있다면?
  if (countUnripeTomato) return -1;

  // 토마토가 익었으면 이거
  return day;

  function bfs(queue) {
    const directions = [
      [-1, 0],
      [0, 1],
      [1, 0],
      [0, -1],
    ];
    const visited = Array(N)
      .fill()
      .map(() => Array(M).fill(0));

    let day = -Infinity;

    while (!queue.isEmpty()) {
      const [r, c] = queue.dequeue();

      for (let d = 0; d < 4; d++) {
        const nr = r + directions[d][0];
        const nc = c + directions[d][1];

        if (!inRange(nr, nc)) continue;

        if (tomatoes[nr][nc] === 0 && visited[nr][nc] === 0) {
          visited[nr][nc] = visited[r][c] + 1;
          countUnripeTomato -= 1;
          day = Math.max(day, visited[r][c] + 1);
          queue.enqueue([nr, nc]);
        }
      }
    }

    return day;
  }

  function inRange(nr, nc) {
    return nr >= 0 && nr < N && nc >= 0 && nc < M;
  }
}

const result = main();
console.log(result);
