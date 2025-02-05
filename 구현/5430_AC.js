function solution(func, n, arr) {
  let start = 0;
  let end = n - 1;
  let isReverse = false;

  for (let e of func) {
    if (e === "R") {
      [start, end] = [end, start];
      isReverse = !isReverse;
    } else {
      if (isReverse) {
        if (end > start) return "error";
        start--;
      } else {
        if (start > end) return "error";
        start++;
      }
    }
  }

  let res = "[";
  if (isReverse) {
    for (let i = start; i >= end; i--) {
      res += `${arr[i]},`;
    }
  } else {
    for (let i = start; i <= end; i++) {
      res += `${arr[i]},`;
    }
  }

  if (res.length > 1) res = res.slice(0, -1);
  res += "]";
  return res;
}

const [TC, ...input] = `5
RDD
4
[1,2,3,4]
DD
1
[42]
RRD
6
[1,1,2,3,5,8]
D
0
[]
DR
1
[73]`.split("\n");

let answer = "";
for (let tc = 0; tc < +TC; tc++) {
  const [func, n, str] = input.slice(tc * 3, (tc + 1) * 3);
  const arr = n === "0" ? [] : str.slice(1, -1).split(",").map(Number);
  answer += `${solution(func, n, arr)}\n`;
}
console.log(answer);
