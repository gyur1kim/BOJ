const [N, ...arr] = `8
1 1 1 2 2 1 1 1`
  .split(/\s+/)
  .map(Number);

const prefix1 = Array(N + 1).fill(0); // 왼쪽 누적합
const prefix2 = Array(N + 1).fill(0); // 오른쪽 누적합

for (let i = 1; i <= N; i++) {
  if (arr[i - 1] === 1) {
    prefix1[i] = prefix1[i - 1] + 1;
    prefix2[i] = prefix2[i - 1];
  } else {
    prefix1[i] = prefix1[i - 1];
    prefix2[i] = prefix2[i - 1] + 1;
  }
}

// prefix1 = [0, 0, 0, 1, 2, 2, 2, 2]
// prefix2 = [1, 2, 3, 3, 3, 4, 5, 6]

console.log(`prefix1: ${prefix1}`);
console.log(`prefix2: ${prefix2}`);

let max = 0;
let minPrefix = 0;
let maxPrefix = 0;

// 슬라이딩 윈도우
for (let i = 1; i <= N; i++) {
  const diff = prefix1[i] - prefix2[i];

  max = Math.max(max, Math.abs(minPrefix - diff), Math.abs(maxPrefix - diff));

  minPrefix = Math.min(minPrefix, diff);
  maxPrefix = Math.max(maxPrefix, diff);

  console.log(`diff: ${diff}, max: ${max}, minPrefix: ${minPrefix}, maxPrefix: ${maxPrefix}`);
}

console.log(max);
