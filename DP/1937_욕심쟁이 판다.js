const [n, ...input] = `4
14 9 12 10
1 11 5 4
7 15 2 13
6 3 16 8`.split("\n");
const N = Number(n);
const map = input.map(i => i.split(" ").map(Number));

const visited = Array(N)
  .fill()
  .map(() => Array(N).fill(-1));
const directions = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
];
let answer = 1;

function dfs(i, j) {
  if (visited[i][j] === -1) {
    visited[i][j] = 0;
    for (const [dx, dy] of directions) {
      const [nx, ny] = [i + dx, j + dy];

      if (nx < 0 || nx >= N || ny < 0 || ny >= N) continue;

      if (map[nx][ny] > map[i][j]) {
        visited[i][j] = Math.max(visited[i][j], dfs(nx, ny));
      }
    }
  }

  return visited[i][j] + 1;
}

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    answer = Math.max(answer, dfs(i, j));
  }
}

console.log(answer);

// function dfs(i, j, prevBamboo) {
//   if (i < 0 || i >= N || j < 0 || j >= N) return -1;

//   const bamboo = map[i][j];
//   if (bamboo < prevBamboo) return -1;

//   console.log(prevBamboo, bamboo);

//   if (visited[i][j] === -1) {
//     visited[i][j] = Math.max(
//       dfs(i, j - 1, bamboo),
//       dfs(i, j + 1, bamboo),
//       dfs(i - 1, j, bamboo),
//       dfs(i + 1, j, bamboo),
//       1
//     );
//   }

//   return visited[i][j] + 1;
// }

// const [n, ...input] = `4
// 14 9 12 10
// 1 11 5 4
// 7 15 2 13
// 6 3 16 8`.split("\n");
// const N = Number(n);
// const map = input.map(i => i.split(" ").map(Number));
// const visited = Array(N)
//   .fill()
//   .map(() => Array(N).fill(-1));

// for (let i = 0; i < N; i++) {
//   for (let j = 0; j < N; j++) {
//     // 여기 방문했었으면 건너뜀
//     if (visited[i][j] !== -1) continue;

//     const bamboo = map[i][j];
//     visited[i][j]function dfs(x, y) {
//   if (dp[x][y] === -1) {
//     dp[x][y] = 0;
//     for (let k = 0; k < 4; k++) {
//       let nx = x + dx[k];
//       let ny = y + dy[k];
//       if (0 <= nx && 0 <= ny && nx < n && ny < n) {
//         if (board[nx][ny] > board[x][y]) {
//           dp[x][y] = Math.max(dp[x][y], dfs(nx, ny));
//         }
//       }
//     }
//   }
//   return dp[x][y] + 1;
// }
