/**
 * 내 위치에서 대각선 기준으로 다른 퀸 없는지 확인
 */
function noQueenOnDiag(row, col, N, answer) {
  let gap = Math.min(row - 1, col - 1);
  let tmpRow = row - gap;
  let tmpCol = col - gap;

  while (tmpRow <= N && tmpCol <= N) {
    if (answer[tmpRow] === tmpCol) return false;
    tmpRow++;
    tmpCol++;
  }

  gap = Math.min(row - 1, N - col);
  tmpRow = row - gap;
  tmpCol = col + gap;
  while (tmpRow <= N && tmpCol >= 1) {
    if (answer[tmpRow] === tmpCol) return false;
    tmpRow++;
    tmpCol--;
  }

  return true;
}

// answer의 idx는 행, answer[idx]는 열입니다.
// answer[1] === 3 이라면, 1행 3열에 퀸이 있다는 뜻입니다.
function queen(row, N, columnArray, answer) {
  if (row > N) {
    answer.shift();
    return true;
  }

  // 행에 퀸이 없어야 함.
  if (answer[row]) return queen(row + 1, N, columnArray, answer);

  // 열에 퀸이 없어야 함.
  let result = false;
  for (let col = 1; col <= N; col++) {
    if (columnArray[col]) continue;
    if (!noQueenOnDiag(row, col, N, answer)) continue;

    answer[row] = col;
    columnArray[col] = true;

    result = queen(row + 1, N, columnArray, answer);
    if (result) return true;

    answer[row] = 0;
    columnArray[col] = false;
  }

  return false;
}

const [N, ...Q] = `10
3 0 0 0 0 0 0 0 0 0`
  .split(/\s+/)
  .map(Number);
const answer = [0, ...Q];
const columnArray = Array(N + 1).fill(false);
for (let i = 0; i <= N; i++) {
  if (answer[i]) columnArray[answer[i]] = true;
}

const result = queen(1, N, columnArray, answer);
console.log(result ? `${answer.join(" ")}` : -1);
// if (result) console.log(answer.join(" "));
// if (!result) console.log(-1);
