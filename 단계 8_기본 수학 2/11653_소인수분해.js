var input = +`72`;
var answer = '';
var primeNum = [2];


//아주 평범한 소수 구하기.. 근데 for문이 2개라 시간초과 뜬 듯
/*
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

// //isPrime함수
// function isPrime(n){
//     if(n<2) return false;
//     for(var i=2; i<=Math.floor(Math.sqrt(n)); i++){
//         if(n%i===0){
//             return false;
//         }
//         return true;
//     }
// }
// //소수 리스트를 빨리 구해야된다
// var primeList = new Array(input-1).fill().map((v, i)=>i+2);
//
//
// primeList.filter(x => {
//     if(isPrime(x)) return true;
//     return false;
// })
// console.log(primeList);

// var k = 0;
// function factorization(n){
//     if(n<=1) return console.log(answer);
//     if(n%primeNum[k] === 0){
//         answer += primeNum[k] + '\n';
//         n = n/primeNum[k];
//         factorization(n);
//     }
//     else {
//         k++;
//         factorization(n);
//     }
// }
//
// factorization(input);