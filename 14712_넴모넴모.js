function dfs(r, c) {
  if (r === N) {
    for (let i = 0; i < N - 1; i++) {
      for (let j = 0; j < M - 1; j++) {
        if (
          NEMO_BOARD[i][j] &&
          NEMO_BOARD[i + 1][j] &&
          NEMO_BOARD[i][j + 1] &&
          NEMO_BOARD[i + 1][j + 1]
        ) {
          return;
        }
      }
    }

    answer += 1;
    return;
  }

  const [nr, nc] = c + 1 === M ? [r + 1, 0] : [r, c + 1];

  // 해당 위치에 넴모를 배치하거나 안하거나
  NEMO_BOARD[r][c] = 1;
  dfs(nr, nc);

  NEMO_BOARD[r][c] = 0;
  dfs(nr, nc);
}

const [N, M] = `1 25`.split(" ").map(Number);
const NEMO_BOARD = Array(N)
  .fill()
  .map(() => Array(M).fill(0));
let answer = 0;

dfs(0, 0);
console.log(answer);
