/*
 * N 값이 들어올 때, 재귀 방식과 DP 방식의 코드 1과 코드 2의 호출 횟수를 각각 구한다.
 *
 * 재귀 방식 코드
 * fib(n) {
 *   if (n = 1 or n = 2)
 *   then return 1;  # 코드1
 *   else return (fib(n - 1) + fib(n - 2));
 * }
 *
 * DP 방식 코드
 * fibonacci(n) {
 *   f[1] <- f[2] <- 1;
 *   for i <- 3 to n
 *     f[i] <- f[i - 1] + f[i - 2];  # 코드2
 *   return f[n];
 * }
 */

const solution = (N) => {
  /*
   * DP 방식은! n이 1이나 2면 호출되지 않고 3부터 한 번씩 호출됨. 따라서 N-2 호출된다.
   * 재귀 방식은! n이 1이나 2가 될 때까지 계속 호출될 것이당.
   *
   *
   * f1 f2는 각각 1번 호출
   * f3은 2번 호출
   * f4는 f3 f2이므로 2 + 1 = 3번 호출
   * f5는 f4 f3이므로 3 + 2 = 5번 호출
   * f6은 f5 f4이므로 5 + 3 = 8번 호출 .....
   *
   */
  const memo = new Array(N+1).fill(0);
  memo[1] = memo[2] = 1;
  for (let i=3; i<=N; i++) {
    memo[i] = memo[i-1] + memo[i-2];
  }

  return `${memo[N]} ${N-2}`
}

let input = Number(`30`);
console.log(solution(input))