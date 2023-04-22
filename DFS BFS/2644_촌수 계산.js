let [n, calc, m, ...relations] = `9
7 3
7
1 2
1 3
2 7
2 8
2 9
4 5
4 6`.split('\n');

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
  console.log(parent)
  console.log(child)

  // family.set(parent, family.get(parent)? family.get(parent).concat([child]) : [child]);
  family[child] = parent
}

console.log(family)