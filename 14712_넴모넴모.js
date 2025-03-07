const [N, M] = `25 25`.split(" ").map(Number);
const TOTAL = M * N;
const NEMO_BOARD = Array(N)
  .fill()
  .map(() => Array(M).fill(0));
let answer = 1 + TOTAL; // 아무것도 안 놓은 경우 게임 종료 + 1개만 놓은 경우 게임 종료

function checkAround(i, j) {
  return (
    checkLeftTop(i, j) && checkLeftBottom(i, j) && checkRightTop(i, j) && checkRightBottom(i, j)
  );
}

function checkInRange(nr, nc) {
  return 0 <= nr && nr < N && 0 <= nc && nc < M;
}

function checkLeftTop(i, j) {
  let cntNemo = 0;
  if (checkInRange(i - 1, j - 1) && checkInRange(i - 1, j) && checkInRange(i, j - 1)) {
    cntNemo = NEMO_BOARD[i - 1][j - 1] + NEMO_BOARD[i - 1][j] + NEMO_BOARD[i][j - 1];
  }
  return cntNemo !== 3;
}

function checkRightTop(i, j) {
  let cntNemo = 0;
  if (checkInRange(i - 1, j) && checkInRange(i - 1, j + 1) && checkInRange(i, j + 1)) {
    cntNemo = NEMO_BOARD[i - 1][j] + NEMO_BOARD[i - 1][j + 1] + NEMO_BOARD[i][j + 1];
  }
  return cntNemo !== 3;
}

function checkLeftBottom(i, j) {
  let cntNemo = 0;
  if (checkInRange(i, j - 1) && checkInRange(i + 1, j - 1) && checkInRange(i + 1, j)) {
    cntNemo = NEMO_BOARD[i][j - 1] + NEMO_BOARD[i + 1][j - 1] + NEMO_BOARD[i + 1][j];
  }
  return cntNemo !== 3;
}

function checkRightBottom(i, j) {
  let cntNemo = 0;
  if (checkInRange(i, j + 1) && checkInRange(i + 1, j) && checkInRange(i + 1, j + 1)) {
    cntNemo = NEMO_BOARD[i][j + 1] + NEMO_BOARD[i + 1][j] + NEMO_BOARD[i + 1][j + 1];
  }
  return cntNemo !== 3;
}

function combination(idx, cnt, target) {
  if (cnt === target) {
    // console.log(NEMO_BOARD);
    answer += 1;
    return;
  }

  for (let nextIdx = idx; nextIdx < TOTAL; nextIdx++) {
    const row = Math.floor(nextIdx / M);
    const col = nextIdx % M;

    if (checkAround(row, col) && NEMO_BOARD[row][col] === 0) {
      NEMO_BOARD[row][col] = 1;
      combination(nextIdx + 1, cnt + 1, target);
      NEMO_BOARD[row][col] = 0;
    }
  }
}

// 놓아볼 넴모의 개수 (2개부터)
for (let target = 2; target < TOTAL; target++) {
  combination(0, 0, target);
}

console.log(answer);
