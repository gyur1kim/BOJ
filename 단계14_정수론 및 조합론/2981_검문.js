/*
이 문제는 이 개념을 알면 된다:
x1, x2, x3이 모두 M의 배수라면,
x1+a, x2+a, x3+a는 M으로 나눌 때 공통된 나머지 a를 가질 것이다.
숫자들의 차이를 구해보면, (x2+a)-(x1+a) = x2-x1이 되고, M의 배수끼리는 빼봤자 M의 배수가 나온다.
따라서, 주어진 값들의 차이를 모두 구하고, 그것들은 모두 M의 배수이므로 공약수를 구하면 된다.

공약수는 최대공약수의 약수와 같다.
따라서 이 문제에서는, 최대공약수의 약수를 구하면 된다.

내가 할 일은
1. 두 수의 차이를 구하기
2. 최대공약수 찾기
3. 최대공약수의 약수 찾기.
 */

let [n, ...nums] = `3
6
34
38`.split('\n').map(Number);

function GCD(a, b){
    if(a>b){
        while(b>0){
            let r = a%b;
            a = b;
            b = r;
        }
        return a;
    }
    else{
        while(a>0){
            let r = b%a;
            b = a;
            a = r;
        }
        return b;
    }
}

nums = nums.sort((a, b)=>a-b);
// console.log(nums);

let gcd = nums[1]-nums[0];
for(let i=1; i<n-1; i++){
    let num = nums[i+1] - nums[i];
    gcd = GCD(gcd, num);
}
// console.log(gcd);

const divisors = [];  // 약수
n = 1;
while(n<=Math.sqrt(gcd)){
    if(gcd%n === 0){
        if(n!==1 && gcd/n!==n) divisors.push(n);
        divisors.push(gcd/n);
    }
    n++;
}
// console.log(divisors);
console.log(divisors.sort((a, b)=>a-b).join(' '));