const input = `11
1 4
3 5
0 6
5 7
3 8
5 9
6 10
8 11
8 12
2 13
12 14`.split("\n");
const n = +input.shift();
const schedule = input
  .map(i => i.split(" ").map(Number))
  .sort((a, b) => (a[1] === b[1] ? a[0] - b[0] : a[1] - b[1]));

console.log(schedule);

let endTime = 0;
let answer = 0;
for (const [start, end] of schedule) {
  if (start >= endTime) {
    answer++;
    endTime = end;
  }
}

console.log(answer);
