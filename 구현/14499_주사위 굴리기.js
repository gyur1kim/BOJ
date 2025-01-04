function solution(N, M, x, y, map, directions) {
  // 주사위 전개도 숫자들 있져? 그거 idx맞춰서 봐
  // 그래서 idx 0은 걍 빈 값임
  // 아래, 북쪽, 동쪽, 서쪽, 남쪽, 위
  const dice = [0, 0, 0, 0, 0, 0, 0];
  let topIndex = 1;
  let eastIndex = 3;
  let westIndex = 4;
  let southIndex = 5;
  let northIndex = 2;

  const nextMove = {
    1: [0, 1], // 동
    2: [0, -1], // 서
    3: [-1, 0], // 북
    4: [1, 0], // 남
  };

  for (const direction of directions) {
    const [dx, dy] = nextMove[direction];
    const [nx, ny] = [x + dx, y + dy];

    // 범위를 벗어나면 출력도 하지 말고 무시
    if (!inRange(N, M, nx, ny)) continue;

    let tmpTopIndex = topIndex;
    if (direction === 1) {
      // 동쪽으로 굴리면
      // 원래 동쪽에 있던 애가 바닥으로 가게 됨 -> dice 업데이트
      copyBottom(map, nx, ny, dice, eastIndex);

      // 기존의 top -> 동쪽
      // 기존의 서쪽 -> top
      // 기존의 bottom(== 7 - 기존top) -> 서쪽
      eastIndex = topIndex;
      topIndex = westIndex;
      westIndex = 7 - tmpTopIndex;
    } else if (direction === 2) {
      // 서쪽으로 굴리면
      // 원래 서쪽에 있던 애가 바닥으로 가게 됨 -> dice 업데이트
      copyBottom(map, nx, ny, dice, westIndex);

      // 기존의 top -> 서쪽
      // 기존의 동쪽 -> top
      // 기존의 bottom(== 7 - top) -> 동쪽
      westIndex = topIndex;
      topIndex = eastIndex;
      eastIndex = 7 - tmpTopIndex;
    } else if (direction === 3) {
      // 뷱쪽으로 굴리면
      // 원래 북쪽에 있던 애가 바닥으로 가게 됨 -> dice 업데이트
      copyBottom(map, nx, ny, dice, northIndex);

      // 기존의 top -> 북쪽
      // 기존의 남쪽 -> top
      // 기존의 bottom(== 7 - top) -> 남쪽
      northIndex = topIndex;
      topIndex = southIndex;
      southIndex = 7 - tmpTopIndex;
    } else if (direction === 4) {
      // 남쪽으로 굴리면
      // 원래 남쪽에 있던 애가 바닥으로 가게 됨 -> dice 업데이트
      copyBottom(map, nx, ny, dice, southIndex);

      // 기존의 top -> 남쪽
      // 기존의 북쪽 -> top
      // 기존의 bottom(== 7 - top) -> 북쪽
      southIndex = topIndex;
      topIndex = northIndex;
      northIndex = 7 - tmpTopIndex;
    }

    console.log(dice[topIndex]);

    x = nx;
    y = ny;
  }
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

solution(N, M, x, y, map, directions);
