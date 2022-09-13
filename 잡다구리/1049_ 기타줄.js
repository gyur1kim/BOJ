let [N, ...input] = `12 2
20 4
15 2`.split('\n');

let setCheap = 10000;
let pieceCheap = 10000;
for(let i=0; i<+N.split(' ')[1]; i++){
    let [set, piece] = input[i].split(' ').map(Number);
    if(set < setCheap) setCheap = set;
    if(piece < pieceCheap) pieceCheap = piece;
}

N = +N.split(' ')[0];
if(pieceCheap*6<=setCheap) console.log(pieceCheap * N);
else if(N%6 * pieceCheap < setCheap) console.log(Math.floor(N/6)*setCheap + ((N%6)*pieceCheap));
else console.log(Math.ceil(N/6)*setCheap);