function solution(N, M, matrix) {
  const prefixMatrix = Array(N + 1)
    .fill()
    .map(() => Array(M + 1).fill(0));
  let answer = -Infinity;

  for (let i = 1; i < N + 1; i++) {
    for (let j = 1; j < M + 1; j++) {
      prefixMatrix[i][j] =
        prefixMatrix[i - 1][j] +
        prefixMatrix[i][j - 1] -
        prefixMatrix[i - 1][j - 1] +
        matrix[i - 1][j - 1];
    }
  }

  for (let a = 1; a < N + 1; a++) {
    for (let b = 1; b < M + 1; b++) {
      for (let c = a; c < N + 1; c++) {
        for (let d = b; d < M + 1; d++) {
          const prefixSum =
            prefixMatrix[c][d] -
            prefixMatrix[a - 1][d] -
            prefixMatrix[c][b - 1] +
            prefixMatrix[a - 1][b - 1];

          answer = Math.max(prefixSum, answer);
        }
      }
    }
  }

  console.log(answer);
}

const [NM, ...inputs] = `2 4
3 -5 0 5
3 2 2 -5`.split("\n");

const [N, M] = NM.split(" ").map(Number);
const matrix = inputs.map(input => input.split(" ").map(Number));

solution(N, M, matrix);
