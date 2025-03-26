const inputs = `5 2 6
2 3 2 3 2
2 3 2 3 2
2 3 2 3 2
2 3 2 3 2
2 3 2 3 2
2 1 3
3 2 3`.split("\n");
const [N, M, K] = inputs.shift().split(" ").map(Number);
const A = inputs.slice(0, N).map(input => input.split(" ").map(Number));

// 나무를 심을 땅
const ground = Array(N)
  .fill()
  .map(() => Array(N).fill(5));
let aliveTrees = inputs.slice(N, N + M).map(input => input.split(" ").map(Number));
let deadTrees = [];
aliveTrees.sort((a, b) => b[2] - a[2]); //   어린 나무가 뒤로 가게 정렬

for (let k = 0; k < K; k++) {
  aliveTrees = spring(ground, aliveTrees, deadTrees);
  summer(ground, deadTrees);
  aliveTrees = fall(aliveTrees);
  winter(ground, A);
}

console.log(aliveTrees.length);

/**
 * 봄
 *
 * 나무가 자신의 나이만큼 양분을 먹음
 * 나무의 나이가 1 증가함
 * 나이가 어린 나무부터 양분을 먹음
 * 땅에 양분이 부족하면 나무는 죽음.
 */
function spring(ground, aliveTrees, deadTrees) {
  const newAliveTrees = [];

  while (aliveTrees.length) {
    const [r, c, year] = aliveTrees.pop();

    if (ground[r - 1][c - 1] < year) {
      deadTrees.push([r, c, year]);
      continue;
    }

    ground[r - 1][c - 1] -= year;
    const newYear = year + 1;
    newAliveTrees.push([r, c, newYear]);
  }

  return newAliveTrees;
}

/**
 * 여름
 *
 * 죽은 나무가 양분으로 변함
 * 양분은, 각각 죽은 나무마다 나이를 2로 나눔. (소수점은 버림)
 */
function summer(ground, deadTrees) {
  while (deadTrees.length) {
    const [r, c, year] = deadTrees.pop();
    ground[r - 1][c - 1] += Math.floor(year / 2);
  }
}

/**
 * 가을
 *
 * 나무가 번식함
 * 나무의 나이는 5의 배수여야 함
 * 인접한 8칸에 나이가 1인 나무가 생김.
 */
function fall(aliveTrees) {
  const directions = [
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [0, -1],
    [0, 1],
    [1, -1],
    [1, 0],
    [1, 1],
  ];
  const newAliveTrees = [];

  while (aliveTrees.length) {
    const [r, c, year] = aliveTrees.pop();
    newAliveTrees.push([r, c, year]);

    if (year % 5 !== 0) continue;

    for (const [dr, dc] of directions) {
      const [nr, nc] = [r + dr, c + dc];

      if (nr - 1 < 0 || nr - 1 >= N || nc - 1 < 0 || nc - 1 >= N) continue;

      newAliveTrees.push([nr, nc, 1]);
    }
  }

  newAliveTrees.sort((a, b) => b[2] - a[2]);
  return newAliveTrees;
}

/**
 * 겨울에는 땅에 양분을 추가함.
 * A[r][c]
 */
function winter(ground, A) {
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      ground[i][j] += A[i][j];
    }
  }
}
