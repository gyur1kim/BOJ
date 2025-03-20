let [NM, ...maps] = `7 8
########
#..#.###
#.#...R#
#...#B##
#.#.O###
##....##
########
`.split("\n");
let [N, M] = NM.split(" ").map(Number);
maps = maps.map(e => e.split(""));

let redPosition;
let bluePosition;
for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (maps[i][j] === "R") {
      redPosition = [i, j];
      continue;
    }

    if (maps[i][j] === "B") {
      bluePosition = [i, j];
      continue;
    }
  }

  if (redPosition && bluePosition) break;
}

const directions = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1],
];
const result = bfs();
console.log(result);

function bfs() {
  // 빨간구슬의 r, c, 파란구슬의 r, c,  그리고 방향 4개에 대해서 방문 처리
  const visitedPositionAndDirection = Array(4)
    .fill()
    .map(() =>
      Array(N)
        .fill()
        .map(() =>
          Array(M)
            .fill()
            .map(() =>
              Array(N)
                .fill()
                .map(() => Array(M).fill(false))
            )
        )
    );
  let queue = [];
  let nextQueue = [[...redPosition, ...bluePosition]];
  let moveCnt = 1;

  // 10회 넘으면 -1입니당.
  while (moveCnt <= 10) {
    queue = [...nextQueue];
    nextQueue = [];

    if (queue.length <= 0) break;

    while (queue.length) {
      const [rr, rc, br, bc] = queue.pop();

      for (let d = 0; d < 4; d++) {
        const [nextRr, nextRc] = [directions[d][0] + rr, directions[d][1] + rc];
        const [nextBr, nextBc] = [directions[d][0] + br, directions[d][1] + bc];
        if (nextRr < 0 || nextRr >= N || nextRc < 0 || nextRc >= M) continue;
        if (nextBr < 0 || nextBr >= N || nextBc < 0 || nextBc >= M) continue;

        // 내가 갈 곳이 둘 다 벽이 아니라면 가봅시다.
        if (maps[nextRr][nextRc] !== "#" || maps[nextBr][nextBc] !== "#") {
          // 한 방향으로 빨간구슬, 파랑구슬 이동시키고 그 결과 [isSuccess, 좌표 4개]

          console.log("현재 redPosition=>", rr, rc, "현재 bluePosition=>", br, bc);
          console.log(d, "방향으로 굴려보겠습니당.");
          const [isExit, resultRr, resultRc, resultBr, resultBc] = move(
            rr,
            rc,
            br,
            bc,
            d,
            visitedPositionAndDirection
          );

          console.log("=====");

          // 빨간구슬이 빠졌으면 isExit true로 함.
          if (isExit === true) {
            return moveCnt;
          }
          // 파랑구슬이 빠졌으면 isExit false로 함.
          if (isExit === false) continue;

          // 둘 다 아니면 nextQueue에 넣어.
          if (!visitedPositionAndDirection[d][resultRr][resultRc][resultBr][resultBc]) {
            visitedPositionAndDirection[d][resultRr][resultRc][resultBr][resultBc] = true;
            nextQueue.push([resultRr, resultRc, resultBr, resultBc]);
          }
          console.log("nextQueue=>", nextQueue);
        }
      }
    }
    moveCnt++;
  }
  console.log("10회를 넘었거나 queue가 더 이상 없습니다. 종료합니다.");
  return -1;
}

function moveBlue(redR, redC, blueR, blueC, d) {
  const dir = directions[d];
  let bp = [blueR, blueC];

  while (true) {
    let [nextBr, nextBc] = [dir[0] + bp[0], dir[1] + bp[1]];

    // 파란공이 빠지면 곤란함... false!
    if (maps[nextBr][nextBc] === "O") {
      console.log("파란공이 빠졌습니다.. NO...");
      return false;
    }

    // 빨간공이나 벽을 만나면 마지막 좌표 return
    if (maps[nextBr][nextBc] === "#" || (nextBr === redR && nextBc === redC)) {
      console.log("파란구슬이 벽을 만났습니다.");
      return bp;
    }

    // 빠지지도 않고 벽을 만나지도 않고 빨간구슬도 안만남
    console.log("파란구슬을 움직입니다.");
    bp = [nextBr, nextBc];
  }
}

function move(redR, redC, blueR, blueC, d, visitedPositionAndDirection) {
  // 이 방향으로 움직일겁니다.
  const dir = directions[d];
  let rp = [redR, redC];
  let bp = [blueR, blueC];
  let isBlueMoved = false;

  while (true) {
    let [nextRr, nextRc] = [dir[0] + rp[0], dir[1] + rp[1]];

    // 빨간 구슬 탈출 가능!
    if (maps[nextRr][nextRc] === "O") {
      console.log("빨간 구슬이 출구를 발견했습니다.");
      rp = [nextRr, nextRc];

      if (!isBlueMoved) {
        console.log("파란구슬을 움직인 적이 없으므로 움직입니다.");
        const result = moveBlue(...rp, ...bp, d);
        if (result === false) return [false, ...rp, ...bp];

        bp = result;
      }

      return [true, ...rp, ...bp];
    }

    // 빨간 구슬이 벽을 만남! 이제 빨간 구슬 그만 굴려
    if (maps[nextRr][nextRc] === "#") {
      console.log("빨간구슬은 벽을 만났습니다.");

      // 파란구슬 움직인 적 없으면 움직여
      if (!isBlueMoved) {
        console.log("파란구슬을 움직인 적이 없으므로 움직입니다.");
        const result = moveBlue(...rp, ...bp, d);
        if (result === false) return [false, ...rp, ...bp];

        bp = result;
      }

      // 구슬 둘 다 안움직이면 X
      if (bp[0] === blueR && bp[1] === blueC && rp[0] === redR && rp[1] === redC) {
        console.log("구슬 둘 다 움직이지 않았습니당.");
        return [false, ...rp, ...bp];
      }

      // 파란구슬도 움직였고 빨간구슬도 다 움직였으면 각자 좌표 return하고, 둘 다 탈출 못했으니 null을 return하자.
      console.log(
        "빨간구슬 파란구슬 다 움직였습니다.",
        "redPosition=>",
        rp,
        "bluePosition=>",
        bp,
        "굴린방향 =>",
        d
      );
      return [null, ...rp, ...bp];
    }

    // 빨간 구슬이 파란 구슬을 만남!
    if (nextRr === bp[0] && nextRc === bp[1]) {
      console.log("파란구슬을 만났습니다.");
      // 이미 움직였으면 빨간거 멈추고 끝
      if (isBlueMoved) {
        console.log(
          "빨간구슬 파란구슬 다 움직였습니다.",
          "redPosition=>",
          rp,
          "bluePosition=>",
          bp,
          "굴린방향 =>",
          d
        );
        return [null, ...rp, ...bp];
      }

      // 빨간구슬 잠시 stop.. 파란구슬부터 움직여봐
      isBlueMoved = true;
      console.log("파란구슬을 움직인 적이 없으므로 움직입니다.");
      const result = moveBlue(...rp, ...bp, d);
      if (result === false) return [false, ...rp, ...bp];

      bp = result;

      // 근데 파란구슬이 안움직였으면? (RB#) 이런 상황임..
      // 이건 더 이상 dfs할 가치가 없다.
      if (bp[0] === blueR && bp[1] === blueC && rp[0] === redR && rp[1] === redC) {
        console.log("구슬 둘 다 움직이지 않았습니당.");
        return [false, ...rp, ...bp];
      }
    }
    // 벽 아니고 파란구슬도 아니고 출구도 아니면,, 빨간구슬 움직여
    else {
      console.log("빨간구슬을 움직입니다.");
      visitedPositionAndDirection[d][rp[0]][rp[1]][bp[0]][bp[1]] = true;
      rp = [nextRr, nextRc];
    }
  }
}
