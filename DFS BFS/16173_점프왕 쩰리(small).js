let [n, ...zone] = `3
1 1 10
1 5 1
2 2 -1`.split('\n');

zone = zone.map(x=>x.split(' ').map(Number));
console.log(zone);

solution(0, 0)

const jellyPosition = []
function solution (x, y) {
  // 현재 젤리 위치
  jellyPosition.push([x, y])

  // 젤리가 움직일 수 있는 크기
  let goSize = zone[x][y];

  // 아래로 가는 경우
  let jellyGoDown = [x + goSize, y];
  // 오른쪽으로 가는 경우
  let jellyGoRight = [x, y + goSize];

  if (jellyGoDown === [n-1, n-1] || jellyGoRight === [n-1, n-1]) {
    res = "HaruHaru"
    return res;
  }

  if (jellyGoDown[0] < n && jellyGoDown[1] < n) {
    res = solution([...jellyGoDown]);
  }

}