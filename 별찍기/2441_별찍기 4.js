let n = +`5`;
let ans = '';

for(let i=0; i<n; i++){
    ans += ' '.repeat(i) + '*'.repeat(n-i) + '\n';
}

console.log(ans);