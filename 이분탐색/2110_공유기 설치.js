function solution(N, C, houses) {
  houses.sort((a, b) => a - b);

  let start = 1;
  let end = houses[N - 1] - houses[0];
  let maxGap = -Infinity;

  while (start <= end) {
    let gap = Math.ceil((end + start) / 2);

    // 공유기 안남아요 => 잘 설치했어요
    if (setC(N, C, houses, gap)) {
      maxGap = Math.max(maxGap, gap);
      start = gap + 1;
    }
    // 공유기가 남아요 => gap을 줄입시다.
    else {
      end = gap - 1;
    }
  }

  console.log(maxGap);
}

function setC(N, C, houses, gap) {
  let cntC = 1;
  let prevHouse = houses[0];

  for (let i = 1; i < N; i++) {
    if (houses[i] - prevHouse >= gap) {
      cntC++;
      prevHouse = houses[i];
    }
  }

  // 설치된 공유기 개수가 C개 이상인지? (== 공유기가 남진 않는거지?)
  return cntC >= C;
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
