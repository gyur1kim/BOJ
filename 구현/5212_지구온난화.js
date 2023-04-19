let [rc, ...presentMap] = `3 10
..........
..XXX.XXX.
XXX.......`.split('\n');
let [row, col] = rc.split(' ').map(Number);

// 감싸지 말고 해보자...ㄱㄱ
// presentMap.push('.'.repeat(col));
// presentMap.unshift('.'.repeat(col));
// presentMap = presentMap.map(line => '.' + line + '.');  // 바다로 한 번 더 감싼 현재 지도

/*
 * 일단 바다(.)로 한 번 더 감쌌습니다.
 * 미래의 지도를 배열로 만듭니다. 초기값은 빈 문자열로 해야할 듯 합니다.
 * 하나씩 갈 때마다 상하좌우를 검사합니다. 만약 땅이 나오면 땅의 갯수를 하나 올립니다.
 * 땅의 갯수가 2 이상이면, 50년 뒤 미래에도 땅이므로 미래 지도에 X로 표시합니다. 그렇지 않다면 .으로 표시합니다.
 * 만약 땅이라면 행에서의 땅의 갯수를 기록하는 배열에 ++합니다(나중에 바다인 부분을 지울 때 사용할 것입니다.
 * 만약 땅이라면 열에서의 땅의 갯수를 기록하는 배열에 ++합니다.
 *
 * 나중에 다 탐색하고 나면 row와 col에서 땅이 몇 번 나왔는지 체크합니다.
 * 이 때 앞과 뒤에서부터 0인지 체크하는 방식을 이용해 땅이 언제부터 시작되는지 구합니다. 이를 이용하면 idx를 이용해
 * 새로 계산한 지도에서 idx를 활용해 새로운 지도를 반환할 수 있을 것입니다...
 */

const directions = [[0, -1], [1, 0], [0, 1], [-1, 0]];
const tmpFutureMap = new Array(row).fill('');
const checkRowCnt = new Array(row).fill(0);
const checkColCnt = new Array(col).fill(0);
for (let i=0; i<row; i++) {
  for (let j=0; j<col; j++) {
    if (presentMap[i][j] === '.') {   // 현재도 바다면 미래도 바다겠죠..?
      tmpFutureMap[i] +='.';
      continue;
    }
    // 현재가 땅이면 주변에 땅의 갯수를 구합니다. 땅이 2개 이상이면 미래에도 육지일 것이여요
    let cntLand = 0;
    for (const direction of directions) {
      let [nextI, nextJ] = [i+direction[0], j+direction[1]];
      if (0 <= nextI && nextI < row && 0 <= nextJ && nextJ < col && presentMap[nextI][nextJ] === 'X') cntLand++;
    }
    if (cntLand >= 2) {     // 50년 뒤에도 섬이라는 뜻
      tmpFutureMap[i]+='X'
      checkRowCnt[i]++;
      checkColCnt[j]++;
    }
    else {                 // 50년 뒤에는 바다가 된다는 뜻
      tmpFutureMap[i]+='.'
    }
  }
}

let rowStart = 0; let rowEnd = row-1;
let colStart = 0; let colEnd = col-1;
while (checkRowCnt[rowStart] === 0) rowStart++;
while (checkRowCnt[rowEnd] === 0) rowEnd--;
while (checkColCnt[colStart] === 0) colStart++;
while (checkColCnt[colEnd] === 0) colEnd--;

for (let i=rowStart; i<rowEnd+1; i++) {
  console.log(tmpFutureMap[i].slice(colStart, colEnd+1))
}
