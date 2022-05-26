var input=`1 1
2 3
3 4
9 8
5 2
0 0`;
input = input.split('\n');
var i = 0;
var answer = '';
while(input[i] !== '0 0'){
    var ab = input[i].split(' ')
    answer += +ab[0] + +ab[1] + '\n';
    i++;
}
console.log(answer);