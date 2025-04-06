// const [N, S, ...inputs] = `5 30
// 11 3 15 6 10`
//   .split(/\s+/)
//   .map(Number);

// console.log(N, S, inputs);

// let answer = Infinity;
// let left = (right = 0);

// let prefix = inputs[left];
// while (left < N) {
//   if (prefix < S) {
//     if (right < N - 1) {
//       right++;
//       prefix += inputs[right];
//     } else {
//       break;
//     }
//   } else if (prefix >= S) {
//     const prefixLength = right - left + 1;
//     answer = Math.min(answer, prefixLength);

//     prefix -= inputs[left];
//     left++;

//     if (left > right) {
//       right = left;
//       prefix += inputs[right];
//     }
//   }
// }
// console.log(answer);

const [N, S, ...inputs] = `5 30
11 3 15 6 10`
  .split(/\s+/)
  .map(Number);

let answer = Infinity;
let prefix = 0;
let left = 0;

for (let right = 0; right < N; right++) {
  prefix += inputs[right];

  while (prefix >= S) {
    answer = Math.min(answer, right - left + 1);
    prefix -= inputs[left];
    left++;
  }
}

console.log(answer === Infinity ? 0 : answer);
