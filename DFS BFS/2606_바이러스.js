let [computerNum, connectedNum, ...computers] = `7
6
1 2
2 3
1 5
5 2
5 6
4 7`.split('\n');

const computerArr = Array(10).fill([]);
for(let i=0; i<+connectedNum; i++) {
  let [v, w] = computers[i].split(' ').map(Number);
  computerArr[v].push(w);
  computerArr[w].push(v);
}

console.log(computerArr);