function solution(N, M, map, tc) {
  let result = "";
  const [matrixJ, matrixO, matrixI] = makePrefixSumMatrix(N, M, map);

  for (const [a, b, c, d] of tc) {
    const countJ = getPrefixSum(matrixJ, a, b, c, d);
    const countO = getPrefixSum(matrixO, a, b, c, d);
    const countI = getPrefixSum(matrixI, a, b, c, d);

    result += `${countJ} ${countO} ${countI}\n`;
  }

  console.log(result);
}

function makePrefixSumMatrix(N, M, map) {
  const matrixJ = Array(M + 1)
    .fill()
    .map(() => Array(N + 1).fill(0));
  const matrixO = Array(M + 1)
    .fill()
    .map(() => Array(N + 1).fill(0));
  const matrixI = Array(M + 1)
    .fill()
    .map(() => Array(N + 1).fill(0));

  for (let i = 1; i <= M; i++) {
    for (let j = 1; j <= N; j++) {
      const terrain = map[i - 1][j - 1];
      switch (terrain) {
        case "J":
          prefixSum(matrixJ, i, j, true);
          prefixSum(matrixO, i, j);
          prefixSum(matrixI, i, j);
          break;
        case "O":
          prefixSum(matrixJ, i, j);
          prefixSum(matrixO, i, j, true);
          prefixSum(matrixI, i, j);
          break;
        case "I":
          prefixSum(matrixJ, i, j);
          prefixSum(matrixO, i, j);
          prefixSum(matrixI, i, j, true);
          break;
      }
    }
  }

  return [matrixJ, matrixO, matrixI];
}

function prefixSum(matrix, i, j, doUpdate = false) {
  matrix[i][j] =
    (matrix[i - 1][j] || 0) +
    (matrix[i][j - 1] || 0) -
    (matrix[i - 1][j - 1] || 0) +
    Number(doUpdate);
}

function getPrefixSum(matrix, a, b, c, d) {
  return matrix[c][d] - matrix[a - 1][d] - matrix[c][b - 1] + matrix[a - 1][b - 1];
}

const [MN, K, ...inputs] = `4 7
4
JIOJOIJ
IOJOIJO
JOIJOOI
OOJJIJO
3 5 4 7
2 2 3 6
2 2 2 2
1 1 4 7`.split("\n");

const [M, N] = MN.split(" ").map(Number);
const map = inputs.slice(0, M);
const tc = inputs.slice(M).map(input => input.split(" ").map(Number));

solution(N, M, map, tc);
