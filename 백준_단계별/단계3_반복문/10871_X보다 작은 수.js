var input = `10 5
1 10 4 9 2 3 8 5 7 6`
input = input.split('\n');
var x = +input[0].split(' ')[1];
var list = input[1].split(' ').map(x => +x);
var answer = '';
for(var i=0; i<list.length; i++){
    if(list[i] < x){
        answer += list[i] + ' ';
    }
}
console.log(answer);

var input2 = `10 5
1 10 4 9 2 3 8 5 7 6`
input2 = input2.split(/\s+/).map(Number);
console.log(input2.slice(2, input2[0]+2).filter(x => x<input2[1]).join(' '));

// s=(require('fs').readFileSync('/dev/stdin')+'').split(/\s+/).map(Number);
// console.log(s.slice(2,s[0]+2).filter(function(x){return s[1]>x}).join(' '));