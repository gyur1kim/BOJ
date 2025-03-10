function dfs(r, c) {
  if (r === N) return (answer += 1);

  const [nr, nc] = c + 1 === M ? [r + 1, 0] : [r, c + 1];

  // 1을 뒀을 때 내 위랑 왼쪽이랑 대각선 왼쪽 다 1이 아니면 1을 두고 dfs
  if (
    r - 1 < 0 ||
    c - 1 < 0 ||
    !NEMO_BOARD[r - 1][c - 1] ||
    !NEMO_BOARD[r - 1][c] ||
    !NEMO_BOARD[r][c - 1]
  ) {
    NEMO_BOARD[r][c] = 1;
    dfs(nr, nc);
  }

  NEMO_BOARD[r][c] = 0;
  dfs(nr, nc);
}

const [N, M] = `2 12`.split(" ").map(Number);
const NEMO_BOARD = Array(N)
  .fill()
  .map(() => Array(M).fill(0));
let answer = 0;

dfs(0, 0);
console.log(answer);
