var len = 10000
var num = new Array(len+1).fill(0);
function selfNumber(n){
    var newNum = n;
    n = n.toString();
    for(x of n){
        newNum += +x;
    }
    if(newNum>len) {
        return;
    }
    num[newNum] = +n;
    selfNumber(newNum);
}
for(var i=1; i<=len; i++){
    if(num[i] === 0)  selfNumber(i);
}

var answer = [];
num = num.slice(1)
for(x in num){
    if (num[x]===0){
         answer.push(+x +1)
    }
}
console.log(answer.join('\n'));


//숏코딩 가져온것
let arr = Array(10001).fill(false);
let n = 1;
while (n<10000) {
    //(n+'').split('').reduce((a,c)=>a+ +c,0) 이 표현은, 숫자를 문자열로 만든 뒤(n+''), 한 자리씩 뜯어서(split('')) 자릿수를 더해나간다(reduce)
    arr[n+(n+'').split('').reduce((a,c)=>a+ +c,0)]=true;
    n++;
}
let r = [];
arr.forEach((v,i) => {
    if (!v) r.push(i);
})
console.log(r.slice(1).join('\n'));

//내가 다시 작성해보기
var len = 10000;
var arr = new Array(len+1).fill(false);
var n = 1;
while(n<=len){
    arr[n + n.toString().split('').reduce((a, c)=> a + +c, 0)] = true;
    n++;
}
var answer = [];
arr.forEach((value, idx)=>{
    if(!value) answer.push(idx);
})
console.log(answer.slice(1).join('\n'));


