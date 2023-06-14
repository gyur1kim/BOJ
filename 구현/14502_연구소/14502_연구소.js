let [NM, ...lab] = `8 8
2 0 0 0 0 0 0 2
2 0 0 0 0 0 0 2
2 0 0 0 0 0 0 2
2 0 0 0 0 0 0 2
2 0 0 0 0 0 0 2
0 0 0 0 0 0 0 0
0 0 0 0 0 0 0 0
0 0 0 0 0 0 0 0`.split('\n');

let [N, M] = NM.split(' ').map(Number);         // 세로 가로 크기
lab = lab.map(r => r.split(' ').map(Number));   // 연구실
let directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];    // 방향
let safeZone = 0;                                       // 안전지대 최대 수를 저장할 변수

function bfs() {
  const copyLab = lab.map(r => [...r]);       // 연구실 복사(실제 연구실 값을 변경하면 안됨)
  const queue = [];      // 바이러스(2)가 퍼져나가는 좌표를 담는 배열
  let head = 0;          // 큐의 head
  let emptySpace = 0;    // 0의 개수를 담는 변수

  // 연구실 전체를 돌며 0의 개수 찾기, 2를 발견하면 queue에 넣기
  for (let i=0; i<N; i++) {
    for (let j=0; j<M; j++) {
      if (copyLab[i][j] === 0) emptySpace++;
      else if (copyLab[i][j] === 2) {
        queue.push([i, j])
      }
    }
  }

  // bfs 탐색 시작
  while (queue.length > head) {
    let [x, y] = queue[head++];           // head 1 증가
    for (let [dx, dy] of directions) {
      let [nx, ny] = [x + dx, y + dy];    // 다음 경로
      if (0<=nx && nx <N && 0 <= ny && ny < M && copyLab[nx][ny] === 0) {   // 연구소 범위 내이고 0이면
        copyLab[nx][ny] = 3;     // 바이러스가 퍼졌다고 보자.
        emptySpace--;            // 바이러스가 퍼졌으니 0인 곳의 개수가 줄어요
        queue.push([nx, ny]);    // 이 위치로 다시 상하좌우 탐색
      }
    }
  }

  // bfs가 끝나면 남아있는 안전지대 return
  return emptySpace;
}

/** 백트래킹, 벽을 한 번씩 다 세워본다. */
function MakeWall(count) {
  if (count === 3) {          // 벽 3개를 세운 것이다 => bfs 시작
    let emptySpace = bfs();   // bfs 결과로 나오는 안전지대 저장
    if (emptySpace > safeZone) safeZone = emptySpace;    // 안전지대가 가장 넓을 때 그 크기를 저장한다.
    return;
  }
  for (let i=0; i<N; i++) {
    for (let j=0; j<M; j++) {
      if (lab[i][j] === 0) {       // 빈 공간을 발견하면
        lab[i][j] = 1;             // 그 곳에 벽을 세워보고
        MakeWall(count+1);   // 벽 수 1 카운트 후 재귀함수(첫 번째 벽 세운 후 재귀 -> 두 번째 벽 세운 후 재귀 -> 세 번째 벽 세운 후 재귀)
        lab[i][j] = 0;
      }
    }
  }
}

MakeWall(0);
console.log(safeZone);