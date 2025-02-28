// 적어도 C명을 늘릴거고, N은 도시 개수임
function solution(C, promotions) {
  const DP = Array(C + 1).fill(Infinity);

  DP[0] = 0;

  for (const [cost, people] of promotions) {
    if (DP[people] > cost) DP[people] = cost;
    for (let i = 1; i <= C; i++) {
      if (i >= people) DP[i] = Math.min(DP[i - people] + DP[people], DP[i]);
      else DP[i] = Math.min(DP[i], cost);
    }
  }

  console.log(DP[C]);
}

const [CN, ...input] = `10 3
3 1
2 2
1 3`.split("\n");
const [C, N] = CN.split(" ").map(Number);
const promotions = input.map(i => i.split(" ").map(Number));

solution(C, promotions);
