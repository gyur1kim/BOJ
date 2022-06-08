var [a, b] = `9223372036854775807 9223372036854775808`.split(' ');
var aLen = a.length, bLen = b.length;

if(aLen !== bLen){
    aLen>bLen? b=b.padStart(aLen, '0') : a=a.padStart(bLen, '0');
}

//뒤집어서 계산하기
/*
a = a.split('').reverse().join('');
b = b.split('').reverse().join('');
var answer = [];
var carry = 0;
for(var i=0; i<a.length; i++){
    var sum = ((+a[i] + +b[i] + +carry)+'').padStart(2, '0');
    carry = sum[0];
    answer.push(sum[1]);
    if(i === a.length-1 && carry !== '0'){
        answer.push(carry);
    }
}
answer = answer.reverse();
for(var j=0; j<answer.length; j++){
    if(answer[j] === '0'){
        answer.splice(j, 1);
        j--;
    }
    else {
        break;
    }
}
console.log(answer.join(''));
 */

//unshift와 pop을 이용해보자!
var answer = [];
var len = a.length;
a = a.split('');
b = b.split('');
var carry = 0;
for(var i=0; i<len; i++){
    var sum = ((+a.pop() + +b.pop() + +carry)+'').padStart(2, '0');
    carry = sum[0];
    answer.unshift(sum[1]);
    if(i === len-1 && carry !== '0'){
        answer.unshift(carry);
    }
}
for(var j=0; j<answer.length; j++){
    if(answer[j] === '0'){
        answer.splice(j, 1);
        j--;
    }
    else {
        break;
    }
}
console.log(answer.join(''));


//어이없지만 맨 처음에 input받아올 때 bigint로 받아오면 바로 끝난다;;
//이런 계산 안해도 된다.