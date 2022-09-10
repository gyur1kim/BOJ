function foo(tmp){

    if(tmp.length === M){
        ans += `${tmp.join(' ')}\n`;
        return
    }

    for(let j=1; j<=N; j++){
        if(!tmp.includes(j)){
            tmp.push(j);
            foo(tmp);
            tmp.pop();
        }
    }

}


let [N, M] = `4 4`.split(' ').map(Number);
let ans = '';
const tmp = [];
foo(tmp);
console.log(ans);