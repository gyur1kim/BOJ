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

        if (maps[nextRr][nextRc] !== "#" || maps[nextBr][nextBc] !== "#") {
          const [isExit, resultRr, resultRc, resultBr, resultBc] = move(
            rr,
            rc,
            br,
            bc,
            d,
            visitedPositionAndDirection
          );

          if (isExit === true) {
            return moveCnt;
          }

          if (isExit === false) continue;

          if (!visitedPositionAndDirection[d][resultRr][resultRc][resultBr][resultBc]) {
            visitedPositionAndDirection[d][resultRr][resultRc][resultBr][resultBc] = true;
            nextQueue.push([resultRr, resultRc, resultBr, resultBc]);
          }
        }
      }
    }
    moveCnt++;
  }

  return -1;
}

function moveBlue(redR, redC, blueR, blueC, d) {
  const dir = directions[d];
  let bp = [blueR, blueC];

  while (true) {
    let [nextBr, nextBc] = [dir[0] + bp[0], dir[1] + bp[1]];

    if (maps[nextBr][nextBc] === "O") return false;

    if (maps[nextBr][nextBc] === "#" || (nextBr === redR && nextBc === redC)) return bp;

    bp = [nextBr, nextBc];
  }
}

function move(redR, redC, blueR, blueC, d, visitedPositionAndDirection) {
  const dir = directions[d];
  let rp = [redR, redC];
  let bp = [blueR, blueC];
  let isBlueMoved = false;

  while (true) {
    let [nextRr, nextRc] = [dir[0] + rp[0], dir[1] + rp[1]];

    if (maps[nextRr][nextRc] === "O") {
      rp = [nextRr, nextRc];

      if (!isBlueMoved) {
        const result = moveBlue(...rp, ...bp, d);
        if (result === false) return [false, ...rp, ...bp];

        bp = result;
      }

      return [true, ...rp, ...bp];
    }

    if (maps[nextRr][nextRc] === "#") {
      if (!isBlueMoved) {
        const result = moveBlue(...rp, ...bp, d);
        if (result === false) return [false, ...rp, ...bp];

        bp = result;
      }

      if (bp[0] === blueR && bp[1] === blueC && rp[0] === redR && rp[1] === redC)
        return [false, ...rp, ...bp];

      return [null, ...rp, ...bp];
    }

    if (nextRr === bp[0] && nextRc === bp[1]) {
      if (isBlueMoved) return [null, ...rp, ...bp];

      isBlueMoved = true;

      const result = moveBlue(...rp, ...bp, d);
      if (result === false) return [false, ...rp, ...bp];

      bp = result;

      if (bp[0] === blueR && bp[1] === blueC && rp[0] === redR && rp[1] === redC)
        return [false, ...rp, ...bp];
    } else {
      visitedPositionAndDirection[d][rp[0]][rp[1]][bp[0]][bp[1]] = true;
      rp = [nextRr, nextRc];
    }
  }
}
