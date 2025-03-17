let [V, ...inputs] = `5
1 3 2 -1
2 4 4 -1
3 1 2 4 3 -1
4 2 4 3 3 5 6 -1
5 4 6 -1`.split("\n");
V = Number(V);
// tree[i] = [인접노드, 거리]
const tree = Array(V + 1)
  .fill()
  .map(() => []);

for (const input of inputs) {
  const [v, ...nodes] = input.split(" ").map(Number);
  const LENGTH = nodes.length - 1;
  for (let i = 0; i < LENGTH; i += 2) {
    const w = nodes[i];
    const dist = nodes[i + 1];
    tree[v].push([w, dist]);
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
  const stack = [[v, dist]];

  while (stack.length) {
    const [v, dist] = stack.pop();

    if (max[1] < dist) max = [v, dist];

    const neighbor = tree[v];
    for (const [w, nextDist] of neighbor) {
      if (visited[w]) continue;

      visited[w] = true;
      stack.push([w, dist + nextDist]);
    }
  }
}
