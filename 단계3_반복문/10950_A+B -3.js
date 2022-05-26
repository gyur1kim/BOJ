var input=`5
1 1
2 3
3 4
9 8
5 2`
input = input.split('\n');
var caseNum = input[0];
for(var i=1; i<=caseNum; i++){
    var ab = input[i].split(' ');
    console.log(+ab[0] + +ab[1]);
}