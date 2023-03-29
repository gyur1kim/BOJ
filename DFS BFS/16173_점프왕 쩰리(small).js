let [n, ...zone] = `3
2 2 1
2 2 2
1 2 -1`.split('\n');
zone = zone.map(x=>x.split(' ').map(Number));
// let res = "Hing";
//
// function solution (x, y) {
//   // 젤리가 움직일 수 있는 크기
//   let go = zone[x][y];
//
//   // 한 번 왔던 곳은 다시 탐색하지 않도록 -100로 바꿔 다녀갔음을 표시함
//   zone[x][y] = -100
//
//   // 너무 숫자가 크면 굳이 안 봐도 되니까 땡
//   if (go >= n) return;
//
//   if (res === "Hing") {
//     // 오른쪽으로 가는 거 검사
//     if (y+go < n) {
//       if (zone[x][y+go] === -1) {
//         res = "HaruHaru";
//         return;
//       }
//       else if (zone[x][y+go] !== -100) {
//         solution(x, y + go)
//       }
//     }
//     // 아래로 가는 거 검사하기
//     if (x+go < n) {
//       if (zone[x+go][y] === -1) {
//         res = "HaruHaru";
//       }
//       else if (zone[x+go][y] !== -100) {
//         solution(x + go, y)
//       }
//     }
//   }
// }
// solution(0, 0);
// console.log(res);

n = +n;
const visited = Array.from(Array(n), ()=>Array(n).fill(false));
console.log(zone);
console.log(visited);
  let ans = "Hing"
// BFS로 푸는게 젤 빠른듯함.
function BFS(i, j) {
  const queue = [[i, j]];
  visited[i][j] = true;
  let start = 0;
  while (start < queue.length) {
    let [y, x] = queue[start++];
    console.log(y, x)
    let go = zone[y][x];
    console.log(go);

    // 오른쪽으로 갈 수 있나요
    if (x + go < n && !visited[y][x+go]) {
      if(zone[y][x+go] === -1) {
        ans = "HaruHaru";
        break;
      }
      visited[y][x+go] = true;
      queue.push([y, x+go]);
    }
    // 아래로 갈 수 있나요
    if (y + go < n && !visited[y+go][x]) {
      if(zone[y+go][x] === -1) {
        ans = "HaruHaru";
        break;
      }
      visited[y+go][x] = true;
      queue.push([y+go, x]);
    }
  }
}
BFS(0, 0);
console.log(ans);