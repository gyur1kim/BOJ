function div(n, d){
    let cnt = 0;
    let D = d;
    while (n/D>=1){
        cnt += Math.floor(n/D);
        D *= d;
    }
    return cnt;
}

let [N, K] = `25 12`.split(' ').map(Number);
// console.log(div(N, 2));
// console.log(div(K, 2));
// console.log(div(N-K, 2));
let res2 = div(N, 2)-div(K, 2)-div(N-K, 2);
let res5 = div(N, 5)-div(K, 5)-div(N-K, 5);

console.log(Math.min(res2, res5));
