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

  size() {
    return Object.entries(this.items).length;
  }
}

const [RC, ...maze] = `7 7
F....F.
.##.##.
.##.##.
...J...
.##.##.
.##.##.
F....F.`.split("\n");

// row사이즈(행) col 사이즈(열)
const [R, C] = RC.split(" ").map(Number);

const visited = Array(R)
  .fill()
  .map(() => Array(C).fill(0));

const jihoonQueue = new Queue();
const fireQueue = new Queue();

for (let i = 0; i < R; i++) {
  for (let j = 0; j < C; j++) {
    if (maze[i][j] === "F") {
      fireQueue.enqueue([i, j]);
      visited[i][j] = 1;
    } else if (maze[i][j] === "J") {
      jihoonQueue.enqueue([i, j]);
      visited[i][j] = 1;
    }
  }
}

const directions = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1],
];

// 불 먼저 퍼트려봐봐
while (fireQueue.size()) {
  const [r, c] = fireQueue.dequeue();

  for (let i = 0; i < 4; i++) {
    const [nextR, nextC] = [directions[i][0] + r, directions[i][1] + c];
    // R, C 범위 밖이면 건너뛰어
    if (nextR < 0 || nextR >= R || nextC < 0 || nextC > C) continue;
    // 못 가는 길이면 건너뛰어
    if (maze[nextR][nextC] !== ".") continue;
    // 이미 불 번졌으면 건너뛰어
    if (visited[nextR][nextC]) continue;

    visited[nextR][nextC] = visited[r][c] + 1;
    fireQueue.enqueue([nextR, nextC]);
  }
}

// 그다음 지훈이 함 움직여봐라
while (jihoonQueue.size()) {
  const [r, c] = jihoonQueue.dequeue();

  for (let i = 0; i < 4; i++) {
    const [nextR, nextC] = [directions[i][0] + r, directions[i][1] + c];
    // R, C 범위 밖이면 넌 살아난겨 나가라
    if (nextR < 0 || nextR >= R || nextC < 0 || nextC > C) {
      console.log(visited[r][c]);
      return;
    }
    // 못 가는 길이면 건너뛰어
    if (maze[nextR][nextC] !== ".") continue;
    // 이미 불 번졌으면 건너뛰어
    if (visited[nextR][nextC] <= visited[r][c] + 1) continue;

    visited[nextR][nextC] = visited[r][c] + 1;
    jihoonQueue.enqueue([nextR, nextC]);
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
