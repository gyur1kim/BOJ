let [n, ...input] = `10
1
13
12
15
3
16
13
12
14
15`.split('\n')

// function Round(n) {
//   console.log(n)
//   if (n === "0") {
//     return 0
//   }
//   let [int, dec] = n.split(".");
//   if (dec && parseInt(dec[0]) > 5 ) return parseInt(int) + 1;
//   else return parseInt(int);
// }
//
// let cut = Round((n*0.15).toString());
// console.log(cut);
// n = +n;
// input = input.map(Number).sort((a, b) => a-b);
// input.splice(0, cut);
// input.splice(-cut, cut);
// console.log(input);
// console.log(n ? Round((input.reduce((acc, cur) => acc + cur, 0)/input.length).toString()) : 0);

n = +n;
if (n === 0) {
  console.log(0);
}
else {
  let cut = Math.round(n * 0.15);
  input = input.map(Number).sort((a, b) => a-b);
  input.splice(0, cut);
  input.splice(-cut, cut);     // 앞뒤로 자르기.
  let sum = input.reduce((acc, cur) => acc + cur, 0);
  let count = input.length;
  console.log(Math.round(sum / count));
}