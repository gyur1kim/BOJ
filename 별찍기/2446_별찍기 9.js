let n = +`5`;
let ans = '';

for(let i=0; i<n; i++){
    ans += `${' '.repeat(i) + '*'.repeat(2*(n-i)-1)}\n`
}
for(let i=1; i<n; i++){
    ans += `${' '.repeat(n-i-1) + '*'.repeat(2*(i)+1)}\n`
}

console.log(ans);