let [NM, ...lab] = `8 8
2 0 0 0 0 0 0 2
2 0 0 0 0 0 0 2
2 0 0 0 0 0 0 2
2 0 0 0 0 0 0 2
2 0 0 0 0 0 0 2
0 0 0 0 0 0 0 0
0 0 0 0 0 0 0 0
0 0 0 0 0 0 0 0`.split('\n');

let [N, M] = NM.split(' ').map(Number);  // 세로 가로
lab = lab.map(row => row.split(' ').map(Number));
let directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];
let safeZone = 0;

function bfs() {
  const copyLab = lab.map(row => [...row]);
  const queue = [];
  let head = 0;
  let emptySpace = 0;

  for (let i=0; i<N; i++) {
    for (let j=0; j<M; j++) {
      if (copyLab[i][j] === 0) emptySpace++;
      else if (copyLab[i][j] === 2) {
        queue.push([i, j])
      }
    }
  }

  while (queue.length > head) {
    let [x, y] = queue[head++];
    for (let [dx, dy] of directions) {
      let [nx, ny] = [x + dx, y + dy];
      if (0<=nx && nx <N && 0 <= ny && ny < M && copyLab[nx][ny] === 0) {
        copyLab[nx][ny] = 2;
        emptySpace--;
        queue.push([nx, ny]);
      }
    }
  }
  return emptySpace;
}
function MakeWall(count) {
  if (count === 3) {   // 벽 3개를 세운 것이다.
    let emptySpace = bfs();
    if (emptySpace > safeZone) safeZone = emptySpace;
    return;
  }
  for (let i=0; i<N; i++) {
    for (let j=0; j<M; j++) {
      if (lab[i][j] === 0) {
        lab[i][j] = 1;
        MakeWall(count+1);
        lab[i][j] = 0;
      }
    }
  }
}

MakeWall(0);
console.log(safeZone);