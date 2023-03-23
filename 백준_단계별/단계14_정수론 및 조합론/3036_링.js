let input = `4
300 1 1 300`.split(/\s+/).map(Number);

let n = input[0];
let base = input[1];
let rest = input.splice(2);

let ans = ''
for(let i=0; i<n-1; i++){
    let a = base;
    let b = rest[i];
    if (a<b){
        [a, b] = [b, a];
    }
    const gcd = (a, b) => a%b===0? b : gcd(b, a%b);
    let res = gcd(a, b);
    ans += (base/res) + '/' + (rest[i]/res) + '\n';
}
console.log(ans);