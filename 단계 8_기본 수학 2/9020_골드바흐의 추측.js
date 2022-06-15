var [c, ...num] = `5
4
6
8
10
12`.split('\n').map(Number);
var answer = '';

function eratos(n){
    var isPrime= new Array(n+1).fill(true);
    isPrime[0] = false;
    isPrime[1] = false;
    for(var i=2; i<=Math.sqrt(n)+1; i++){
        if(isPrime[i]){
            var j=2;
            while(i*j<=n){
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
    return primeArr;
}

for(var i=0; i<c; i++){
    var input = num[i];
    var arr = eratos(input);
    var n = Math.ceil(arr.length/2);

    while(n<arr.length){
        if(arr[n]>=input/2) break;
        else n++
    }
    if(arr[n] + arr[n] === input){
        answer += `${arr[n]} ${arr[n]}\n`
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