let dp = [0, 0, 1, 1];

// x를 구하려면?
//   1. 이전 값에서 +1을 한다
//   2. x라는 값이 2로 나누어지는지 확인한다. 그러면 이전 값에서 1을 더하는게 나은지, 아니면 %2의 값에서 2를 곱하는게 나은지 구한다.
//   3. x라는 값이 3으로 나누어지는지 확인한다...

let input = 10

for (let i=4; i<=input; i++) {
  dp.push(dp[i-1] + 1);
  if (i % 2 === 0) {
    dp[i] = Math.min(dp[i], dp[i/2] + 1);
  }
  if (i % 3 === 0) {
    dp[i] = Math.min(dp[i], dp[i/3] + 1);
  }
}
console.log(dp[input])