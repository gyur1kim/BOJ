// N은 접시 개수 (최대 300만)
// d는 초밥 종류 (최대 3000)
// 연속 접시 K는 (최대 3000, N보다 작음)
// c는 무료이벤트초밥, d보다 작음
let [N, d, k, c, ...sushis] = `8 30 4 30
7
9
7
30
2
7
9
25`
  .split(/\s+/)
  .map(Number);

const sushiMap = new Map();

for (let i = 0; i < k; i++) {
  const sushiNum = sushis[i];
  addSushi(sushiMap, sushiNum);
}

let answer = checkSushiCnt(sushiMap);

for (let i = 1; i < N; i++) {
  let left = i - 1;
  let right = (i + k - 1) % N;

  addSushi(sushiMap, sushis[right]);
  deleteSushi(sushiMap, sushis[left]);

  const cntSushi = checkSushiCnt(sushiMap);
  answer = Math.max(answer, cntSushi);
}

console.log(answer);

function checkSushiCnt(sushiMap) {
  if (sushiMap.has(c)) return sushiMap.size;
  return sushiMap.size + 1; // 서비스 초밥도 먹을 수 있지용
}

function deleteSushi(sushiMap, sushi) {
  sushiMap.set(sushi, sushiMap.get(sushi) - 1);
  if (sushiMap.get(sushi) === 0) sushiMap.delete(sushi);
}

function addSushi(sushiMap, sushi) {
  sushiMap.set(sushi, (sushiMap.get(sushi) || 0) + 1);
}
