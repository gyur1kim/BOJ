var [n, ...input] = `10
5
2
3
1
4
2
3
5
1
7`.split('\n');
input=input.map(Number);
console.log(input);

//카운팅 정렬
/*
주어진 배열의 값 범위가 작은 경우 빠른 속도를 갖는 정렬 알고리즘
주어진 정렬을 count하여 정렬하는 정렬 방법
최댓값과 입력 배열의 원소 값 개수를 누적합으로 구성한 배열로 정렬을 수행
1. 입력 배열의 최댓값 = Counting Array 생성하기
    -> 원소의 누적합을 구하기 위해선, 입력 배열의 최댓값을 구하고 그 크기의 +1을 하여 Counting Array 생성할 것
        입력 배열의 값을 기준으로 조회된 좌표에 입력 배열의 각 원소 개수를 count
 */

function countingSort(arr){
    var max = Math.max(...input);
    var countArr = new Array(max+1).fill(0);
    for(var i=0; i<input.length; i++){
        countArr[input[i]]++;
    }
    console.log(countArr)
    var accCount = [];
    var acc = 0;
    for(var j=0; j<max+1; j++){
        acc += countArr[j];
        accCount[j] = acc;
    }
    console.log(accCount);

}
countingSort(input);