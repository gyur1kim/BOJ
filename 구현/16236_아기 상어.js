/**
 * 더 이상 먹을 수 있는 물고기가 공간에 없다면 아기 상어는 엄마 상어에게 도움을 요청한다.
 * 먹을 수 있는 물고기가 1마리라면, 그 물고기를 먹으러 간다.
 * 먹을 수 있는 물고기가 1마리보다 많다면, 거리가 가장 가까운 물고기를 먹으러 간다.
 * 거리는 아기 상어가 있는 칸에서 물고기가 있는 칸으로 이동할 때, 지나야하는 칸의 개수의 최솟값이다.
 * 거리가 가까운 물고기가 많다면, 가장 위에 있는 물고기, 그러한 물고기가 여러마리라면, 가장 왼쪽에 있는 물고기를 먹는다.
 */

class Queue {
  constructor() {
    this.items = {};
    this.headIndex = 0;
    this.tailIndex = 0;
  }

  enqueue(item) {
    this.items[this.tailIndex] = item;
    this.tailIndex++;
  }

  dequeue() {
    const item = this.items[this.headIndex];
    delete this.items[this.headIndex];
    this.headIndex++;
    return item;
  }

  isEmpty() {
    return this.tailIndex - this.headIndex === 0;
  }
}

function solution(N, map) {
  // 상어 위치 찾기
  let sharkPos;
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (map[i][j] === 9) {
        sharkPos = [i, j];
        break;
      }
    }
    if (sharkPos) break;
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

  let sharkSize = 2;
  let countSharkEat = 0;
  let seconds = 0;

  while (true) {
    const [result, min] = bfs(sharkPos, sharkSize, N, map);
    if (!result.length) break;

    result.sort((a, b) => (a[0] === b[0] ? a[1] - b[1] : a[0] - b[0]));
    sharkPos = result[0];
    map[sharkPos[0]][sharkPos[1]] = 0;

    countSharkEat++;
    if (countSharkEat === sharkSize) {
      sharkSize++;
      countSharkEat = 0;
    }

    seconds += min;
  }

  console.log(seconds);
}

function bfs(sharkPos, sharkSize, N, map) {
  const directions = [
    [-1, 0],
    [0, -1],
    [1, 0],
    [0, 1],
  ];
  const visited = Array(N)
    .fill()
    .map(() => Array(N).fill(-1));
  const queue = new Queue();

  const closestFishList = [];
  let seconds = Infinity;

  // 일단 초기 상어의 위치를 큐에 넣고, 방문했다고 표시
  queue.enqueue(sharkPos);
  visited[sharkPos[0]][sharkPos[1]] = 0;
  map[sharkPos[0]][sharkPos[1]] = 0;

  while (!queue.isEmpty()) {
    const [r, c] = queue.dequeue();

    for (const [dr, dc] of directions) {
      if (seconds < visited[r][c] + 1) return [closestFishList, seconds];

      const [nr, nc] = [r + dr, c + dc];
      if (!checkRange(N, nr, nc) || visited[nr][nc] !== -1) continue;

      // 생선이 없거나, 생선이 나랑 크기가 같으면 지나가
      if (!map[nr][nc] || map[nr][nc] === sharkSize) {
        queue.enqueue([nr, nc]);
        visited[nr][nc] = visited[r][c] + 1;
      }
      // 생선이 있는데 생선이 상어 크기보다 작음
      else if (map[nr][nc] && map[nr][nc] < sharkSize) {
        closestFishList.push([nr, nc]);
        visited[nr][nc] = visited[r][c] + 1;
        seconds = visited[nr][nc];
      }
      // 생선이 나보다 크면 못지나감;;; 몰랐네
    }
  }

  return [closestFishList, seconds];
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
