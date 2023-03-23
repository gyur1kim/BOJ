let [tc, ...input] = `4
1 45000
6 10
13 17
322 322`.split('\n');
for(v of input){
    let [A, B] = v.split(' ').map(Number);
    if(A < B){
        [B, A] = [A, B];
    }
    const gcd = (A, B) => A % B === 0 ? B : gcd(B, A % B);
    const lcm = (A, B) => A * B / gcd(A, B);
    console.log(lcm(A, B));
}
