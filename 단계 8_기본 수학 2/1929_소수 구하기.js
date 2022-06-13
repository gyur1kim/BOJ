var [m, n] = `9 100`.split(' ').map(Number);

//에라토스의 체를 이용하면 왜! 시간초과가 될까?
//isPrime 함수를 없애보자
/*
var arr = new Array(n-m+1).fill().map((v, i)=> i+m);

function isPrime(n){
    if(n < 2) return false;
    else if(n === 2) return true;
    else{
        for(var i=2; i<Math.sqrt(n)+1; i++){
            if(n%i!==0){
                return true;
            }
        }
    }
    return false;
}
*/

//이 함수를 살짝 수정해보장
/*
function eratos(arr){
    for(var j=2; j<Math.sqrt(n)+1; j++){
        if(isPrime(j)){
            console.log(j);
            arr.forEach((v, i)=>{
                if(v%j === 0 && j!==v){
                    arr.splice(i, 1);
                }
            })
            console.log(arr);
        }
    }
}

eratos(arr);
console.log(arr.join('\n'));
*/

//새로 만든 에라토스의 체 좋았지만..그래도 시간초과야~!!ㅜ
/*
var newArr = new Array(n-1).fill().map((v, i)=> i+2);
function newEratos(arr){
    var i = 0;
    while(i<=arr.length){
        var d = arr[i];
        arr.forEach((v, i)=>{
            if(v%d === 0 && v!==d){
                arr.splice(i, 1);
            }
        });
        i++;
    }
    return arr;
}

var result = newEratos(newArr);
console.log(result);
for(i in result){
    if(result[i] >= m){
        result = result.splice(i);
        break;
    }
}
console.log(result);
 */

//그냥 일일히 나눠야하나보다.
//일단 짝수로는 나누지 말아보자.  ==>시간초과 뜸 ㅜㅜ
/*
var arr = [];
if(m<=2) arr.push(2);
if(m%2 === 0){
    for(var i=m+1; i<=n; i+=2){
        arr.push(i);
    }
}
else{
    for(var i=m; i<=n; i+=2){
        if(i === 1) continue;
        arr.push(i);
    }
}
for(var j=3; j<Math.sqrt(n)+1; j+=2){
    arr.forEach((v, i)=>{
        if(v%j===0 && v!==j){
            arr.splice(i, 1);
        }
    });
}
console.log(arr.join('\n'));
 */

//결국 인터넷 쳐봤는데 에라토스의 체 맞는데??ㅜㅜ
//같은 배열도 직접 값을 넣는 거랑 boolean값을 넣는 거랑 다른가보다...
const isPrimeNumber = Array(n+ 1).fill(true);
isPrimeNumber[0] = false;
isPrimeNumber[1] = false;

for (let i = 2; i <= Math.ceil(Math.sqrt(n)); i++) {
    if (isPrimeNumber[i]) {
        let j = 2;
        while (i * j <= n) {
            isPrimeNumber[i * j] = false;
            j++;
        }
    }
}

const results = [];
for (let k = m; k <= n; k++) {
    if (isPrimeNumber[k]) {
        results.push(k);
    }
}
console.log(results.join('\n'));