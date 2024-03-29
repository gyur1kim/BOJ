let [computerNum, connectedNum, ...computers] = `7
6
1 2
2 3
1 5
5 2
5 6
4 7`.split('\n');

/** 연결된 컴퓨터들을 나타내기 */
const computerArr = Array.from(Array(+computerNum+1), ()=>Array().fill([]));
// Array를 만드는 또 다른 방법
// let graph = [...new Array(n+1)].map(() => []);
for(let i=0; i<+connectedNum; i++) {
  let [v, w] = computers[i].split(' ').map(Number);
  computerArr[v].push(w);
  computerArr[w].push(v);
}

function BFS () {
  const visited = Array(+computerNum+1).fill(false);
  const queue = [1];     // 1번 컴퓨터보터 볼게요
  visited[1] = true;
  let head = 0;
  let count = 0;

  while (head < queue.length) {
    let computer = queue[head++];
    for (let neighbor of computerArr[computer]) {
      if (!visited[neighbor]) {
        visited[neighbor] = true;
        count++;
        queue.push(neighbor);
      }
    }
  }
  return count;
}

console.log(BFS());