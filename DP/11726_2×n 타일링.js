let dp = [0, 1, 2];
let n = parseInt(`9`);

if (n < dp.length){
  console.log(dp[n]);
}
else {
  while (dp.length <= n) {
    dp.push(dp[dp.length-1] + (dp[dp.length-2] * 2));
    console.log(dp);
  }
}
