let [row, col, ...pasture] = `5 6
.#....
..#...
..#..#
...##.
.#....`.split(/\s+/);

const visited = Array.from(Array(+row), () => Array(+col).fill(false));
let directions = [[0, -1], [0, 1], [-1, 0], [1, 0]];
function BFS (i, j) {
  const queue = [[i, j]];
  while (queue.length) {
    let [x, y] = queue.shift();
    for (let [dx, dy] of directions) {
      let nx = dx + x;
      let ny = dy + y;
      if (nx >= 0 && nx < +row && ny >= 0 && ny < +col && pasture[nx][ny] === '#' && !visited[nx][ny]) {
        visited[nx][ny] = true;
        queue.push([nx, ny]);
      }
    }
  }
}

let count = 0;
for(let i=0; i<+row; i++){
  for (let j=0; j<+col; j++){
    if(pasture[i][j] === '#' && !visited[i][j]) {
      count++;
      visited[i][j] = true;
      BFS(i, j)
    }
  }
}


console.log(count);