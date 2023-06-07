let [n, ...maps] = `7
0110100
0110101
1110101
0000111
0100000
0111110
0111000`.split('\n');

n = Number(n);
maps = maps.map(row => row.split('').map(Number));
const visited = Array.from(Array(n), () => Array(n).fill(false));
                    // 상,    하,     좌,       우
const directions = [[0, -1], [0, 1], [-1, 0], [1, 0]];
const answer = [];


for (let i=0; i<n; i++) {      // 행 : i
  for (let j=0; j<n; j++) {    // 열 : j
    if (maps[i][j] === 1 && !visited[i][j]) {   // 집이 나왔는데, 방문하지 않았던 곳 => 새로운 단지의 시작
      visited[i][j] = true;
      const queue = [[i, j]];
      let head = 0

      while (head < queue.length) {
        let [x, y] = queue[head++];
        for (let [dx, dy] of directions) {
          let [nx, ny] = [dx+x, dy+y];
          if (0<=nx && nx<n && 0<=ny && ny<n && maps[nx][ny] === 1 && !visited[nx][ny]) {
            visited[nx][ny] = true;
            queue.push([nx, ny]);
          }
        }
      }
      answer.push(head)
    }
  }
}
console.log(`${answer.length}\n${answer.sort((a, b) => a-b).join('\n')}`);