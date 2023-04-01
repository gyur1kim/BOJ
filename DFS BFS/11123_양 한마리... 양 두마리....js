let [caseNum, ...cases] = `2
4 4
#.#.
.#.#
#.##
.#.#
3 5
###.#
..#..
#.###`.split('\n');

function BFS(i, j, row, col, grid, visited) {
  const queue = [[i, j]];
  let head = 0;
  const directions = [[0, -1], [1, 0], [0, 1], [-1, 0]];
  console.log(visited);
  while (head < queue.length) {
    let [r, c] = queue[head++];

    // visited를 여기서 처리하니 메모리 초과가 뜸.. 왜?
    // visited[r][c] = true;

    for (let direction of directions) {
    // for (let i=0; i<4; i++) {
    //   let nextRow = r + directions[i][0];
    //   let nextCol = c + directions[i][1];
      let nextRow = r + direction[0];
      let nextCol = c + direction[1];
      if (0 <= nextRow && nextRow < row && 0 <= nextCol && nextCol < col && grid[nextRow][nextCol] === '#' && !visited[nextRow][nextCol]) {
        visited[nextRow][nextCol] = true;
        queue.push([nextRow, nextCol]);
      }
    }
  }
}

let caseIdx = 0;
for (let num = 0; num < +caseNum; num++) {
  let [row, col] = cases[caseIdx++].split(' ').map(Number);
  const grid = cases.slice(caseIdx, caseIdx + row);
  const visited = Array.from(Array(row), ()=>Array(col).fill(false));
  let flocks = 0;
  for (let i=0; i < row; i++) {
    for (let j=0; j < col; j++) {
      if (grid[i][j] === '#' && !visited[i][j]) {
        visited[i][j] = true
        flocks++;
        BFS(i, j, row, col, grid, visited);
      }
    }
  }
  console.log(flocks);
  caseIdx += row;
}