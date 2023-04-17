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