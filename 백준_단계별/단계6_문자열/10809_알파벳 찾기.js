var s = `baekjoon`;
var arr = new Array(26).fill(-1);
for(var idx in s){
    var seqNum = s.charCodeAt(idx) -97
    if(arr[seqNum] === -1) arr[seqNum] = idx;
}

//숏코딩
//반대로 숫자에서 소문자를 만들어냈다!
//그 소문자가 s안에 있으면 인덱스를 결과배열에 넣는다
//만들어낸 소문자가 s안에 없으면 -1을 뱉어내고, 그 값을 결과배열에 넣는다.
let result=[];
for(let i =97; i<=122;i++){
    result.push(s.indexOf(String.fromCharCode(i)));
}
console.log(result.join(' '));