function dfs(i, j, prevBamboo) {
  if (i < 0 || i >= N || j < 0 || j >= N) return -1;

  const bamboo = map[i][j];
  if (bamboo < prevBamboo) return -1;

  if (visited[i][j] === -1) {
    visited[i][j] = Math.max(
      dfs(i, j - 1, bamboo),
      dfs(i, j + 1, bamboo),
      dfs(i - 1, j, bamboo),
      dfs(i + 1, j, bamboo),
      1
    );
  }

  return visited[i][j] + 1;
}

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

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    // 여기 방문했었으면 건너뜀
    if (visited[i][j] !== -1) continue;

    const bamboo = map[i][j];
    visited[i][j] = Math.max(
      dfs(i, j - 1, bamboo),
      dfs(i, j + 1, bamboo),
      dfs(i - 1, j, bamboo),
      dfs(i + 1, j, bamboo),
      1
    );
  }
}

const answer = visited
  .flat()
  .sort((a, b) => a - b)
  .pop();
console.log(answer);
