const [[N, M], ...input] = require("fs")
  .readFileSync(0, "utf-8")
  .trim()
  .split("\n")
  .map(e => e.split(" ").map(Number));
const matrix = Array(N + 1)
  .fill()
  .map(() => Array(M + 1).fill(0));
let answer = -Infinity;

for (let i = 1; i < N + 1; i++) {
  for (let j = 1; j < M + 1; j++) {
    matrix[i][j] = matrix[i - 1][j] + matrix[i][j - 1] - matrix[i - 1][j - 1] + input[i - 1][j - 1];
  }
}

for (let a = 1; a < N + 1; a++) {
  for (let b = 1; b < M + 1; b++) {
    for (let c = a; c < N + 1; c++) {
      for (let d = b; d < M + 1; d++) {
        const prefixSum = matrix[c][d] - matrix[a - 1][d] - matrix[c][b - 1] + matrix[a - 1][b - 1];

        answer = Math.max(prefixSum, answer);
      }
    }
  }
}

console.log(answer);
