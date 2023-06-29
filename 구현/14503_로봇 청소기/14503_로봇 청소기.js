/*
 * 청소기가 있는 방은 N*M 사이즈(가로세로)
 *
 * 청소기는 바라보는 방향이 있다. (동1, 서3, 남2, 북0)
 * 칸을 청소한다.
 * 현재 칸 주변 4군데 모두 청소했으면, 하나 뒤로간다.
 *  근데 뒤가 벽이면 작동을 멈춘다.
 * 청소하지 않은 칸이 있으면, 반시계방향으로 회전한다. 앞이 더러우면 전진한다...
 *
 * 0은 내가 청소해야 하는 곳, 1은 벽이다.
 */

// // 답 124
// let [NM, rcd, ...input] = `33 30
// 2 2 0
// 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
// 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1
// 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1
// 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1
// 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1
// 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1
// 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1
// 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1
// 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1
// 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1
// 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1
// 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1
// 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1
// 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1
// 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1
// 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1
// 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1
// 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1
// 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1
// 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1
// 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1
// 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1
// 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1
// 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1
// 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1
// 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1
// 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1
// 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1
// 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1
// 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1
// 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0 1
// 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1
// 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1`.split('\n');

// let [NM, rcd, ...input] = `11 10
// 7 4 0
// 1 1 1 1 1 1 1 1 1 1
// 1 0 0 0 0 0 0 0 0 1
// 1 0 0 0 1 1 1 1 0 1
// 1 0 0 1 1 0 0 0 0 1
// 1 0 1 1 0 0 0 0 0 1
// 1 0 0 0 0 0 0 0 0 1
// 1 0 0 0 0 0 0 1 0 1
// 1 0 0 0 0 0 1 1 0 1
// 1 0 0 0 0 0 1 1 0 1
// 1 0 0 0 0 0 0 0 0 1
// 1 1 1 1 1 1 1 1 1 1`.split('\n');
//
// let cleanCnt = 0;
// let [N, M] = NM.split(' ').map(Number);
// let [r, c, d] = rcd.split(' ').map(Number);
// input = input.map(row => row.split(' ').map(Number));

// // 0은 청소하지 않은 곳, 1은 벽, 2는 방문한 곳
// let directions = [[-1, 0], [0, 1], [1, 0], [0, -1]];  // 북, 동, 남, 서(시계방향임)
// function dfs(x, y, d) {
//   console.log(`{${x}, ${y}}, ${cleanCnt}`)
//   for (let i=d-1; i>d-5; i--) {  // 반시계방향으로 90도 돌리고 시작하자. 0=> 3, 2, 1, 0 / 2=> 1, 0, 3, 2 ...
//     let idx = (4+i)%4;
//     let [nx, ny] = [x+directions[idx][0], y+directions[idx][1]];
//     console.log(`다음 방향의 값은? ${input[nx][ny]}`)
//     if (input[nx][ny] === 0) { // 안 간 곳이 있으면
//       input[nx][ny] = 2;       // 방문 처리
//       cleanCnt++;              // 청소했어요!
//       dfs(nx, ny, idx)         // 다시 여기부터 봐보자!
//     }
//   }
//
//   // 주변을 다 청소했으면 뒤로 갑시다.
//   let idx = d >= 2? d-2 : d+2;
//   let [nx, ny] = [x+directions[idx][0], y+directions[idx][1]];
//   if (x === 1 && y === 1) {
//     console.log(`나 지금 1, 1이야 : ${input[nx][ny]} `)
//   }
//   if (input[nx][ny] === 1) process.exit();
//   else dfs(nx, ny, d)
// }
//
// input[r][c] = 2;
// cleanCnt++;        // 청소기 놓인 곳부터 청소합시다
// dfs(r, c, d);      // 여기서부터 청소를 시작할거야
// console.log(cleanCnt)

// const readline = require('readline');
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });
//
// let input = [];
// rl.on('line', function (line) {
//   input.push(line);
// })
//   .on('close', function () {
//     let cleanCnt = 0;
//     let [N, M] = input.shift().split(' ').map(Number);
//     let [r, c, d] = input.shift().split(' ').map(Number);
//     input = input.map(row => row.split(' ').map(Number));
//
//     // 0은 청소하지 않은 곳, 1은 벽, 2는 방문한 곳
//     let directions = [[-1, 0], [0, 1], [1, 0], [0, -1]];  // 북, 동, 남, 서(시계방향임)
//     function dfs(x, y, d) {
//       console.log(`{${x}, ${y}}, ${cleanCnt}`)
//       for (let i=d-1; i>d-5; i--) {  // 반시계방향으로 90도 돌리고 시작하자. 0=> 3, 2, 1, 0 / 2=> 1, 0, 3, 2 ...
//         let idx = (4+i)%4;
//         let [nx, ny] = [x+directions[idx][0], y+directions[idx][1]];
//         console.log(`다음 방향의 값은? ${input[nx][ny]}`)
//         if (input[nx][ny] === 0) { // 안 간 곳이 있으면
//           input[nx][ny] = 2;       // 방문 처리
//           cleanCnt++;              // 청소했어요!
//           dfs(nx, ny, idx)         // 다시 여기부터 봐보자!
//         }
//       }
//
//       // 주변을 다 청소했으면 뒤로 갑시다.
//       let idx = d >= 2? d-2 : d+2;
//       let [nx, ny] = [x+directions[idx][0], y+directions[idx][1]];
//       if (input[nx][ny] === 1) {
//         console.log(cleanCnt);
//         process.exit();
//       }
//       else dfs(nx, ny, d)
//     }
//
//     input[r][c] = 2;
//     cleanCnt++;        // 청소기 놓인 곳부터 청소합시다
//     dfs(r, c, d);      // 여기서부터 청소를 시작할거야
//
//
//     console.log(cleanCnt)
//     process.exit();
//   });

let [NM, rcd, ...input] = `11 10
7 4 0
1 1 1 1 1 1 1 1 1 1
1 0 0 0 0 0 0 0 0 1
1 0 0 0 1 1 1 1 0 1
1 0 0 1 1 0 0 0 0 1
1 0 1 1 0 0 0 0 0 1
1 0 0 0 0 0 0 0 0 1
1 0 0 0 0 0 0 1 0 1
1 0 0 0 0 0 1 1 0 1
1 0 0 0 0 0 1 1 0 1
1 0 0 0 0 0 0 0 0 1
1 1 1 1 1 1 1 1 1 1`.split('\n');
let [N, M] = NM.split(' ').map(Number);
let [r, c, d] = rcd.split(' ').map(Number);
input = input.map(row => row.split(' ').map(Number));

input[r][c] = 2;   // 청소기가 있는 곳은 청소했으므로 2
let cleanCnt = 1;  // 청소한 곳의 개수
let directions = [[-1, 0], [0, 1], [1, 0], [0, -1]];  // 북, 동, 남, 서(시계방향임)

function turn() {
  // 3->2, 2->1, 1->0, 0->3, 3->2... 나머지 연산을 이용해보자.
  d = (d+3)%4
}

// 단순 x, y의 값을 변화하는 방식
// while문을 이용해 계속 돌면 된다.
let nr, nc;         // 다음 청소기 위치
let turnCnt = 0;    // 4번 돌면 뒤로 갈거임.
while (true) {
  turn();                    // 90도 회전
  turnCnt++;
  nr = r + directions[d][0];
  nc = c + directions[d][1];

  if (input[nr][nc] === 0) {
    input[nr][nc] = 2   // 청소하기
    cleanCnt++;         // 청소한 구역 +1
    r = nr
    c = nc
    turnCnt = 0;        // 횟수 초기화
  }

  if (turnCnt === 4) {  // 4군데 다 돌아봤으면? 뒤로 가자.
    nr = r - directions[d][0];
    nc = c - directions[d][1];
    if (input[nr][nc] === 1) break;   // 뒤로 갈 곳이 벽이면 종료
    else {
      r = nr
      c = nc
      turnCnt = 0;        // 횟수 초기화
    }
  }
}

console.log(cleanCnt);