let [n, ...zone] = `3
1 1 10
1 5 1
2 2 -1`.split('\n');
zone = zone.map(x=>x.split(' ').map(Number));
let res = "Hing";

function solution (x, y) {
  // 젤리가 움직일 수 있는 크기
  let go = zone[x][y];

  // 한 번 왔던 곳은 다시 탐색하지 않도록 -100로 바꿔 다녀갔음을 표시함
  zone[x][y] = -100

  // 너무 숫자가 크면 굳이 안 봐도 되니까 땡
  if (go >= n) return;

  if (res === "Hing") {
    // 오른쪽으로 가는 거 검사
    if (y+go < n) {
      if (zone[x][y+go] === -1) {
        res = "HaruHaru";
        return;
      }
      else if (zone[x][y+go] !== -100) {
        solution(x, y + go)
      }
    }
    // 아래로 가는 거 검사하기
    if (x+go < n) {
      if (zone[x+go][y] === -1) {
        res = "HaruHaru";
      }
      else if (zone[x+go][y] !== -100) {
        solution(x + go, y)
      }
    }
  }
}
solution(0, 0);
console.log(res);
