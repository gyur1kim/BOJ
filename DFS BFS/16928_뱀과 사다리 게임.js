/**
 * 게임판 크기 10*10
 * 현재 i 번호일 때, 주사위를 굴려 i+1 ~ i+6 중 하나로 이동하게 됨.
 * 단 i+n이 100보다 크면 X
 *
 * 사다리 수 N -> 사다리를 타면 항상 현재 내 번호보다 커짐
 * 뱀의 수 M   -> 뱀을 만나면 항상 내 번호보다 작아짐
 *
 * 사다리 정보 x, y => x칸에 도착하면 y로 이동 (x < y)
 * 뱀의 정보   u, v => u칸에 도착하면 v로 이동 (u > v)
 *
 * 주사위를 최소 몇 번 굴릴까욥?
 */

class Queue {
  constructor() {
    this.items = {};
    this.headIndex = 0;
    this.tailIndex = 0;
  }

  enqueue(item) {
    this.items[this.tailIndex] = item;
    this.tailIndex++;
  }

  dequeue() {
    const item = this.items[this.headIndex];
    delete this.items[this.headIndex];
    this.headIndex++;
    return item;
  }
}

let [NM, ...infos] = `4 9
8 52
6 80
26 42
2 72
51 19
39 11
37 29
81 3
59 5
79 23
53 7
43 33
77 21`.split("\n");
let [N, M] = NM.split(" ");

let ladderSnake = new Map();
for (const info of infos) {
  let [from, to] = info.split(" ").map(Number);
  ladderSnake.set(from, to);
}

// visited는 여기 번호판까지 왔을 때 던진 주사위 횟수를 저장한다
let visited = new Array(101).fill(0);
const queue = new Queue();
// 번호를 넣어주자
queue.enqueue(1);

while (true) {
  let current = queue.dequeue();

  if (current === 100) {
    // BFS인데 100이면 끝이지~
    // console.log(visited);
    console.log(visited[current]);
    break;
  }

  // 사다리 or 뱀 있으면 이동해용
  if (ladderSnake.has(current)) {
    let next = ladderSnake.get(current);

    if (visited[next]) {
      visited[next] = Math.min(visited[current], visited[next]);
    } else {
      visited[next] = visited[current];
    }

    queue.enqueue(next);
    continue;
  }

  for (let i = 1; i <= 6; i++) {
    // 다음 번호 (현재 + 주사위 1~6 중에 하나 더한 값값)
    const next = current + i;

    // 안가봤거나 다음 번호판의 주사위 횟수가 현재보다 크면 갱신해서 다시 ㄱㄱ
    if (visited[next] === 0 || visited[next] > visited[current] + 1) {
      visited[next] = visited[current] + 1;
      queue.enqueue(next);
    }
  }
}

// 주사위 1부터 6까지 돌려봥
// move(start + 1, 1);
// move(start + 2, 1);
// move(start + 3, 1);
// move(start + 4, 1);
// move(start + 5, 1);
// move(start + 6, 1);

// function move(current, movementCount) {
//   // 100 넘으면 움직이지 마
//   if (current > 100) return;
//   // 방문했던 칸이면 돌아가
//   if (visited[current]) return;
//   // 지금 주사위 횟수가 현재 최단 횟수(diceMovement)보다 크면 끝내
//   if (diceMovement < movementCount) return;

//   // console.log(current, movementCount);
//   visited[current] = 1;

//   // 만약 뱀이나 사다리면 이동하기
//   if (ladderSnake.has(current)) {
//     move(ladderSnake.get(current), movementCount);
//     visited[ladderSnake.get(current)] = 0;
//     return;
//   }

//   // 100에 도착했으면 끝내
//   if (current === 100) {
//     diceMovement = Math.min(diceMovement, movementCount);
//     return;
//   }

//   // 다시 주사위 굴려
//   move(current + 1, movementCount + 1);
//   visited[current + 1] = 0;

//   move(current + 2, movementCount + 1);
//   visited[current + 2] = 0;

//   move(current + 3, movementCount + 1);
//   visited[current + 3] = 0;

//   move(current + 4, movementCount + 1);
//   visited[current + 4] = 0;

//   move(current + 5, movementCount + 1);
//   visited[current + 5] = 0;

//   move(current + 6, movementCount + 1);
//   visited[current + 6] = 0;
// }
