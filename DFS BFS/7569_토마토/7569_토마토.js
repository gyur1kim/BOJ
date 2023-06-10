let [MNH, ...input] = `4 3 2
1 1 1 1
1 1 1 1
1 1 1 1
1 1 1 1
-1 -1 -1 -1
1 1 1 -1`.split('\n');
let [M, N, H] = MNH.split(' ').map(Number);
input = input.map((tomatoRow) => tomatoRow.split(' ').map(Number))
// console.log(input);
const tomatoes = [];
for (let i = 0; i < H; i ++) {
  tomatoes.push(input.slice(i*N, (i+1)*N));
}
// console.log(tomatoes);
const directions = [[1, 0, 0], [-1, 0, 0], [0, 0, -1], [0, 0, 1], [0, 1, 0], [0, -1, 0]]   // 상 하 좌 우 앞 뒤


/**  메모리 초과 뜸. 두 번 for문을 돌아서 메모리를 많이 차지한 것 아닐까?
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