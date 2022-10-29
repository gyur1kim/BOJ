let n = +`5`;
let ans = '';
for(let i=n-1; i >=0; i--){
    ans += `${'*'.repeat(n-i) + ' '.repeat(2*i) + '*'.repeat(n-i)}\n`;
}
for(let i=1; i<n; i++){
    ans += `${'*'.repeat(n-i) + ' '.repeat(2*i) + '*'.repeat(n-i)}\n`;
}
console.log(ans);