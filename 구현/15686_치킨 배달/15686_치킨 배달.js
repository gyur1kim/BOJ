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
const chickenCoord = [];        // 전체 치킨집 좌표
const selectChickenCoord = [];  // 선택된 치킨집 좌표
const houseCoord = [];          // 집 좌표

// 치킨집의 위치와 집의 위치 기억하기.
for (let i=0; i<N; i++) {
  for (let j=0; j<N; j++) {
    // if (input[i][j] === 1) countHouse++;
    if (input[i][j] === 1) houseCoord.push([i, j]);
    else if (input[i][j] === 2) chickenCoord.push([i, j]);
  }
}

// const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];
// function bfs() {
//   let tmpChickenDist = 0;   // 임시 치킨거리
//   let countHouseCopy = countHouse;  // 임시 집 개수
//   const visited = Array.from(new Array(N), () => Array(N).fill(false));   // 방문 2차배열 생성
//   for (let [x, y] of selectChickenCoord) {
//     visited[x][y] = 0;
//   }
//
//   const queue = [...selectChickenCoord];
//   let head = 0;
//
//   while (queue.length > head) {
//     let [x, y] = queue[head++];
//
//     for (let [dx, dy] of directions) {
//       let [nx, ny] = [x+dx, y+dy];    // 치킨집에서 하나씩 bfs하기
//       if (0<=nx && nx<N && 0<=ny && ny<N && visited[nx][ny] === false) {
//         if (input[nx][ny] === 1) {   // 1이면 (가정집을 찾았으면!)
//           tmpChickenDist += visited[x][y] + 1;
//           if (--countHouseCopy === 0) {  // 첫 번째 조건, 모든 집을 다 찾았으면 return하기 => 약 20ms 감소
//             if (tmpChickenDist < chickenDist) chickenDist = tmpChickenDist;
//             return;
//           }
//           else if (tmpChickenDist >= chickenDist) return;   // 두 번째 조건, 임시 치킨 거리가 기존의 치킨거리보다 길어지면 멈추기.  => 오히려 시간 증가.
//         }
//         visited[nx][ny] = visited[x][y] + 1;
//         queue.push([nx, ny]);
//       }
//     }
//   }
//
//   if (tmpChickenDist < chickenDist) chickenDist = tmpChickenDist;
//
// }

function calcDist(x1, y1, x2, y2) {
  return Math.abs(x1-x2) + Math.abs(y1-y2);
}

function getChickenDist () {
  let dist, tmpChickenDist = 0;

  for (let [houseX, houseY] of houseCoord) {                 // 한 집에 대해서
    let minDist = Number.MAX_SAFE_INTEGER;
    for (let [chickenX, chickenY] of selectChickenCoord) {   // 모든 치킨집과의 거리를 구하고, 가장 짧은 거리를 저장하자.
      dist = calcDist(houseX, houseY, chickenX, chickenY);
      if (dist < minDist) {
        minDist = dist
      }
    }
    tmpChickenDist += minDist;   // 가장 짧았던 거리를 임시 치킨거리에 누적.
  }

  if (tmpChickenDist < chickenDist) chickenDist = tmpChickenDist;
}

// 살아남을 M개의 치킨집 고르기
function chooseChicken (count, idx) {
  if (count === M) {
    // 치킨집 다 정했으니까 치킨거리 구하기;
    getChickenDist();
    return;
  }

  for (let i=idx; i<chickenCoord.length; i++) {
    selectChickenCoord.push(chickenCoord[i]);
    chooseChicken(count+1, i+1);  // 살아남을 치킨집에 추가
    selectChickenCoord.pop();      // 빼기
  }
}
chooseChicken(0, 0);
console.log(chickenDist)
