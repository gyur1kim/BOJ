let [row, col, ...pasture] = `5 6
.#....
..#...
..#..#
...##.
.#....`.split(/\s+/);

const visited = Array.from(Array(+row), () => Array(+col).fill(false));
let directions = [[0, -1], [0, 1], [-1, 0], [1, 0]];

// function BFS (i, j) {
//   const queue = [[i, j]];
//   while (queue.length) {
//     let [x, y] = queue.shift();
//     for (let [dx, dy] of directions) {
//       let nx = dx + x;
//       let ny = dy + y;
//       if (nx >= 0 && nx < +row && ny >= 0 && ny < +col && pasture[nx][ny] === '#' && !visited[nx][ny]) {
//         visited[nx][ny] = true;
//         queue.push([nx, ny]);
//       }
//     }
//   }
// }
//
// let count = 0;
// for(let i=0; i<+row; i++){
//   for (let j=0; j<+col; j++){
//     if(pasture[i][j] === '#' && !visited[i][j]) {
//       count++;
//       visited[i][j] = true;
//       BFS(i, j)
//     }
//   }
// }
//
//
// console.log(count);


/*
 * unshift가 느린가 싶어서 head와 tail을 이용해봤지만...
 * 메모리만 좀 줄었고 속도는 비슷했다. 그래서 다른 분의 코드를 봤다.
 */
// function BFS (i, j) {
//   const queue = [[i, j]];
//
//   // queue의 head는 현재 idx를 나타내고.. tail은 queue의 length라고 하자..
//   // 따라서 head === length가 되면 queue가 빈 것임.
//   let head = 0;
//   // i는 행, j는 렬
//   while (head < queue.length) {
//     // head가 가리키는 원소를 꺼내고 ++ 하면 pop과 같은 과정이다...
//     // x는 행, y는 렬
//     let [x, y] = queue[head++];
//     for (let [dx, dy] of directions) {
//       let nx = dx + x;
//       let ny = dy + y;
//       // nx는 행, ny는 렬
//       if (nx >= 0 && nx < +row && ny >= 0 && ny < +col && pasture[nx][ny] === '#' && !visited[nx][ny]) {
//         visited[nx][ny] = true;
//         queue.push([nx, ny]);
//       }
//     }
//   }
// }
//
// let count = 0;
// for(let i=0; i<+row; i++){
//   for (let j=0; j<+col; j++){
//     if(pasture[i][j] === '#' && !visited[i][j]) {
//       count++;
//       visited[i][j] = true;
//       BFS(i, j)
//     }
//   }
// }

// 점을 찍는 이유는 탐색할 때 오류나지 않도록 더미 데이터를 씌우는 것임..
const board = pasture.map(v => [...v.split(''), '.']);
board.push(new Array(+col + 1).fill('.'));

console.log(board);

let count = 0;
for (let i = 0; i < +row; i++) {
  for (let j = 0; j < +col; j++) {
    /*
     * 아 이렇게 2번만 탐색하면 되는 이유가!!!
     * grass clump는 # 한 개 이거나 두 개임..
     * 문제를 잘 읽자.
     */
    if (board[i][j] === '#') {
      count++;
      if (board[i + 1][j] === '#') {
        board[i + 1][j] = '.'
      }
      if (board[i][j + 1] === '#') {
        board[i][j + 1] = '.'
      }

    }
  }
}

console.log(count);
