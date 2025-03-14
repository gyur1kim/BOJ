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
const visited = Array(N)
  .fill()
  .map(() => Array(M).fill(-1));
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
  visited[0][0] = K;

  while (nextQueue.length) {
    queue = [...nextQueue];
    nextQueue = [];
    answer++;

    while (queue.length) {
      const [r, c, k] = queue.pop();
      if (r === N - 1 && c === M - 1) {
        return console.log(answer);
      }

      for (const [dr, dc] of directions) {
        const [nr, nc] = [dr + r, dc + c];

        if (!checkInRange(nr, nc)) continue;
        // 누군가 지나간 곳 && 내가 지나갔거나 (=k) 혹은 나보다 더 센 애(>k)가 지나갔으면 못지나가
        // 나보다 벽을 더 부순 애(k값이 나보다 작음)가 지나간거면 난 지나가도 됨
        if (visited[nr][nc] !== -1 && visited[nr][nc] >= k) continue;

        if (maps[nr][nc] === 0) {
          nextQueue.push([nr, nc, k]);
          visited[nr][nc] = k;
        } else if (k > 0) {
          nextQueue.push([nr, nc, k - 1]);
          visited[nr][nc] = k - 1;
        }
      }
    }
  }

  console.log(-1);
})();
