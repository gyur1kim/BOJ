let [A, K] = `1111 997651`.split(' ').map(Number);
let count = 0

/*
 * 1. 2로 나누었을 때 나머지가 존재(홀수임)
 *   1-1. 몫이 A보다 크거나 같다면, 2로 나누고 1을 빼는 과정을 거쳐야 함(2번 카운트)
 *        그 후 K값을 줄이고 다시 계산
 *   1-2. 몫이 A보다 작아지게 된다면, K-A를 진행하여 나온 값만큼 카운트를 올림
 */

while (K > A) {

  if (K % 2 === 1) {
    if (Math.floor(K / 2) >= A) {
      count += 2;
      K = Math.floor(K / 2)
    }
    else {
      count += K - A;
      break;
    }
  }
  else {
    if (Math.floor(K / 2) >= A) {
      count += 1;
      K = Math.floor(K / 2)
    }
    else {
      count += K - A;
      break;
    }
  }
}

console.log(count);