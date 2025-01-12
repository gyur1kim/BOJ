function solution(N, map) {
  let stack = [];
  let nextStack = [];
  const visited = Array(N)
    .fill()
    .map(() => Array(N).fill(false));

  // 상어 위치 찾기
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (map[i][j] === 9) {
        nextStack.push([i, j]);
        visited[i][j] = true;
        map[i][j] = 0;
        break;
      }
    }
    if (nextStack.length) break;
  }

  /**
   * 상어 위치에서 bfs를 진행한다.
   * 상어의 크기보다 숫자가 작은 물고기를 찾는다.(=먹을 수 있는 물고기를 찾는다.)
   * 하나 찾으면, 그 depth랑 같은 물고기들이 있는지 찾아보고 bfs를 마친다.
   * 물고기들이 여러 마리면, 가장 위(r값이 가장 작음), 그리고 가장 왼쪽(c값이 가장 작음)의 위치를 찾는다.
   * 그 위치는 0이 되고, 상어는 먹은 생선 개수를 ++한다.
   * 상어가 먹은 물고기 개수가 상어의 크기와 같아지면 상어의 크기가 하나 커진다.
   * 상어 위치를 거기로 다시 옮긴다.
   * bfs를 다시 진행한다.
   */

  const directions = [
    [-1, 0],
    [0, -1],
    [1, 0],
    [0, 1],
  ];

  let sharkSize = 2;
  let countSharkEat = 0;
  let seconds = 0;
  let answer = 0;

  while (nextStack.length) {
    stack = nextStack.sort((a, b) => (b[0] - a[0] === 0 ? b[1] - a[1] : b[0] - a[0]));
    nextStack = [];

    while (stack.length) {
      const [r, c] = stack.pop();

      // 상어가 먹을 수 있는 생선 발견~!
      if (map[r][c] !== 0 && map[r][c] < sharkSize) {
        nextStack = [[r, c]];
        stack = [];

        visited.map(v => v.fill(false));
        visited[r][c] = true;
        map[r][c] = 0;

        countSharkEat++;
        if (countSharkEat === sharkSize) {
          sharkSize++;
          countSharkEat = 0;
        }
        answer = seconds--;
        break;
      }

      for (const [dr, dc] of directions) {
        const [nr, nc] = [r + dr, c + dc];
        if (!checkRange(N, nr, nc) || visited[nr][nc]) continue;

        if (map[nr][nc] <= sharkSize) {
          nextStack.push([nr, nc]);
          visited[nr][nc] = true;
        }
      }
    }

    seconds++;
  }

  console.log(answer);
}

function checkRange(N, nr, nc) {
  return 0 <= nr && nr < N && 0 <= nc && nc < N;
}

const [N, ...inputs] = `6
5 4 3 2 3 4
4 3 2 3 4 5
3 2 9 5 6 6
2 1 2 3 4 5
3 2 1 6 5 4
6 6 6 6 6 6`.split("\n");
const map = inputs.map(input => input.split(" ").map(Number));

solution(+N, map);

// ==================================
// 기존 class Queue 코드

// class Queue {
//   constructor() {
//     this.items = {};
//     this.headIndex = 0;
//     this.tailIndex = 0;
//   }

//   enqueue(item) {
//     this.items[this.tailIndex] = item;
//     this.tailIndex++;
//   }

//   dequeue() {
//     const item = this.items[this.headIndex];
//     delete this.items[this.headIndex];
//     this.headIndex++;
//     return item;
//   }

//   isEmpty() {
//     return this.tailIndex - this.headIndex === 0;
//   }
// }

// function solution(N, map) {
//   let sharkPos;
//   for (let i = 0; i < N; i++) {
//     for (let j = 0; j < N; j++) {
//       if (map[i][j] === 9) {
//         sharkPos = [i, j];
//         break;
//       }
//     }
//     if (sharkPos) break;
//   }

//   let sharkSize = 2;
//   let countSharkEat = 0;
//   let seconds = 0;

//   while (true) {
//     const [result, min] = bfs(sharkPos, sharkSize, N, map);
//     if (!result.length) break;

//     result.sort((a, b) => (a[0] === b[0] ? a[1] - b[1] : a[0] - b[0]));
//     sharkPos = result[0];
//     map[sharkPos[0]][sharkPos[1]] = 0;

//     countSharkEat++;
//     if (countSharkEat === sharkSize) {
//       sharkSize++;
//       countSharkEat = 0;
//     }

//     seconds += min;
//   }

//   console.log(seconds);
// }

// function bfs(sharkPos, sharkSize, N, map) {
//   const directions = [
//     [-1, 0],
//     [0, -1],
//     [1, 0],
//     [0, 1],
//   ];
//   const visited = Array(N)
//     .fill()
//     .map(() => Array(N).fill(-1));
//   const queue = new Queue();

//   const closestFishList = [];
//   let seconds = Infinity;

//   queue.enqueue(sharkPos);
//   visited[sharkPos[0]][sharkPos[1]] = 0;
//   map[sharkPos[0]][sharkPos[1]] = 0;

//   while (!queue.isEmpty()) {
//     const [r, c] = queue.dequeue();

//     for (const [dr, dc] of directions) {
//       if (seconds < visited[r][c] + 1) return [closestFishList, seconds];

//       const [nr, nc] = [r + dr, c + dc];
//       if (!checkRange(N, nr, nc) || visited[nr][nc] !== -1) continue;

//       if (!map[nr][nc] || map[nr][nc] === sharkSize) {
//         queue.enqueue([nr, nc]);
//         visited[nr][nc] = visited[r][c] + 1;
//       } else if (map[nr][nc] && map[nr][nc] < sharkSize) {
//         closestFishList.push([nr, nc]);
//         visited[nr][nc] = visited[r][c] + 1;
//         seconds = visited[nr][nc];
//       }
//     }
//   }

//   return [closestFishList, seconds];
// }

// function checkRange(N, nr, nc) {
//   return 0 <= nr && nr < N && 0 <= nc && nc < N;
// }

// const [N, ...inputs] = require("fs").readFileSync(0, "utf-8").trim().split("\n");
// const map = inputs.map(input => input.split(" ").map(Number));

// solution(+N, map);
