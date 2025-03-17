const inputs = `4
4
4 2 9
2 1 58
1 3 25
2 1 22
4 3`.split("\n");

const N = +inputs[0];
const M = +inputs[1];
const graph = Array(N + 1)
  .fill()
  .map(() => Array(N + 1).fill(Infinity));
for (let i = 2; i < 2 + M; i++) {
  const [from, to, price] = inputs[i].split(" ").map(Number);
  graph[from][to] = Math.min(price, graph[from]);
  graph[from][from] = 0;
}

for (let m = 1; m <= N; m++) {
  for (let v = 1; v <= N; v++) {
    for (let w = 1; w <= N; w++) {
      graph[v][w] = Math.min(graph[v][m] + graph[m][w], graph[v][w]);
    }
  }
}

const [from, to] = inputs[M + 2].split(" ").map(Number);
console.log(graph[from][to]);
