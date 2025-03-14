let [V, ...inputs] = `5
1 3 2 -1
2 4 4 -1
3 1 2 4 3 -1
4 2 4 3 3 5 6 -1
5 4 6 -1`.split("\n");
V = Number(V);
const tree = Array(V + 1)
  .fill()
  .map(() => Array(V + 1).fill(0));

for (const input of inputs) {
  const [v, ...nodes] = input.split(" ").map(Number);
  const LENGTH = nodes.length - 1;
  for (let i = 0; i < LENGTH; i += 2) {
    const w = nodes[i];
    const dist = nodes[i + 1];

    tree[v][w] = dist;
    tree[w][v] = dist;
  }
}

const visited = Array(V + 1).fill(false);
// max node의 번호와 dist
let max = [0, 0];
visited[1] = true;
dfs(1, 0);

visited.fill(false);
max[1] = 0;
visited[max[0]] = true;
dfs(max[0], 0);

console.log(max[1]);

function dfs(v, dist) {
  if (max[1] < dist) max = [v, dist];

  const neighbor = tree[v];
  neighbor.forEach((len, w) => {
    if (len === 0) return;
    if (visited[w]) return;

    visited[w] = true;
    dfs(w, dist + tree[v][w]);
  });
}
