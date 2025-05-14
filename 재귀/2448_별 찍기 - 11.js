const N = +`24`;
const M = N * 2; // 가로 = (N / 3) * 6 = N * 2
let answer = Array(N)
  .fill()
  .map(() => Array(M).fill(" "));

function star(r, c, N) {
  if (N === 3) {
    answer[r][c] = "*";
    answer[r + 1][c - 1] = answer[r + 1][c + 1] = "*";
    answer[r + 2][c - 2] = answer[r + 2][c - 1] = answer[r + 2][c] = answer[r + 2][c + 1] = answer[r + 2][c + 2] = "*";
    return;
  }

  const divN = N / 2;
  star(r, c, divN);
  star(r + divN, c - divN, divN);
  star(r + divN, c + divN, divN);
}

star(0, M / 2 - 1, N);

console.log(answer.map(l => l.join("")).join("\n"));
