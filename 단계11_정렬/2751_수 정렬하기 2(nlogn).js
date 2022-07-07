//병합 정렬, 퀵 정렬, 힙 정렬

var [n, ...input] = `9
2
4
1
8
7
5
3
6
9`.split('\n');
input=input.map(Number);
console.log(input);
//병합 정렬
/*
1. 리스트의 길이가 0 또는 1이면 이미 정렬된 것으로 본다. 그렇지 않은 경우에는
2. 정렬되지 않은 리스트를 절반으로 잘라 비슷한 크기의 두 부분 리스트로 나눈다.
3. 각 부분 리스트를 재귀적으로 합병 정렬을 이용해 정렬한다.
4. 두 부분 리스트를 다시 하나의 정렬된 리스트로 합병한다.
 */
//1. 나누는 함수
function mergeSort(list){
    if(list.length === 1){      //배열의 길이가 1이 되면 끝내기
        return list;
    }
    var half = Math.floor(list.length/2);     //중간값
    var left = list.slice(0, half);  //왼쪽 배열
    var right = list.slice(half);   //오른쪽 배열
    console.log(left);
    console.log(right);
    merge(mergeSort(left), mergeSort(right));       //배열의 길이가 1이 되면 merge시작.
}

//2. 합치는 함수
function merge(left, right){
    var answer = [];
    console.log(left.length);
    while(left.length && right.length){
        console.log(left);
        console.log(right);
        if(left[0]>=right[0]){
            answer.push(right.shift());
        }
        else{
            answer.push(left.shift());
        }
    }
    console.log(answer);
    return [...answer, ...left, ...right];
}
var result = mergeSort(input);
console.log(input);
console.log(result);