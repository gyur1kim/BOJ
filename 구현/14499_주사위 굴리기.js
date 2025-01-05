function solution(N, M, x, y, map, directions) {
  const dice = [0, 0, 0, 0, 0, 0, 0];

  const indices = {
    top: 1,
    east: 3,
    west: 4,
    south: 5,
    north: 2,
    bottom: 6,
  };

  const nextMove = {
    1: [0, 1],
    2: [0, -1],
    3: [-1, 0],
    4: [1, 0],
  };

  // updates는 value값이 key값으로 굴러가는거임
  const rotatePatterns = {
    1: {
      east: "top",
      top: "west",
      west: "bottom",
      bottom: "east",
    },
    2: {
      west: "top",
      top: "east",
      east: "bottom",
      bottom: "west",
    },
    3: {
      north: "top",
      top: "south",
      south: "bottom",
      bottom: "north",
    },
    4: {
      south: "top", // top이 south가 된다는 뜻
      top: "north",
      north: "bottom",
      bottom: "south",
    },
  };

  for (const direction of directions) {
    const [dx, dy] = nextMove[direction];
    const [nx, ny] = [x + dx, y + dy];

    // 범위를 벗어나면 출력도 하지 말고 무시
    if (!inRange(N, M, nx, ny)) continue;

    const pattern = rotatePatterns[direction];

    const nextBottomIndex = indices[pattern.bottom];
    copyBottom(map, nx, ny, dice, nextBottomIndex);

    // 주사위 굴리면서 index 업데이트
    for (const [to, from] of Object.entries(pattern)) {
      if (to === "bottom") indices.bottom = nextBottomIndex;
      else indices[to] = indices[from];
    }

    console.log(dice[indices.top]);

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
