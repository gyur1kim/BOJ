const shapes = [
  [
    [0, 0],
    [0, 1],
    [0, 2],
    [0, 3],
  ],
  [
    [0, 0],
    [1, 0],
    [2, 0],
    [3, 0],
  ],
  [
    [0, 0],
    [0, 1],
    [1, 0],
    [1, 1],
  ],
  [
    [-2, -1],
    [-1, -1],
    [0, -1],
    [0, 0],
  ],
  [
    [0, 0],
    [0, 1],
    [0, 2],
    [1, 0],
  ],
  [
    [0, 0],
    [0, 1],
    [1, 1],
    [2, 1],
  ],
  [
    [0, 0],
    [0, 1],
    [0, 2],
    [-1, 2],
  ],
  [
    [0, 0],
    [1, 0],
    [1, 1],
    [2, 1],
  ],
  [
    [0, 0],
    [0, 1],
    [1, 0],
    [1, -1],
  ],
  [
    [0, 0],
    [0, 1],
    [0, 2],
    [1, 1],
  ],
  [
    [0, 0],
    [1, 0],
    [2, 0],
    [1, -1],
  ],
  [
    [0, 0],
    [0, 1],
    [0, 2],
    [-1, 1],
  ],
  [
    [0, 0],
    [1, 0],
    [2, 0],
    [1, 1],
  ],
  [
    [0, 0],
    [1, 0],
    [2, 0],
    [2, -1],
  ],
  [
    [0, 0],
    [1, 0],
    [1, 1],
    [1, 2],
  ],
  [
    [0, 0],
    [1, 0],
    [2, 0],
    [0, 1],
  ],
  [
    [0, 0],
    [0, 1],
    [0, 2],
    [1, 2],
  ],
  [
    [0, 0],
    [1, 0],
    [0, 1],
    [-1, 1],
  ],
  [
    [0, 0],
    [0, 1],
    [1, 1],
    [1, 2],
  ],
];

let [NM, ...board] = `4 4
4 2 2 5
2 1 5 2
7 6 1 2
4 2 5 9
`.split("\n");
const [N, M] = NM.split(" ").map(Number);
board = board.map(b => b.split(" ").map(Number));

let max = -Infinity;

// 가장 숫자가 큰 경우를 구합시당
for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    max = Math.max(board[i][j], max);
  }
}

let answer = -1;

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    for (const shape of shapes) {
      let area = 0;

      for (let d = 0; d < 4; d++) {
        let [blockI, blockJ] = [shape[d][0] + i, shape[d][1] + j];
        if (blockI < 0 || blockI >= N || blockJ < 0 || blockJ >= M) {
          area = 0;
          break;
        }
        area += board[blockI][blockJ];
      }

      if (area === 0) continue;
      answer = Math.max(area, answer);

      if (answer === max * 4) {
        console.log(answer);
        process.exit(0);
      }
    }
  }
}

console.log(answer);
