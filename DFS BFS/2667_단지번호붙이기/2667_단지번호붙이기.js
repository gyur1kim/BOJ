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
// const visited = Array.from(Array(n), () => Array(n).fill(false));   // visited를 없앰으로서 메모리 절약!
                    // 상,    하,     좌,       우
const directions = [[0, -1], [0, 1], [-1, 0], [1, 0]];
const answer = [];


for (let i=0; i<n; i++) {      // 행 : i
  for (let j=0; j<n; j++) {    // 열 : j
    if (maps[i][j] === 1) {    // 집 발견 === 새로운 단지
      maps[i][j] = 0;          // 방문한 집은 0으로 변경
      const queue = [[i, j]];
      let head = 0

      while (head < queue.length) {
        let [x, y] = queue[head++];
        for (let [dx, dy] of directions) {
          let [nx, ny] = [dx+x, dy+y];
          if (0<=nx && nx<n && 0<=ny && ny<n && maps[nx][ny] === 1) {
            maps[nx][ny] = 0;
            queue.push([nx, ny]);
          }
        }
      }
      answer.push(head)
    }
  }
}
console.log(`${answer.length}\n${answer.sort((a, b) => a-b).join('\n')}`);