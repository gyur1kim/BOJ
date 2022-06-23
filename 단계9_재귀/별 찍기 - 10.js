var input = +`9`;
var output = '';
var arr = new Array(input).fill(0).map(()=>new Array(input));
arr[0][0] = '*'
console.log(arr);

/*
작은 부분부터 시작한다.
9등분 한다.
1, 2, 3, 4, 6, 7, 8, 9에만 별을 찍을 것이다. (5 즉 가운데 부분은 비워둘 것)
1의 모양을 기억하고, 도장찍듯 배열의 2, 3, 4, 6, 7, 8, 9구역에 찍어낸다.

 */
function star(num){
    for(var i=1; i<=9; i++){
        console.log(i)
        if(i === 5) {
            output += ' ';
            continue;
        }
        output += '*';
        if(i%3===0){
            output += '\n';
        }
    }
}
star(5);
console.log(output);