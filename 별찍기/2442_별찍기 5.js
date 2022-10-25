let n = +`5`;
let ans = '';
for (let i=1; i<=n; i++) {
    ans += `${' '.repeat(n-i) + '*'.repeat(2*i-1)}\n`;
}
console.log(ans);