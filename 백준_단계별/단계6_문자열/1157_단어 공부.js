input = `baaa`;
input = input.toUpperCase();
var arr = new Array(26).fill(0);
for(let i=0; i<input.length; i++) {
    arr[input[i].charCodeAt()-65]++;
}                                               //for... in보다 그냥 for문이 더 빠르다!! 왤까?
// for(var i in input){
//     var idx = input.charCodeAt(i)-65;
//     arr[idx]++;
// }

var freq = Math.max(...arr);
var answer = arr.filter(x => x===freq).length > 1 ? '?' : String.fromCharCode(arr.indexOf(freq) + 65);
console.log(answer);

//다른 코드
arr.indexOf(freq) === arr.lastIndexOf(freq)? console.log(String.fromCharCode(arr.indexOf(freq) + 65)) : console.log('?');