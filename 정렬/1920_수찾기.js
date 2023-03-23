/*
수를 찾으려면
1. 머지소트
2. 이진탐색
을 진행하는 방법밖에 없을 듯하다.
 */

/*
function mergeSort(arr){
    if(arr.length === 1) return arr;
    let half = Math.floor(arr.length/2);
    let left = arr.slice(0, half);
    let right = arr.slice(half);
    return merge(mergeSort(left), mergeSort(right));
}
function merge(left, right){
    let tmp = [];
    while(left.length && right.length){
        left[0] < right[0]? tmp.push(left.shift()): tmp.push(right.shift());
    }
    return [...tmp, ...left, ...right];
}

function binarySearch(arr, start, end, num){
    while(start <= end){
        let mid = start + Math.floor((end-start)/2);
        if(arr[mid] === num) return 1;
        else if(arr[mid] > num) end = mid-1;
        else start = mid + 1;
    }
    return 0;
}
*/

// let [N, input, M, nums] = `5
// 4 1 5 2 3
// 5
// 1 3 7 9 5`.split('\n');
// input = input.split(' ').map(Number);
// nums = nums.split(' ').map(Number);
// input = mergeSort(input);

/*
let res = ''
for(num of nums){
    res += `${binarySearch(input, 0, input.length-1, num)}\n`;
}
console.log(res);
 */

/*
방법 2번째!!
input을 set로 만들어서 검색을 편하게 만든다...
그리고 각 원소가 있는지 찾는다..
완전 한가지 방법에 매몰된것같다!!!!
검색을 더 빨리하는 방법이 있는데...
 */
let [N, input, M, nums] = `5
4 1 5 2 3
5
1 3 7 9 5`.split('\n');
input = new Set(input.split(' ').map(Number));
nums = nums.split(' ').map(Number);
let res='';
for(num of nums){
    res += `${input.has(num)? 1: 0}\n`;
}
console.log(res);