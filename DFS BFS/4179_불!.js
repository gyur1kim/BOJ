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
    return this.tailIndex - this.headIndex === 0;
  }

  values() {
    return Object.values(this.items);
  }
}

const [RC, ...maze] = `7 7
....#.#
....#.#
....#.#
#####.#
.....J.
#######
.......`.split("\n");

// row사이즈(행) col 사이즈(열)
const [R, C] = RC.split(" ").map(Number);

function checkOutOfRange(nr, nc) {
  return nr < 0 || nr >= R || nc < 0 || nc >= C;
}

const directions = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1],
];

const visited = Array(R)
  .fill()
  .map(() => Array(C).fill(-1));

const jihoonQueue = new Queue();
const fireQueue = new Queue();

for (let i = 0; i < R; i++) {
  for (let j = 0; j < C; j++) {
    if (maze[i][j] === "F") {
      fireQueue.enqueue([i, j]);
      visited[i][j] = 0;
    } else if (maze[i][j] === "J") {
      jihoonQueue.enqueue([i, j]);
    }
  }
}

// 불 먼저 퍼트려봐봐
while (!fireQueue.isEmpty()) {
  const [r, c] = fireQueue.dequeue();

  for (let i = 0; i < 4; i++) {
    const [nr, nc] = [directions[i][0] + r, directions[i][1] + c];
    // R, C 범위 밖이면 건너뛰어
    if (checkOutOfRange(nr, nc)) continue;
    // 못 가는 길이면 건너뛰어
    if (maze[nr][nc] === "#" || maze[nr][nc] === "F") continue;
    // 이미 불 번졌으면 건너뛰어
    if (visited[nr][nc] !== -1) continue;

    visited[nr][nc] = visited[r][c] + 1;
    fireQueue.enqueue([nr, nc]);
  }
}

console.log(visited);

// 그다음 지훈이 함 움직여봐라
jihoonQueue.values().map(([i, j]) => (visited[i][j] = 0));

while (!jihoonQueue.isEmpty()) {
  const [r, c] = jihoonQueue.dequeue();

  for (let i = 0; i < 4; i++) {
    const [nr, nc] = [directions[i][0] + r, directions[i][1] + c];
    // R, C 범위 밖이면 넌 살아난겨 나가라
    if (checkOutOfRange(nr, nc)) {
      console.log(visited[r][c] + 1);
      return;
    }
    // 못 가는 길이면 건너뛰어
    if (maze[nr][nc] !== ".") continue;
    // 이미 불 번졌으면 건너뛰어
    if (visited[nr][nc] !== -1 && visited[nr][nc] <= visited[r][c] + 1)
      continue;

    visited[nr][nc] = visited[r][c] + 1;
    jihoonQueue.enqueue([nr, nc]);
  }
}

console.log("IMPOSSIBLE");

// function BFS(starts) {
//   let times = Infinity;

//   while (queue.size()) {
//     const [r, c] = queue.dequeue();

//     for (let i = 0; i < 4; i++) {
//       const [nextR, nextC] = [directions[i][0] + r, directions[i][1] + c];
//       // R, C 범위 밖이면 건너뛰어
//       if (nextR < 0 || nextR >= R || nextC < 0 || nextC > C) continue;
//       // 못 가는 길이면 건너뛰어
//       if (maze[nextR][nextC] === "#" || maze[nextR][nextC] === "F") continue;
//       // 다음에 갈 곳이 이미 누가 다녀간 숫자(크기?)보다 크면 가지마
//       if (visited[nextR][nextC] <= visited[r][c] + 1) continue;

//       visited[nextR][nextC] = visited[r][c] + 1;
//       times = visited[r][c] + 1;
//       queue.enqueue([nextR, nextC]);
//     }
//   }

//   return times;
// }

// const fireTime = BFS(firePosition);
// const jihoonTime = BFS(jihoonPosition);

// console.log(fireTime < jihoonTime ? "IMPOSSIBLE" : jihoonTime);
