class Gear {
  constructor(gear) {
    this.gear = gear;
    this.top = 0;
  }

  turn(direction) {
    if (direction === 1) this.clockwise();
    else this.counterclockwise();
  }

  clockwise() {
    this.top = (this.top - 1 + 8) % 8;
  }

  counterclockwise() {
    this.top = (this.top + 1) % 8;
  }

  getLeft() {
    const left = (this.top + 6) % 8;
    return this.gear[left];
  }

  getRight() {
    const right = (this.top + 2) % 8;
    return this.gear[right];
  }

  getTop() {
    return Number(this.gear[this.top]);
  }
}

function turnGear(gearNumber, direction) {
  // 한 gearNumber에 대해서
  // 양 옆으로 어디까지 연결되는지 확인쓰
  const turnGearList = [[gears[gearNumber], direction]];
  let tmpDirection = direction;

  // 왼쪽을 보자
  for (let i = gearNumber - 1; i >= 0; i--) {
    const leftGear = gears[i];
    const gear = gears[i + 1];

    // 연결돼있음
    if (leftGear.getRight() !== gear.getLeft()) {
      tmpDirection *= -1;
      turnGearList.push([leftGear, tmpDirection]);
    } else break;
  }

  // 기어 오른쪽을 보자
  tmpDirection = direction;
  for (let i = gearNumber + 1; i < 4; i++) {
    const rightGear = gears[i];
    const gear = gears[i - 1];

    // 연결돼있음
    if (rightGear.getLeft() !== gear.getRight()) {
      tmpDirection *= -1;
      turnGearList.push([rightGear, tmpDirection]);
    } else break;
  }

  for (const turnGear of turnGearList) {
    const [gear, direction] = turnGear;
    gear.turn(direction);
  }
}

const input = `10101110
10010011
01001110
10000100
4
1 1
2 -1
2 1
2 -1`.split("\n");

const tries = input.slice(4);
const tryCount = Number(tries.shift());

const gears = [];
for (let i = 0; i < 4; i++) {
  gears.push(new Gear(input[i]));
}

for (let tc = 0; tc < tryCount; tc++) {
  const [gearNumber, direction] = tries[tc].split(" ").map(Number);
  turnGear(gearNumber - 1, direction);
}

const result = gears.reduce((sum, gear, idx) => (sum += gear.getTop() ? 2 ** idx : 0), 0);

console.log(result);
