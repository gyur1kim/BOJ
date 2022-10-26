let n = +`5`;
let ans = '';

for(let i=1; i<=n; i++){
    ans += ' '.repeat(i-1) + '*'.repeat(2*n - 2*i + 1) + '\n';
}

console.log(ans);