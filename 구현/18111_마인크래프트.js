/*
 * 인벤토리의 블록으로 땅을 메우기 - 1초
 * 블록을 제거하여 인벤토리에 넣기 - 2초
 *
 * 지금 내가 이해하기로는
 * - 모든 높이 (0부터 256까지)에 대해서 구해본다 => 나는 최소 크기부터 최대 크기로 할 생각임.
 * - 이 때, 높이 기준으로 파내야 하는 영역과 채워야하는 영역의 크기를 각각 구해둔다(누적이겠죠?)
 * - 이를 기준으로 빈 칸보다 인벤토리가 크면 인벤토리로 채우고, 그게 아니면 인벤토리 + 나머지 영역 뽑아다 심자.
 */


// 이 방식은 시간도 오래 걸리고 메모리도 많이 차지했다. 정렬을 하지 말까..
// 52036KB, 380ms
function solution1 (N, M, B, ground) {
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

// 더 느려짐...
// 52864KB, 448ms
function solution2 (N, M, B, ground) {
  let maxHeight = 0;
  let time = 500 * 500 * 256 * 3;

  let min = Math.min(...ground)   // 최저 높이
  let max = Math.max(...ground)   // 최고 높이

  for (let h = min; h <= max; h++) {
    let tmpHeight = h;
    let tmpTime = 0;

    let restBlocks = 0;
    let empties = 0;

    for (let i=0; i<ground.length; i++) {
      if (ground[i] <= tmpHeight) {    // 현재 기준이되는 높이보다 땅이 낮으면?
        empties += tmpHeight - ground[i];
      }
      else {    // 현재 기준이 되는 높이보다 땅이 높으면?
        restBlocks += ground[i] - tmpHeight;
      }
    }

    console.log(restBlocks);
    console.log(empties);

    if ( empties <= B + restBlocks ) {   // 빈 공간을 채울 수 있는 경우, 깎아서 쓰든지 인벤토리에서 갖다 쓰든지...
      tmpTime += empties + restBlocks * 2;
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

// min max를 구하는 것이 리소스를 많이 잡아먹는 것 같아 없앴다.
// 메모리는 줄었지만 시간은 늘어났음.. min max가 아니라 0부터 256까지 다 돌아보기 때문에 시간이 늘은 듯 하다.
// 	49296KB, 460ms
function solution3 (N, M, B, ground) {
  let maxHeight = 0;
  let time = 500 * 500 * 256 * 3;

  let blocks = ground.reduce((acc, cur) => acc + cur, 0);
  let empties = 0;

  for (let h = 0; h <= 256; h++) {
    let tmpHeight = h;
    let tmpTime = time;

    for (let i=0; i<ground.length; i++) {
      if (ground[i] < h) {    // 현재 기준이되는 높이보다 땅이 낮으면?
        empties++;
      }
      else {    // 현재 기준이 되는 높이보다 땅이 높으면?
        h > 0 && blocks--;
      }
    }

    console.log(`h: ${h}, empties: ${empties}, blocks: ${blocks}`)

    if ( empties <= B + blocks ) {        // 빈 공간을 채울 수 있는 경우, 깎아서 쓰든지 인벤토리에서 갖다 쓰든지...
      tmpTime = empties + blocks * 2;
    }
    else {                               // 빈 공간을 채울 수 없는 경우.. 이럴땐 어떡해
      tmpTime = time;
      tmpHeight = maxHeight;
    }

    console.log(`tmpTime: ${tmpTime}`)
    if (tmpTime <= time) {
      maxHeight = tmpHeight;
      time = tmpTime;
    }
    console.log(`==================================`)
  }

  return `${time} ${maxHeight}`;
}

// 고수의 코드를 보자..
// https://www.acmicpc.net/source/55957318
// 고수의 코드였는데도 오래 걸렸다. 왜지?
// 49100KB, 300ms
function solution (N, M, B, ground) {

  // 1. 각 높이의 블록이 몇 개 있는지 구함
  let arr = Array(257).fill(0);
  for (let i=0; i<N*M; i++) {
    arr[ground[i]]++;
  }

  // 2. arr에서 뒤에서부터 보며 0이 아닐 때까지 pop, 0이 되면.. 옮기고 할 것도 없으므로 끝
  let isNoBlocksFlag = true
  for (let i=256; i>=0; i--) {
    if (arr[i] === 0) arr.pop();
    else {
      isNoBlocksFlag = false;
      break;
    }
  }
  if (isNoBlocksFlag) return "0 0"

  console.log(arr)

  // 3. 이제 직접 0부터 최고 높이까지 돌아봅시다
  let maxHeight = arr.length - 1;
  let time = 500 * 500 * 256 * 3;
  let H = -1;

  // 4. 0부터 최고 높이까지 arr를 돌아보자.
  for (let i = 0; i <= maxHeight; i++) {
    let empty = 0, remove = 0;    // 빈 칸과 제거해야할 블록
    let inventory = B;
    let flag = true;

    // 5. 최고높이부터 하나씩 내려오기?
    // 현재 내가 설정한 높이 i보다 높은 블록은 remove에 더하고, 내가 설정한 높이랑 같아지면 기존에 구한 remove를 inventory에 더하고,
    // 내가 설정한 높이보다 낮아지면 빈 공간을 구하고 inventory에 저장된 블록보다 큰지 작은지 구하자.
    for (let j = maxHeight; j >= 0; j--) {
      if (j > i) {
        remove += arr[j] * (j - i);
      }
      else if (j === i) inventory += remove;
      else {
        empty += arr[j] * (i - j);
        if (empty > inventory) {
          flag = false;
          break;
        }
      }
    }
    if (flag) {
      let _time = empty + 2 * remove;
      if (time >= _time) {
        time = _time;
        H = i;
      }
    }
  }

  return `${time} ${H}`;
}


let [N, M, B, ...ground] = `4 4 36
15 43 61 21
19 33 31 55
48 63 1 30
31 28 3 8`.split(/\s+/).map(Number);

console.log(solution(N, M, B, ground))