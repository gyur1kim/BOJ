function solution(N, C, houses) {
  houses.sort((a, b) => a - b);

  let start = 0;
  let end = houses[N - 1];
  let maxGap = -Infinity;

  while (start <= end) {
    let gap = Math.ceil((end + start) / 2);
    let tmpStartIdx = 0;
    let tmpNextIdx = 1;
    let tmpC = C - 1;

    while (tmpNextIdx < N) {
      console.log("tmpStartIdx, tmpNextIdx", tmpStartIdx, tmpNextIdx);
      console.log("tmpC", tmpC);
      if (houses[tmpNextIdx] - houses[tmpStartIdx] < gap) {
        tmpNextIdx++;
        continue;
      }

      tmpC--;
      tmpStartIdx = tmpNextIdx;
      tmpNextIdx = tmpStartIdx + 1;
    }

    // 공유기가 남아요 > gap을 줄입시다.
    if (tmpC > 0) {
      end = gap - 1;
      continue;
    }

    maxGap = Math.max(maxGap, gap);
    start = gap + 1;
  }

  console.log(maxGap);
}

const [N, C, ...houses] = `5 3
1
2
8
4
9`
  .split(/\s/)
  .map(Number);

solution(N, C, houses);
