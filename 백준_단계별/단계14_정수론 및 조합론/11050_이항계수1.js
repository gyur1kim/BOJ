let [N, K] = `5 2`.split(' ').map(Number);

let n = 1;
let d = 1;
for(let i=N; i>N-K; i--){
    n *= i;
}
for(let i=K; i>1; i--){
    d *= i;
}
console.log(n/d);