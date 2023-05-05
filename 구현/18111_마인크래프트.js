/*
 * 인벤토리의 블록으로 땅을 메우기 - 1초
 * 블록을 제거하여 인벤토리에 넣기 - 2초
 *
 * 1. 땅을 다 돌면서 평균 높이를 구해본다?
 * 2. 평균 높이를 기준으로 다시 땅을 돌아보면서 높으면 깎고 낮으면 심어본다???
 *    그러면서 구하면 되는거 아닌가
 */

function solution (N, M, B, ground) {
  const sortedGround = ground.sort((a, b) => a - b);

  /*
   * 일단 평균 높이부터 구해보자...??
   */

  let avgHeight = Math.round(sortedGround.reduce((acc, cur) => acc + cur, 0)/(N*M))

  for (let h=sortedGround[0]; h<=sortedGround[N*M-1]; h++) {

  }




  return avgHeight;

}

let [N, M, B, ...ground] = `3 4 1
64 64 64 64
64 64 64 64
64 64 64 63`.split(/\s+/).map(Number);

console.log(solution(N, M, B, ground))