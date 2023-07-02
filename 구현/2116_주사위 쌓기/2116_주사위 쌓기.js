let [k, ...dices] = `5
2 3 1 6 5 4
3 1 2 4 6 5
5 6 4 1 3 2
1 3 2 5 4 6
4 1 6 2 5 3
`.split('\n');

// let [k, ...dices] = `1
// 5 2 3 4 1 6`.split('\n');

dices = dices.map(row => row.split(' ').map(Number));
k = +k;

function next(idx) {
  switch (idx) {
    case 0: return 5;
    case 1: return 3;
    case 2: return 4;
    case 3: return 1;
    case 4: return 2;
    case 5: return 0;
  }
}

let ans = 0;
let tmpAns;

function search(rowIdx, val) {
  if (rowIdx === k) {
    if (tmpAns > ans) ans = tmpAns;
    return;
  }

  let dice = dices[rowIdx];
  let startIdx = dice.findIndex(v => v === val);
  let nextIdx = next(startIdx);
  let nextVal = dice[nextIdx];

  // console.log(`val, nextVal, startIdx, nextIdx : ${val} ${nextVal} ${startIdx} ${nextIdx}`)

  /*
   * max를 찾는 과정이 틀림
   */
  // if (val === 6) {
  //   if (nextVal === 5) tmpAns += 4
  //   else tmpAns += 5
  // }
  // else if (val === 5) {
  //   if (nextVal === 6) tmpAns += 4
  //   else tmpAns += 6
  // }
  // else {
  //   if (nextVal === 6) tmpAns += 5
  //   else tmpAns += 6
  // }

  // 숏코딩의 코드
  let max = 6;
  while (val === max || nextVal === max) {
    max--;
  }
  tmpAns += max;
  search(rowIdx+1, nextVal);
}

for (let i=1; i<=6; i++) {
  tmpAns = 0;
  console.log(`============= ${i} =============`)
  search(0, i);
}
console.log(ans);