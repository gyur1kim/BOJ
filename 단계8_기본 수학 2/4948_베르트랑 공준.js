var [...inputArr] = `1
10
13
0`.split('\n').map(Number);

console.log(inputArr);

var i=0;
var answer = '';
while(inputArr[i]!==0){
    var m = inputArr[i];
    var n = m*2;
    var cnt = 0;
    var isPrimeNumArr = new Array(n+1).fill(true);
    isPrimeNumArr[0] = false;
    isPrimeNumArr[1] = false;
    for(var j=2; j<=Math.ceil(Math.sqrt(n)); j++){
        if(isPrimeNumArr[j]){
            var k= 2;
            while(k*j<=n){
                isPrimeNumArr[j*k] = false;
                k++;
            }
        }
    }
    cnt = isPrimeNumArr.splice(m+1).filter(x => x===true).length;
    answer += cnt + '\n';
    i++;
}
console.log(answer);