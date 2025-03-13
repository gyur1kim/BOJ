let [NMK, ...maps] = `8 8 1
01000100
01010100
01010100
01010100
01010100
01010100
01010100
00010100
`.split("\n");
const [N, M, K] = NMK.split(" ").map(Number);
// [부순 벽][row][col]
const visited = Array(K + 1)
  .fill()
  .map(() =>
    Array(N)
      .fill()
      .map(() => Array(M).fill(false))
  );
maps = maps.map(m => m.split("").map(Number));
let answer = 0;

function checkInRange(r, c) {
  return 0 <= r && r < N && 0 <= c && c < M;
}

(function bfs() {
  const directions = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1],
  ];
  let queue = [];
  let nextQueue = [[0, 0, K]];
  visited[K][0][0] = true;

  while (nextQueue.length) {
    queue = [...nextQueue];
    nextQueue = [];
    answer++;

    while (queue.length) {
      const [r, c, k] = queue.pop();
      if (r === N - 1 && c === M - 1) {
        console.log(answer);
        process.exit(0);
      }

      for (const [dr, dc] of directions) {
        const [nr, nc] = [dr + r, dc + c];

        if (!checkInRange(nr, nc)) continue;
        if (visited[k][nr][nc]) continue;

        if (maps[nr][nc] === 0) {
          nextQueue.push([nr, nc, k]);
          visited[k][nr][nc] = true;
        } else if (k > 0) {
          nextQueue.push([nr, nc, k - 1]);
          visited[k][nr][nc] = true;
        }
      }
    }
  }

  console.log(-1);
})();
