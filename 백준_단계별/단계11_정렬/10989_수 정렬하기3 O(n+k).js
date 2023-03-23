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
/*
function countingSort(arr){
    //최댓값 찾기
    var max = Math.max(...arr);

    //1. 최댓값보다 하나 큰 배열 만들기
    var countArr = new Array(max+1).fill(0);

    //만약 숫자가 3이면 idx=3에다가 값 넣기
    for(var i=0; i<arr.length; i++){
        countArr[arr[i]]++;
    }
    console.log(countArr);

    //2. 배열의 값을 누적합 할 배열 생성
    var accCount = [];
    var acc = 0;
    for(var j=0; j<max+1; j++){
        acc += countArr[j];     //값 누적하기, 1씩 뺀다(배열은 0부터 시작하니깐..)
        accCount[j] = acc-1;
    }
    console.log(accCount);

    //정렬하기
    var sortedArr = new Array(input.length);
    for(var k=arr.length-1; k>=0; k--){
        sortedArr[accCount[arr[k]]--] = arr[k];

    }
    return sortedArr;
}
console.log(countingSort(input).join('\n'));
 */

//내가 생각한 counting sort!
function countingSort(arr){
    var max = Math.max(...arr);
    var countArr = new Array(10001).fill(0);

    for(var i=0; i<arr.length; i++){
        countArr[arr[i]]++;
    }
    console.log(countArr);

    //정렬하기
    var sortedArr = [];
    for(var j=0; j<countArr.length; j++){
        if(countArr[j] === 0) continue;
        for(var k=0; k<countArr[j]; k++){
            sortedArr.push(j);
        }
    }
    return sortedArr;
}

console.log(countingSort(input));
console.log(countingSort(input).join('\n'));

/*
자바스크립트로는 풀 수 없는 문제였다.
입력값이 1000만 개 이므로 이미 메모리 제한에 걸린다..
다른 언어는 한 줄씩 받는 것 같은데 자바스크립트는 한 번에 받아오기 때문에
input부터 어떻게 할 수가 없다.
실제로도 node.js로 푼 사람은 한 명도 없다;;;
 */