/*
 * r, c는 행과 열을 뜻한다(row, col) , 값은 1부터 시작한다.
 *
 * 치킨 거리 = 집과 가장 가까운 치킨집 사이의 거리
 * 각각의 집은 치킨 거리를 가지고 있다.
 * 도시의 치킨 거리는 모든 집의 치킨거리의 합
 *
 * 거리 = |r1-r2| + |c1+c2|
 *
 * 0, 1:집, 2:치킨집
 *
 * 치킨 거리를 작게 하여 치킨집 M개만 남기자
 *
 * => 가게마다 bfs를 하면 되지 않을까
 *
 * 1. 가게 위치와 집 위치 정보를 기억한다.
 * 2. 가게들 중 M개만 골라본다(백트래킹?)
 * 3. M개를 선택한 후 bfs 진행, 치킨거리를 구한다.
 * 4. 치킨거리의 합이 최소가 될 때를 구한다.
 */

let [NM, ...input] = `5 2
0 2 0 1 0
1 0 1 0 0
0 0 0 0 0
2 0 0 1 1
2 2 0 1 2`.split('\n');

let [N, M] = NM.split(' ').map(Number);
input = input.map(r => r.split(' ').map(Number));

let chickenDist = Number.MAX_SAFE_INTEGER;
const chickenCoord = [];        // 치킨집
const chooseChickenCoord = [];  // 선택된 치킨집
const houseCoord = [];          // 집의 위치

// 치킨집의 위치와 집의 위치 기억하기.
for (let i=0; i<N; i++) {
  for (let j=0; j<N; j++) {
    if (input[i][j] === 1) houseCoord.push([i, j]);
    else if (input[i][j] === 2) chickenCoord.push([i, j]);
  }
}

// let visited = new Map();
// for (let house of houseCoord) {
//   visited.set(house, false);
// }
//
// function goFurther (x, y, originX, originY, dist) {
//   if (x < 0 || x >= N || y < 0 || y >= N) return;
//
//   if (visited.has([x, y])) {
//     visited.delete([x, y]);
//     tmpChickenDist += (Math.abs(originX - x) + Math.abs(originY - y));
//   }
//
// }

const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];

function bfs() {
  let tmpChickenDist = 0;   // 임시 치킨거리
  const visited = Array.from(new Array(N), () => Array(N).fill(false));   // 방문 2차배열 생성
  for (let [x, y] of chooseChickenCoord) {
    visited[x][y] = 0;
  }

  const queue = [...chooseChickenCoord];
  let head = 0;

  while (queue.length > head) {
    let [x, y] = queue[head++];

    for (let [dx, dy] of directions) {
      let [nx, ny] = [x+dx, y+dy];    // 치킨집에서 하나씩 bfs하기
      if (0<=nx && nx<N && 0<=ny && ny<N && visited[nx][ny] === false) {
        if (input[nx][ny] === 1) {   // 1이면 (가정집을 찾았으면!)
          tmpChickenDist += visited[x][y] + 1;
        }
        visited[nx][ny] = visited[x][y] + 1;
        queue.push([nx, ny]);
      }
    }
  }

  if (tmpChickenDist < chickenDist) chickenDist = tmpChickenDist;

}


// 살아남을 M개의 치킨집 고르기
function chooseChicken (count, idx) {
  if (count === M) {
    // 치킨집 다 찾았으니까 bfs 시작하기.
    console.log(chooseChickenCoord);
    bfs();
    return;
  }

  for (let i=idx; i<chickenCoord.length; i++) {
    // if (!chooseChickenCoord.includes(chickenCoord[i])) {
      chooseChickenCoord.push(chickenCoord[i]);
      chooseChicken(count+1, i+1);  // 살아남을 치킨집에 추가
      chooseChickenCoord.pop();      // 빼기
    // }
  }
}
chooseChicken(0, 0);
console.log(chickenDist)
