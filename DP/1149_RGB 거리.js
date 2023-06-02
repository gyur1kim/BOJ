let [n, ...RGBs] = `6
30 19 5
64 77 64
15 19 97
4 71 57
90 86 84
93 32 91`.split('\n');

// n = Number(n);
// let dp = Array.from(Array(n), () => Array(3).fill(-1));
// dp[0] = (RGBs[0].split(' ').map(Number));
// console.log(dp);
//
// for (let i=1; i<n; i++) {
//   let RGB = RGBs[i].split(' ').map(Number);
//
//   dp[i][0] = RGB[0] + Math.min(dp[i-1][1], dp[i-1][2]);
//   dp[i][1] = RGB[1] + Math.min(dp[i-1][0], dp[i-1][2]);
//   dp[i][2] = RGB[2] + Math.min(dp[i-1][0], dp[i-1][1]);
//
//   console.log(dp)
// }

n = Number(n);
let dp = [RGBs[0].split(' ').map(Number)];
// dp[0] = (RGBs[0].split(' ').map(Number));
console.log(dp);

for (let i=1; i<n; i++) {
  let RGB = RGBs[i].split(' ').map(Number);

  // 쓸데 없는 변수를 제거했더니 시간과 메모리 둘 다 감소했다.
  // let tmpRow = [];
  // tmpRow.push(RGB[0] + Math.min(dp[i-1][1], dp[i-1][2]));
  // tmpRow.push(RGB[1] + Math.min(dp[i-1][0], dp[i-1][2]));
  // tmpRow.push(RGB[2] + Math.min(dp[i-1][0], dp[i-1][1]));
  // dp.push(tmpRow);

  dp[i] = [RGB[0] + Math.min(dp[i-1][1], dp[i-1][2]),
          RGB[1] + Math.min(dp[i-1][0], dp[i-1][2]),
          RGB[2] + Math.min(dp[i-1][0], dp[i-1][1])]
}
console.log(Math.min(...dp[n-1]))
