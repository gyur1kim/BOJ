let [n, ...zone] = `3
1 1 10
1 5 1
2 2 -1`.split('\n');
zone = zone.map(x=>x.split(' ').map(Number));
n = +n;
const visited = Array.from(Array(n), ()=>Array(n).fill(false));
let check = false;

const queue = [[0, 0]];
visited[0][0] = true;
let start = 0;
while (start < queue.length) {
  let [row, col] = queue[start++];
  let go = zone[row][col];

  let nextRow = row + go;
  let nextCol = col + go;
  if (nextCol < n && !visited[row][nextCol]) {
    if(zone[row][nextCol] === -1) {
      check=true;
      break;
    }
    visited[row][nextCol] = true;
    queue.push([row, nextCol]);
  }
  if (nextRow < n && !visited[nextRow][col]) {
    if(zone[nextRow][col] === -1) {
      check=true;
      break;
    }
    visited[nextRow][col] = true;
    queue.push([nextRow, col]);
  }
}
console.log(check? "HaruHaru" : "Hing");