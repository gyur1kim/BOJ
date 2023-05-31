let dp = [0, 1, 2, 3];
let n = parseInt(`9`);

// 9660KB, 188ms
while (dp.length <= n) {
  dp.push((dp[dp.length-1] + dp[dp.length-2]) % 10007);
}

// 	9648KB, 196ms
for (let i=4; i<=n; i++) {
  dp[i] = (dp[i-1] + dp[i-2]) % 10007;
}

console.log(dp[n]);
