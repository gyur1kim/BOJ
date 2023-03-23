let num = +`3`;
let dict = {'two':0, 'five':0};

for(let i=2; i<=num; i++){
    let d = i;
    while(d%2===0){
        d /= 2;
        dict.two += 1;
    }
    while(d%5===0){
        d /= 5;
        dict.five += 1;
    }
}
console.log(Math.min(...Object.values(dict)));
// 정답이지만... 어차피 5의 개수가 더 적다.

// 따라서 그냥 5의 개수만 구하면 된다!!
let num = +`25`;
let cnt5 = 0

for(let i=2; i<=num; i++){
    let d = i;
    while(d%5===0){
        d /= 5;
        cnt5++;
    }
}
console.log(cnt5);

// 숏코딩에서 가져온 아이디어인데 정말 좋다
// 설명하긴 어려운데,,, 소인수분해했을 때 5를 가지면 5의 배수가 되니까...
let a = +require('fs').readFileSync(0,'utf-8')
let n = 0;
while (a>1) {
    n+=Math.floor(a/5);
    a/=5;
}
console.log(n);