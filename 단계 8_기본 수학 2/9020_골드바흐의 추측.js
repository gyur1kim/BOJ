var [c, ...num] = `5
4
6
8
10
12`.split('\n').map(Number);
var answer = '';
var k = Math.max(...num);

var isPrime = new Array(k+1).fill(true);
/*
isPrime[0] = false;
isPrime[1] = false;
 */
isPrime[0] = isPrime[1] = false;
for(var i=2; i<=Math.sqrt(k)+1; i++){
    if(isPrime[i]){
        var j=2;
        while(i*j<=k){
            isPrime[i*j] = false;
            j++;
        }
    }
}
var primeArr = [];
for(var idx in isPrime){
    if(isPrime[idx]){
        primeArr.push(+idx);
    }
}
console.log(primeArr);

for(var i=0; i<c; i++){
    var input = num[i];
    var arr = primeArr.filter(x => x<input);
    var n = Math.ceil(arr.length/2);

    while(n<arr.length){
        if(arr[n]>=input/2) break;
        else n++
    }
    if(arr[n] + arr[n] === input || arr[n-1] + arr[n-1] === input){
        arr[n]+arr[n]===input? answer+=`${arr[n]} ${arr[n]}\n` : answer+=`${arr[n-1]} ${arr[n-1]}\n`
    }
    else{
        while(n<arr.length){
            if(arr.includes(input - arr[n])){
                answer += `${input - arr[n]} ${arr[n]}\n`
                break;
            }
            else{
                n++;
            }
        }
    }
}
console.log(answer);