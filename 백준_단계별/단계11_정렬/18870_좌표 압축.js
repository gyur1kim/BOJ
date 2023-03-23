var [n, ...input] = `6
1000 999 1000 999 1000 999`.split(/\s+/).map(Number);
var input_noOverlap = Array.from(new Set(input)).sort((a, b)=>a-b);
var answer = ''
// for(var v of input){
//     answer += input_noOverlap.indexOf(v)+' ';
// }

/*
계속 시간초과가 난다..!
object에서는 무언가를 찾을 때 시간복잡도가 O(1)이라고 한다.
key값으로 바로 찾기 때문이란다~!!
그래서 아예 값과 인덱스를 Object로 저장하면, 검색할 때 빠르다~
 */
var input_object = {}
input_noOverlap.forEach((value, index)=> input_object[value] = index);
for(var v of input){
    answer += input_object[v]+' ';
}
console.log(answer);