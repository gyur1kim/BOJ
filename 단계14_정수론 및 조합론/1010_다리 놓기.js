let [tc, ...input] = `3
2 2
1 5
13 29`.split('\n');

let ans = '';
for(let i=0; i<+tc; i++){
    let [west, east] = input[i].split(' ').map(Number);

    let bridges = 1;
    for(let j=east; j>east-west; j--){
        bridges = (bridges*j)/(east-j+1);
    }
    ans += bridges + '\n';
}
console.log(ans);