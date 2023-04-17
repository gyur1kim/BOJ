let [row, col, ...presentMap] = `5 3
...
.X.
.X.
.X.
...`.split(/\s+/);

console.log(presentMap);
presentMap = presentMap.map(line => '.' + line + '.');
presentMap.push('.'.repeat(+col+2));
presentMap.unshift('.'.repeat(+col+2));
console.log(presentMap);

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
const futureMap = [];
const checkRowCnt = [];
const checkColCnt = [];
for (let i=1; i<=row; i++) {
  for (let j=1; j<=col; j++) {
    let cntLand = 0;
    for (const direction of directions) {
      if (presentMap[i+direction[0]][j+direction[1]] === 'X'){ cntLand++; }
    }

    if (cntLand >= 2) {

    }
  }
}