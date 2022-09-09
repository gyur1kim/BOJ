/*
서로소는 최대공약수가 1인거 맞쥬?
숫자 하나씩 돌면서 최대공약수가 1이 되는지 찾아보자~
 */
let [N, input, X] = `5
4 2 8 5 7
4`.split('\n');

function GCD(a, b){
    while(b>0){
        let r = a%b;
        a = b;
        b = r;
    }
    if(a===1) return 1;
    else return 0;
}

input = input.split(' ').map(Number);
const lst = [];
for(let i=0; i<+N; i++){
    if(GCD(input[i], +X)){
        lst.push(input[i]);
    }
}
console.log((lst.reduce((acc, cur)=> acc + cur, 0))/lst.length);