var [n, ...coordinate] = `5
0 4
1 2
1 -1
2 2
3 3`.split('\n');
coordinate = coordinate.map(x=>x.split(' ').map(Number));
coordinate.sort((a, b)=> a[1] - b[1] || a[0] - b[0]);
console.log(coordinate.map(x=>x.join(' ')).join('\n'));
