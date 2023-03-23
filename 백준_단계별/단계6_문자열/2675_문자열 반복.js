var s =`2
3 ABC
5 /HTP`

s = s.split('\n').slice(1).map(x=>x.split(' '));
console.log(s);
var answer = '';
for(var arr of s){
    answer += arr[1].split('').map(x=>x.repeat(arr[0])).join('') + '\n';
}
console.log(answer);