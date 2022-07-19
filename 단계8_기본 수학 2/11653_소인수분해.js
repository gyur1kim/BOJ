var input = +`1320`;
var answer = '';

//아주 평범한 소수 구하기.. 근데 for문이 2개라 시간초과 뜬 듯
/*
var primeNum = [2];
for(var i=2; i<=input; i++){
    for(var j=2; j<=Math.ceil(Math.sqrt(i)); j++){
        if(i%j===0){
            break;
        }
        if(j === Math.ceil(Math.sqrt(i))){
            primeNum.push(i);
        }
    }
}
*/

//isPrime함수
/*
function isPrime(n){
    if(n<2) return false;
    for(var i=2; i<=Math.floor(Math.sqrt(n)); i++){
        if(n%i===0){
            return false;
        }
        return true;
    }
}
*/
//소수 리스트를 빨리 구해야된다
/*
var primeList = new Array(input-1).fill().map((v, i)=>i+2);
primeList.filter(x => {
    if(isPrime(x)) return true;
    return false;
})
console.log(primeList);
*/

//소인수분해하기
/*
var k = 0;
function factorization(n){
    if(n<=1) return console.log(answer);
    if(n%primeNum[k] === 0){
        answer += primeNum[k] + '\n';
        n = n/primeNum[k];
        factorization(n);
    }
    else {
        k++;
        factorization(n);
    }
}
factorization(input);
*/

//이번엔 완벽하다 생각했는데............. 메모리초과 OMGㅜ
//아무래도 리스트를 들어오는 크기만큼 만들어서, input이 10000000이면 메모리 제한을 넘어가나 보다.
/*
var primeList = new Array(input-1).fill().map((v, i)=>i+2);

while(input > 1){
    if(input%primeList[0]===0){
        answer += primeList[0] + '\n';
        input = input/primeList[0];
    }
    else{
        var d = primeList[0];
        primeList = primeList.filter((v)=> v%d !== 0);
    }
}
console.log(answer);
*/

//그냥 2부터 열심히 나누는게 답인가보다..

var k = 2;
while(input > 1){
    if(input%k === 0){
        answer += k + '\n';
        input /= k;
    }
    else{
        k++;
    }
}
console.log(answer);