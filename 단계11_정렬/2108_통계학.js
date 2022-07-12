/*
N개의 수를 대표하는 수를 정하는 방법은 4가지가 있다.
1. 평균(소수점 이하 첫째 자리에서 반올림할 것)
2. 중앙값
3. 최빈값(최빈값이 여러 개면, 두 번쨰로 작은 값 출력)
4. 범위(최댓값과 최솟값의 차이)
 */
var [n, ...input] = `5
1
3
8
-2
2`.split('\n');

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

var freq = input.reduce((pv, cv)=>{
    console.log(cv);
    pv[cv] = (pv[cv]||0)+1;
    return pv;
}, {});

console.log(freq);
var mostFreq = 0;
for(var key in freq){
    if(freq[key]>mostFreq){
        mostFreq = freq[key];
    }
}

var cnt = 0;
var mode = 0;
for(var key in freq){
    if(freq[key]===mostFreq){
        cnt++;
        if(cnt===2){
            mode = key;
            break;
        }
    }
}
console.log(mode);

//4. 범위
var max = input[n-1];
var min = input[0];
console.log(max-min);