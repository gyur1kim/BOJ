var input = `9
8
7
6
5
4
3
2
1`

input = input.split('\n').map(Number);
var max = input[0];
var maxIdx = 0;
for(var i=1; i<input.length; i++){
    if(max < input[i]){
        max = input[i];
        maxIdx = i;
    }
}
console.log(max);
console.log(maxIdx+1);