const [T, ...inputs] = `11
12
13
18
1000000000`
  .split("\n")
  .map(Number);
const MOD = 10_0000_0007;

function pow(a, n) {
  let result = 1;

  while (n > 0) {
    //n이 홀수인 경우, 결과에 a를 곱하고 n을 하나 감소
    if (n % 2 === 1) {
      result = (result * a) % MOD;
      n -= 1;
    }

    // a를 제곱하고 n을 반으로 줄임
    a = (a * a) % MOD;
    n = Math.floor(n / 2);
  }

  return result;
}

let answer = "";

for (const N of inputs) {
  if (N < 3) {
    answer += "1\n";
  } else {
    answer += `${pow(2, N - 2)}\n`;
  }
}

console.log(answer);
