var input = +`1`;

//나의 생각
for(var i=0; i<input; i++){
    var i2arr = (i+'').split('');
    var output = i2arr.reduce((a, c)=>a+ +c, +i);

    output = output === input? i : 0;
    if(output !== 0){
        break;
    }
}
console.log(output);

//숏코딩 출처
var answer = 0;
for(var i=1; i<=input; i++){
    var n = sum = i;
    while(n){       //3. n이 0이 되는 순간 false이므로 while문 탈출
        sum += n%10;        //1. 1의자리 구하기
        n = Math.floor(n/10);   //2. 1의자리 더했으니까 버리기
    }
    if(sum === input){
        answer = i;
        break;
    }
}
console.log(answer);