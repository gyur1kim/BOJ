const [N, K, ...coins] = `3 10
1
2
5`
  .split(/\s+/)
  .map(Number);

const DP = Array(K + 1).fill(0);
DP[0] = 1;

for (const coin of coins) {
  for (let i = coin; i <= K; i++) {
    DP[i] = DP[i] + DP[i - coin];
  }
}

console.log(DP[K + 1]);
