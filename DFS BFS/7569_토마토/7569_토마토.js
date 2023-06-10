let [MNH, ...input] = `5 3 2
0 -1 0 0 0
-1 0 0 0 0
0 0 0 0 0
0 -1 0 0 0
-1 0 1 0 0
0 0 0 0 0`.split('\n');
let [M, N, H] = MNH.split(' ').map(Number);
input = input.map((tomatoRow) => tomatoRow.split(' ').map(Number))

/**  메모리 초과 뜸. 3중 배열 만드는게 오래 걸리는 것 같다.
// 3중 배열 만들기
const tomatoes = [];
for (let i = 0; i < H; i ++) {
  tomatoes.push(input.slice(i*N, (i+1)*N));
}

const directions = [[1, 0, 0], [-1, 0, 0], [0, 0, -1], [0, 0, 1], [0, 1, 0], [0, -1, 0]]   // 상 하 좌 우 앞 뒤
for (let h=0; h<H; h++) {             // 높이
  for (let i=0; i<N; i++) {           // 세로
    for (let j=0; j<M; j++) {         // 가로
      if (tomatoes[h][i][j] === 1) {  // 내가 탐색한 토마토가 1이면! 주변을 queue에 넣고 뒤져보기
        const queue = [[h, i, j]];
        let head = 0;

        // bfs 시작뜅
        while (queue.length > head) {
          let [x, y, z] = queue[head++];
          for (let [dx, dy, dz] of directions) {
            let [nx, ny, nz] = [x+dx, y+dy, z+dz];
            if (0<=nx && nx<H && 0<=ny && ny<N && 0<=nz && nz<M &&
              (tomatoes[nx][ny][nz] === 0 || tomatoes[nx][ny][nz] > tomatoes[x][y][z] + 1)) {
              tomatoes[nx][ny][nz] = tomatoes[x][y][z] + 1;
              queue.push([nx, ny, nz])
            }
          }
        }

      }
    }
  }
}

// console.log(tomatoes);

let unripe = false;
let longestDay = 0;

for (let h=0; h<H; h++) {             // 높이
  for (let i=0; i<N; i++) {           // 세로
    for (let j=0; j<M; j++) {         // 가로
      if (tomatoes[h][i][j] === 0) {
        unripe = true;
        break;
      }
      else if (tomatoes[h][i][j] - 1 > longestDay) {
        longestDay = tomatoes[h][i][j] - 1
      }
    }
    if (unripe) break;
  }
  if (unripe) break;
}

console.log(`${unripe? -1 : longestDay}`)
 */

/** 3중 배열 만들지 않고 구해보자! => 이것도 실패
const directions = [[N, 0], [-N, 0], [0, -1], [0, 1], [1, 0], [-1, 0]]   // 상 하 좌 우 앞 뒤
const arrLength = N*H
for (let i=0; i<arrLength; i++) {     // 세로
  for (let j=0; j<M; j++) {     // 가로
    if (input[i][j] === 1) {    // 내가 탐색한 토마토가 1이면! 주변을 queue에 넣고 뒤져보기
      const queue = [[i, j]];
      let head = 0;

      // bfs 시작뜅
      while (queue.length > head) {
        let [x, y] = queue[head++];

        //1. 상, 하 탐색하기
        for (let i=0; i<2; i++) {
          let [nx, ny] = [x+directions[i][0], y+directions[i][1]];
          if (0 <= nx && nx < arrLength && (input[nx][ny] === 0 || input[nx][ny] > input[x][y] + 1)) {
            input[nx][ny] = input[x][y] + 1;
            queue.push([nx, ny])
          }
        }
        // 2. 좌, 우 탐색하기
        for (let i=2; i<4; i++) {
          let [nx, ny] = [x+directions[i][0], y+directions[i][1]];
          if (0 <= ny && ny < M && (input[nx][ny] === 0 || input[nx][ny] > input[x][y] + 1)) {
            input[nx][ny] = input[x][y] + 1;
            queue.push([nx, ny])
          }
        }
        // 3. 앞, 뒤 탐색
        for (let i=4; i<6; i++) {
          let [nx, ny] = [x+directions[i][0], y+directions[i][1]];
          let h = Math.floor(x/N);
          if (h*N <= nx && nx < (h+1)*N && (input[nx][ny] === 0 || input[nx][ny] > input[x][y] + 1)) {
            input[nx][ny] = input[x][y] + 1;
            queue.push([nx, ny])
          }
        }
      }

    }
  }
}

let unripe = false;
let longestDay = 0;

for (let i=0; i<arrLength; i++) {     // 세로
  for (let j=0; j<M; j++) {           // 가로
    if (input[i][j] === 0) {
      unripe = true;
      break;
    }
    else if (input[i][j] - 1 > longestDay) {
      longestDay = input[i][j] - 1
    }
  }
  if (unripe) break;
}
console.log(`${unripe? -1 : longestDay}`)
 */

// 마지막 방법! 1인 토마토를 다 찾은 뒤 dfs 진행하기.
const directions = [[N, 0], [-N, 0], [0, -1], [0, 1], [1, 0], [-1, 0]]   // 상 하 좌 우 앞 뒤
const arrLength = N*H
let unripe = 0;
const queue = [];
let day = 0;
for (let i=0; i<arrLength; i++) {     // 세로
  for (let j=0; j<M; j++) {           // 가로
    if (input[i][j] === 1) {          // 내가 탐색한 토마토가 1이면! queue 에 넣기
      queue.push([i, j])
    }
    else if (input[i][j] === 0) unripe++;    // 안익은 토마토이면 안익은 변수++
  }
}

function pushIJ(x, y, nx, ny) {
  unripe--;
  if (day < input[x][y]) day = input[x][y];
  input[nx][ny] = input[x][y] + 1;
  queue.push([nx, ny])
}

// bfs 시작뜅
let head = 0;
while (queue.length > head) {
  let [x, y] = queue[head++];

  //1. 상, 하 탐색하기
  for (let i=0; i<2; i++) {
    let [nx, ny] = [x+directions[i][0], y+directions[i][1]];
    if (0 <= nx && nx < arrLength && input[nx][ny] === 0) {
      pushIJ(x, y, nx, ny)
    }
  }
  // 2. 좌, 우 탐색하기
  for (let i=2; i<4; i++) {
    let [nx, ny] = [x+directions[i][0], y+directions[i][1]];
    if (0 <= ny && ny < M && input[nx][ny] === 0) {
      pushIJ(x, y, nx, ny)
    }
  }
  // 3. 앞, 뒤 탐색
  for (let i=4; i<6; i++) {
    let [nx, ny] = [x+directions[i][0], y+directions[i][1]];
    let h = Math.floor(x/N);
    if (h*N <= nx && nx < (h+1)*N && input[nx][ny] === 0) {
      pushIJ(x, y, nx, ny)
    }
  }
}

console.log(`${unripe? -1 : day}`)