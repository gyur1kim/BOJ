const [N, ...inputs] = `4
1 2 3 4`
  .split(/\s+/)
  .map(Number);

console.log(N, inputs);

let l = 0;
let r = N - 1;
let pair = [l, r];
let answer = Infinity;

while (l < r) {
  let mix = inputs[l] + inputs[r];

  if (Math.abs(mix) < Math.abs(answer)) {
    answer = mix;
    pair = [l, r];
    continue;
  }

  mix < 0 ? l++ : r--;
}

console.log(`${inputs[pair[0]]} ${inputs[pair[1]]}`);
