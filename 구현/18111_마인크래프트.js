/*
 * 인벤토리의 블록으로 땅을 메우기 - 1초
 * 블록을 제거하여 인벤토리에 넣기 - 2초
 *
 * 지금 내가 이해하기로는
 * - 모든 높이 (0부터 256까지)에 대해서 구해본다 => 나는 최소 크기부터 최대 크기로 할 생각임.
 * - 이 때, 높이 기준으로 파내야 하는 영역과 채워야하는 영역의 크기를 각각 구해둔다(누적이겠죠?)
 * - 이를 기준으로 빈 칸보다 인벤토리가 크면 인벤토리로 채우고, 그게 아니면 인벤토리 + 나머지 영역 뽑아다 심자.
 */

function solution (N, M, B, ground) {
  const sortedGround = ground.sort((a, b) => a - b);
  let wholeBlocks = sortedGround.reduce((acc, cur) => acc + cur, 0);

  let baseBlocks = 0;
  let restBlocks = 0;
  let empties = 0;

  let maxHeight = 0;
  let time = 500 * 500 * 256 * 3;

  let min = sortedGround[0];
  let max = sortedGround[N * M - 1];
  let idx = 0;
  let prevIdx = 0;

  for (let h = min; h <= max; h++) {
    let tmpHeight = h;
    prevIdx = idx;
    while (idx < N * M && sortedGround[idx] < h) idx++;
    empties += idx;
    baseBlocks = N * M * h  - empties;
    restBlocks = wholeBlocks - baseBlocks;

    let tmpTime = 0;
    if ( empties <= B + restBlocks ) {   // 빈 공간을 채울 수 있는 경우, 깎아서 쓰든지 인벤토리에서 갖다 쓰든지...
      tmpTime += empties;
      tmpTime += restBlocks * 2;
    }
    else {                               // 빈 공간을 채울 수 없는 경우.. 이럴땐 어떡해
      tmpTime = time;
      tmpHeight = maxHeight;
    }


    if (tmpTime <= time) {
      maxHeight = tmpHeight;
      time = tmpTime;
    }
  }

  return `${time} ${maxHeight}`;
}

let [N, M, B, ...ground] = `2 2 68
120 90
250 170`.split(/\s+/).map(Number);

console.log(solution(N, M, B, ground))