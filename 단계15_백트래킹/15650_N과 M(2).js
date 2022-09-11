function foo(num){
    if(tmp.length === M){
        ans += `${tmp.join(' ')}\n`;
        return
    }

    for(let i=num; i<=N; i++){
        tmp.push(i);
        foo(i+1);
        tmp.pop();
    }
}

let [N, M] = `4 2`.split(' ').map(Number);
let ans = '';
const tmp = [];
foo(1);
console.log(ans);