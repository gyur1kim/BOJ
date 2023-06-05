let [nk, ...coins] = `2 10
2
5`.split('\n');

let [n, k] = nk.split(' ').map(Number);
coins = coins.map(Number);

let dp = new Array(k+1).fill(0);
dp[0] = 1;
console.log(dp);

for (let i = 0; i < n; i++) {
  // k = n 개의 동전으로 만들 수 있는 총 합
  for (let j = coins[i]; j <= k; j++) {
    dp[j] += dp[j - coins[i]];
  }
}

console.log(dp[k])

