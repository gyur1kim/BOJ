/*
 * 4를 1, 2, 3의 합으로 나타내는 방법은?!
 * 1+1+1+1
 * 1+2+1
 * 2+1+1
 * 3+1      => 3을 만드는 방법
 *
 * 1+1+2
 * 2+2      => 2를 만드는 방법
 *
 * 1+3      => 1을 만드는 방법
 *
 * 1을 만드는 방법 + 2를 만드는 방법 + 3을 만드는 방법 = 4를 만드는 방법
 */

let [TC, ...N] = `3
2
7
10`.split('\n').map(Number);

let dp = [0, 1, 2, 4]
for (let tc = 0; tc < TC; tc++) {
  let n = N[tc];

  // if (n < 4) {
  //   console.log(dp[n]);
  // }
  // else {
  //   if (dp.length <= n) {   // 내가 구하려는게 아직 n에 없을 때
  //     while (dp.length <= n) {
  //       dp.push(dp[dp.length-1] + dp[dp.length-2] + dp[dp.length-3]);
  //     }
  //     console.log(dp[n]);
  //   }
  //   else {
  //     console.log(dp[n]);
  //   }
  // }

  // 내가 구하려는게 아직 n에 없을 때
  while (dp.length <= n) {
    dp.push(dp[dp.length-1] + dp[dp.length-2] + dp[dp.length-3]);
  }

  console.log(dp[n]);
}