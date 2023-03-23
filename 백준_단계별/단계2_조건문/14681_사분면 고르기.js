//BOJ에선 readline으로 해야한다ㅜㅜ
var input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
var x = input[0];
var y = input[1];
var quadrant;
if(x>0)
    quadrant = y>0 ? 1 : 4;
else
    quadrant = y>0 ? 2 : 3;
console.log(quadrant);