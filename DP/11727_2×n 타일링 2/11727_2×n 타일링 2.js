let n = Number('12');

let dp = [0, 1, 3];

// while문 : 9652KB, 200ms
// while (dp.length <= n) {
//   dp.push((dp[dp.length-1] + (dp[dp.length-2] * 2)) % 10007);
// }

// for문 : 똑같다.
for (let i=2; i<n; i++) {
  dp.push((dp[i] + dp[i-1] * 2) % 10007)
}

console.log(dp[n])