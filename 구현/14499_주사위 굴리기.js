function solution(N, M, x, y, map, directions) {
  // 위, 북, 동, 서, 남, 바닥
  let dice = [0, 0, 0, 0, 0, 0];
  let result = "";

  const nextMove = {
    1: [0, 1],
    2: [0, -1],
    3: [-1, 0],
    4: [1, 0],
  };

  for (const direction of directions) {
    const [dx, dy] = nextMove[direction];
    const [nx, ny] = [x + dx, y + dy];

    // 범위를 벗어나면 출력도 하지 말고 무시
    if (!inRange(N, M, nx, ny)) continue;

    const [x1, x2, x3, x4, x5, x6] = dice;
    switch (direction) {
      case 1:
        dice = [x4, x2, x1, x6, x5, x3];
        break;
      case 2:
        dice = [x3, x2, x6, x1, x5, x4];
        break;
      case 3:
        dice = [x5, x1, x3, x4, x6, x2];
        break;
      case 4:
        dice = [x2, x6, x3, x4, x1, x5];
        break;
    }

    copyBottom(map, nx, ny, dice, 5);

    result += `${dice[0]}\n`;
    x = nx;
    y = ny;
  }

  return result;
}

function inRange(N, M, nx, ny) {
  return 0 <= nx && nx < N && 0 <= ny && ny < M;
}

function copyBottom(map, nx, ny, dice, diceIndex) {
  // 지도에 값이 있으면 칸이 0이 되고 주사위 아래에 값 적용
  if (map[nx][ny]) {
    dice[diceIndex] = map[nx][ny];
    map[nx][ny] = 0;
  }
  // 지도 값이 0이면 주사위 바닥면 숫자 복사
  else {
    map[nx][ny] = dice[diceIndex];
  }
}

const input = `3 3 0 0 16
0 1 2
3 4 5
6 7 8
4 4 1 1 3 3 2 2 4 4 1 1 3 3 2 2`.split("\n");

const [N, M, x, y, K] = input[0].split(" ").map(Number);
const map = input.slice(1, 1 + N).map((l) => l.split(" ").map(Number));
const directions = input[1 + N].split(" ").map(Number);

const result = solution(N, M, x, y, map, directions);
console.log(result);
