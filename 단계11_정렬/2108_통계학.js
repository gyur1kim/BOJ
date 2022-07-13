/*
N개의 수를 대표하는 수를 정하는 방법은 4가지가 있다.
1. 평균(소수점 이하 첫째 자리에서 반올림할 것)
2. 중앙값
3. 최빈값(최빈값이 여러 개면, 두 번쨰로 작은 값 출력)
4. 범위(최댓값과 최솟값의 차이)
 */
var [n, ...input] = `3
0
0
-1`.split('\n');

//정렬 후 숫자로,,
input = input.sort((a, b)=> a-b).map(Number);
console.log(input);

//1. 평균 구하기 -0이 나오면 안됨
var sum = input.reduce((a, c)=> a+c, 0);
var avg = Math.round(sum/n)+1-1;
console.log(avg);

//2. 중앙값 구하기
var median = input[Math.floor(n/2)];
console.log(median);

//3. 최빈값
//pv라는 dict형에 값과 등장 빈도를 저장한다, dict를 리턴한다. 그 값을 freq에 넣어줌.
var freq = input.reduce((pv, cv)=>{
    pv[cv] = (pv[cv]||0)+1;
    return pv;
}, {});
//근데 출력해보면 빡치게 내가 열심히 정렬해놓은 것을 다 망쳐놓는다.
console.log(freq);

//키값만 따로 정렬해놓자...
var sortedKeys = Object.keys(freq).sort((a, b)=>{return a-b});

//제일 많이 나온 것의 횟수 구하기
var mostFreq = 0;   //우선 0번 등장한것을 가장 많이 나온 것으로 가정
for(var key in freq){
    if(freq[key]>mostFreq){ //key값의 value(빈도수)를 비교해 가장 많이 나온 것을 구한다.
        mostFreq = freq[key];
    }
}

var cnt = 0;        //몇 번째 숫자인지 세는 변수
var mode = 0;       //최빈값을 저장할 변수
for(var val of sortedKeys){      //input값을 freq의 키값으로 넣으면 어떨까? -> 안돼!ㅠㅠ input은 똑같은 값이 여러 개 들어있어서 안됨
    if(freq[val]===mostFreq){    //그래서 정렬한 키값을 넣었음
        cnt++;
        mode = val;
        if(cnt===2){        //2번째
            break;
        }
    }
}
console.log(mode);

//4. 범위
var max = input[n-1];
var min = input[0];
console.log(max-min);