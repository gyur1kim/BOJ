let [tc, ...input] = `3
((
))
())(()`.split('\n');

let res = ''
for(let i=0; i<+tc; i++){
    let vps = input[i];
    let cnt = 0;
    let checkAll = true;

    for(v of vps){
        if(v==='(') cnt++;
        else cnt--;
        if(cnt<0){
            checkAll=false;
            res += 'NO\n';
            break;
        }
    }
    if(checkAll){
        res += cnt===0? 'YES\n': 'NO\n';
    }
}
console.log(res);