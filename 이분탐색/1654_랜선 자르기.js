function solution () {
  let [K, N, ...LANs] = `4 11
    802
    743
    457
    539`.split(/\s+/).map(Number);

  let [min, max] = [0, 2 ** 31 - 1];
  let LANLength = Math.floor((max+min)/2);
  while (max >= min) {
    let tmpLength = Math.floor((max+min)/2);
    let tmpCnt = 0;

    // for (let LAN of LANs) {
    //   tmpCnt += Math.floor(LAN / tmpLength);
    // }
    for (let i=0; i<K; i++) {
      tmpCnt += Math.floor(LANs[i] / tmpLength);
    }

    if (tmpCnt >= N) {            // 내가 원하는 조각 수지만.. 그래도 더 늘려서 잘라보자
      LANLength = tmpLength;
      min = tmpLength + 1;
    }
    // else if (tmpCnt > N) {    // 내가 원한 조각수보다 많이 잘린 것 -> 크기를 늘리자
    //   LANLength = tmpLength;
    //   min = tmpLength + 1;
    // }
    else {   // 내가 원한 조각수보다 적게 잘린 것 -> 크기를 줄이자
      max = tmpLength - 1;
    }
  }

  console.log(LANLength)
}

solution();