function solution(input) {
  let [n, AB, m, ...relations] = input.split('\n');
  /*
   * 전체 9명이 있다.
   * 7번 사람과 3번 사람의 촌수를 계산해야 한다.
   * 부모 자식 관계는 7개가 있다.
   * 2번의 부모는 1번이다
   * 3번의 부모는 1번이다
   * 7번의 부모는 2번이다
   * ...
   * 5번의 부모는 4번이다
   * 6번의 부모는 4번이다
   */
// 가족 = [자식 idx에 부모가 들어가면 될 듯!]

  const family = new Array(+n+1).fill(0);
  for (const relation of relations) {
    let [parent, child] = relation.split(' ').map(Number)
    family[child] = parent
  }
  console.log(family);

  let [A, B] = AB.split(' ').map(Number);

  const AFamily = [A];
  while (family[A] !== 0) {
    AFamily.push(family[A]);
    A = family[A];
  }
  console.log(AFamily);

  const BFamily = [B];
  while (family[B] !== 0) {
    BFamily.push(family[B]);
    B = family[B];
  }
  console.log(BFamily);

  if (BFamily.pop() !== AFamily.pop()) {
    return -1
  }
  else {
    while (BFamily.length && AFamily.length) {
      if (BFamily.pop() !== AFamily.pop()) {
        return Math.abs(AFamily.length + BFamily.length) + 2
      }
    }
    return Math.abs(AFamily.length - BFamily.length);


    // for (let i=0; i<AFamily.length; i++) {
    //   for (let j=0; j<BFamily.length; j++) {
    //     if (AFamily[i] === BFamily[j]) {
    //       return (i+j);
    //     }
    //   }
    // }
  }
}

console.log(solution(`16
1 10
1
1 2
1 3
1 4
2 5
3 6
3 7
4 8
4 9
4 10
8 15
15 16
11 12
11 13
11 14`));

/*
 * 내가 생각한 방식은
 * 1. 각 자식들의 부모를 저장한다(배열의 idx는 자식의 번호, idx에 해당하는 값은 부모)
 * 2. 주어진 자식에서부터 맨 위 부모까지 거슬러 올라간다(배열에 각각 저장하기)
 * 3. 만약 상위 부모가 다르다면, 다른 가족인 것이므로 -1을 출력한다.
 * 3-1. 맨 위 부모가 같다면, 이중for문을 돌려서 조상이 겹치는 순간을 찾아낸다.
 *      그 때 A는 얼만큼 위로 올라갔고, B는 얼만큼 위로 올라갔는지 더하면, 둘의 촌수를 구할 수 있다.
 *
 * ---
 * 주어진 n의 크기가 작기 때문에 (100) 이중for문을 돌려도 크게 문제되지 않았다.
 * 하지만 다른 사람들의 코드도 분석하며 dfs로 푸는 방법도 연구해봐야겠다.
 */

/*
 * 2023-04-25 2중for문으로 안풀어도 되는 방법을 찾았다...!!
 * 뒤에서부터 비교하면서 부모가 달라지는 부분을 찾으면 되지 않나
 * pop을 이용해 풀어보았지만 시간은 여전히 124ms이다.
 * 2중 for문이 아니라 빠를 줄 알았는데 아쉽다.
 */