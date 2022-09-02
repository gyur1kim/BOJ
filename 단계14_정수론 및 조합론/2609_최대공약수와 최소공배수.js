let [a, b] = `121 132`.trim().split(' ').map(Number);
/*
유클리드 알고리즘!!
큰 값에서 작은 값으로 나눈 나머지가 0이면? b가 최대공약수가 된다.
큰 값에서 작은 값으로 나눈 나머지가 n이면(n!=0)? b=n을 한 뒤 다시 나눈다... 무한 반복
 */

if (a < b){
    [a, b] = [b, a];
}
let B = b;

let GCD = 0   // 최대 공약수 gcd
while(true){
    let n = a%b;
    if(n === 0){
        GCD = b;
        break;
    }
    else{
        b = n;
    }
}
// console.log(GCD);
let LCM = a * (B/GCD);  // 최소공배수 LCM
console.log(GCD);
console.log(LCM);