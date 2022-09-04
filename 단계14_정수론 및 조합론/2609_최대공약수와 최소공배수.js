let [a, b] = `24 5`.trim().split(' ').map(Number);
/*
유클리드 알고리즘!!
큰 값에서 작은 값으로 나눈 나머지가 0이면? 작은 값이 최대공약수가 된다.
큰 값에서 작은 값으로 나눈 나머지가 0이 아니면? 작은 값을 나머지로 나눈다... 무한 반복
 */
if (a < b){
    [a, b] = [b, a];
}
let A = a;
let B = b;
let GCD = 1;
while(B!==0){
    let r = A%B;
    if(r===0){
        GCD = B;
        break;
    }
    A = B;
    B = r;
}
console.log(GCD);
let LCM = a * (b/GCD);  // 최소공배수 LCM
console.log(LCM);