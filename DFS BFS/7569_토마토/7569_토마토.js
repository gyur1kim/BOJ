let [MNH, ...tomatoes] = `5 3 2
0 0 0 0 0
0 0 0 0 0
0 0 0 0 0
0 0 0 0 0
0 0 1 0 0
0 0 0 0 0`.split('\n');
let [M, N, H] = MNH.split(' ').map(Number);
tomatoes = tomatoes.map((tomatoRow) => tomatoRow.split(' ').map(Number))
console.log(tomatoes);
const result = [];
for (let i = 0; i < H; i ++) {
  result.push(tomatoes.slice(i*N, (i+1)*N));
}
console.log(result);