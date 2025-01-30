// 2025.01.30 풀이
// dp[n] = dp[n-1] + dp[n-5]
const [T, ...input] = `2
12
6`
  .split(/\s+/)
  .map(Number);

const dp = [0, 1, 1, 1, 2, 2, 3, 4, 5, 7, 9];

let result = "";

for (const N of input) {
  if (dp.length > N) {
    result += `${dp[N]}\n`;
    continue;
  }

  // n=10까지 알면 Length는 11이라구용
  let i = dp.length;
  while (dp.length <= N) {
    dp.push(dp[i - 1] + dp[i - 5]);
    i++;
  }
  result += `${dp[N]}\n`;
}

console.log(result);

/*
 * 1, 1, 1, 2, 2, 3, 4, 5, 7, 9
 * 바로 자신 전의 삼각형, 그리고 다섯 번째 전의 삼각형의 변의 길이를 구한 것과 같다.
 * 빙글 빙글 돌아서.. 그런듯
 */
// 2023.05.13 풀이
// const solution = (T, N) => {
//   const memo = [0, 1, 1, 1, 2, 2, 3, 4, 5, 7, 9];
//   // length는 내가 구하고자 하는 N보다 항상 +1 크다. 앞에 idx=0인 경우를 넣었거든
//   let ans = [];
//   for (let t=0; t<T; t++) {
//     let n = N[t];
//     while (memo.length <= n) {
//       memo.push(memo[memo.length-1] + memo[memo.length-5]);
//     }
//     ans.push(memo[n])
//   }

//   return ans.join('\n');
// }

// let [T, ...N] = `2
// 6
// 12`.split(/\s+/).map(Number);
// console.log(solution(T, N))
