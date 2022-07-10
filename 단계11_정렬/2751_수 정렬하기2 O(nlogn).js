//병합 정렬, 퀵 정렬, 힙 정렬
var [n, ...input] = `6
10
-3
1
-9
-72
0`.split('\n');
input=input.map(Number);
console.log(input);

//병합 정렬
/*
1. 리스트의 길이가 0 또는 1이면 이미 정렬된 것으로 본다. 그렇지 않은 경우에는
2. 정렬되지 않은 리스트를 절반으로 잘라 비슷한 크기의 두 부분 리스트로 나눈다.
3. 각 부분 리스트를 재귀적으로 합병 정렬을 이용해 정렬한다.
4. 두 부분 리스트를 다시 하나의 정렬된 리스트로 합병한다.
 */

//1. 배열을 반씩 나누는 함수
function mergeSort(list){
    if(list.length === 1) return list;          //배열의 길이가 1이 되면 끝낸다
    var half = Math.floor(list.length/2);     //중간값
    var left = list.slice(0, half);  //왼쪽 배열
    var right = list.slice(half);   //오른쪽 배열
    return merge(mergeSort(left), mergeSort(right));       //배열의 길이가 1이 되면 merge시작, 이 값을 계속 return해서 최종적으로 합친 것이 병합 정렬
}
//2. 나눈 배열을 다시 순서에 맞게 합치는 함수
function merge(left, right){
    var answer = [];
    while(left.length && right.length){
        if(left[0]>=right[0]) answer.push(right.shift());
        else answer.push(left.shift());
    }
    return [...answer, ...left, ...right];
}

var result = mergeSort(input);
console.log(result.join('\n'));


//퀵 정렬
/*
분할 정복 알고리즘
1. 리스트 안의 한 요소를 선택(=pivot)
2. 피벗을 기준으로 피벗보다 작은 것들은 왼쪽으로, 큰 것들은 오른쪽으로 이동.
3. 왼쪽, 오른쪽을 다시 정렬(-> 순환호츌을 이용해 정렬 반복)
4. 부분 리스트들이 더 이상 분할이 불가능할 때까지 반복(=리스트의 크기가 0이나 1이 될 때까지)
 */
/*
function quickSort(list){
    if(list.length <= 1){
        return list;
    }
    var pivot = list[0];
    var low = 0;
    var high = 1;

    for(high; high<list.length; high++){
        if(list[high]<pivot){
            low++;
            var tmp = list[low]
            list[low] = list[high];
            list[high] = tmp;
        }
    }
    list[0] = list[low];
    list[low] = pivot;

    return [...quickSort(list.slice(0, low)), list[low], ...quickSort(list.slice(low+1, list.length))];
}
console.log(quickSort(input).join('\n'));
 */

//힙정렬
