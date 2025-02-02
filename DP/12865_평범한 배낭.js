const [NK, ...rest] = `4 7
6 13
4 8
3 6
5 12`.split("\n");
const [N, K] = NK.split(" ").map(Number);
const input = rest.map(e => e.split(" ").map(Number));

const weightList = [0];
const valueList = [0];
for (const [W, V] of input) {
  weightList.push(W);
  valueList.push(V);
}

const dp = Array(N + 1)
  .fill(0)
  .map(() => Array(K + 1).fill(0));

for (let n = 1; n < N + 1; n++) {
  for (let limitV = 1; limitV < K + 1; limitV++) {
    if (weightList[n] <= limitV) {
      // 없는 경우 vs 넣는 경우
      dp[n][limitV] = Math.max(dp[n - 1][limitV], dp[n - 1][limitV - weightList[n]] + valueList[n]);
    } else {
      // 이전 값 그대로 갖고와
      dp[n][limitV] = dp[n - 1][limitV];
    }
  }
}

console.log(dp[N][K]);
