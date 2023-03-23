let [...input] = `1 19
4 4
23 14
0 0`.split('\n');

let idx = 0;
let ans = '';
while(input[idx] !== '0 0'){
    let [a, b] = input[idx].split(' ').map(Number);
    ans += a > b? 'Yes\n' : 'No\n';
    idx++
}
console.log(ans);