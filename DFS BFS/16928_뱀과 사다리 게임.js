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

let [NM, ...infos] = `3 7
32 62
42 68
12 98
95 13
97 25
93 37
79 27
75 19
49 47
67 17`.split("\n");

let [N, M] = NM.split(" ");
let ladderSnake = new Map();

for (const info of infos) {
  let [from, to] = info.split(" ").map(Number);
  ladderSnake.set(from, to);
}

// 최단거리니까 BFS로 접근하자.
let visited = new Array(101).fill(0);
const queue = new Queue();
// 번호와 주사위 굴린 횟수
queue.enqueue([1, 0]);

while (true) {
  let [current, count] = queue.dequeue();

  // console.log("현재", current, "주사위횟수", count);

  // 방문했던 곳이면 걍 넘겨
  if (visited[current]) continue;

  // 현재 숫자 방문 처리하기
  visited[current] = 1;

  // 사다리 or 뱀 있는지 확인
  if (ladderSnake.has(current)) {
    current = ladderSnake.get(current);
    visited[current] = 1;
  }

  if (current === 100) {
    // BFS인데 100이면 끝이지~
    console.log(count);
    break;
  }

  queue.enqueue([current + 1, count + 1]);
  queue.enqueue([current + 2, count + 1]);
  queue.enqueue([current + 3, count + 1]);
  queue.enqueue([current + 4, count + 1]);
  queue.enqueue([current + 5, count + 1]);
  queue.enqueue([current + 6, count + 1]);
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
