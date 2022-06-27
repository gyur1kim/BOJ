var n = +`3`;
var cnt = 0;
var arr = new Array(n).fill(1);
var output = '';
function hanoi(numDisks, from, to, other){
    //다 옮기면 끝내기
    if(numDisks === 1) {
        output += `${from} ${to}\n`;
        return;
    }
    hanoi(numDisks-1, from, other, to); //원래 있던 것을 일단 보조기둥으로 옮기기
    hanoi(numDisks-1, other, to, from); //보조기둥에 있던 것을 목적지로 옮기기
}
hanoi(n, 1, 3, 2);
console.log(2**n -1);
console.log(output);