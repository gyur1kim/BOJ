const [N, ...SCVs] = `3
12 10 4`
  .split(/\s+/)
  .map(Number);

let answer = 0;

if (N === 1) {
  answer = Math.ceil(SCVs[0] / 9);
} else {
  if (N === 2) SCVs.push(0);
  answer = bfs(SCVs);
}

console.log(answer);

function bfs(SCVs) {
  const ATTACKS = [
    [9, 3, 1],
    [9, 1, 3],
    [3, 9, 1],
    [3, 1, 9],
    [1, 3, 9],
    [1, 9, 3],
  ];
  const visited = Array(61)
    .fill()
    .map(() =>
      Array(61)
        .fill()
        .map(() => Array(61).fill(false))
    );
  visited[SCVs[0]][SCVs[1]][SCVs[2]] = true;
  visited[0][0][0] = true;

  let stack = [];
  let nextStack = [[...SCVs]];
  let answer = 0;

  while (nextStack.length) {
    stack = [...nextStack];
    nextStack = [];

    while (stack.length) {
      const newSCVs = stack.pop();

      for (const [attack1, attack2, attack3] of ATTACKS) {
        const nextSCV1 = Math.max(0, newSCVs[0] - attack1);
        const nextSCV2 = Math.max(0, newSCVs[1] - attack2);
        const nextSCV3 = Math.max(0, newSCVs[2] - attack3);

        console.log(`지금 scv는 ${newSCVs}입니당. 여기서 공격을 하면 ${[nextSCV1, nextSCV2, nextSCV3]}입니당`);

        if (checkIsOver([nextSCV1, nextSCV2, nextSCV3])) return answer + 1;
        if (visited[nextSCV1][nextSCV2][nextSCV3]) continue;

        nextStack.push([nextSCV1, nextSCV2, nextSCV3]);
        visited[nextSCV1][nextSCV2][nextSCV3] = true;
      }
    }

    answer += 1;
    console.log(nextStack);
  }
}

function checkIsOver(SCVs) {
  let isEnd = true;
  for (const SCV of SCVs) {
    if (SCV > 0) isEnd = false;
  }

  return isEnd;
}
