let [n, ...input] = `1
10`.split('\n')

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

// input 받을 때 trim 안해서 틀린 것이었다.