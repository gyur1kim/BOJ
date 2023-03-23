var input = `472
385`;
input = input.split('\n');
var a = input[0];
var b = input[1];

console.log(b.slice(0, 1));     //문자열은 slice가 아니라 인덱스로 접근해도 된다.
console.log(b.slice(1, 2));
console.log(b.slice(2));

console.log(a * b.slice(2));    //숫자가 아니라 문자끼리 곱해도 알아서 숫자로 변환된다
console.log(a * b.slice(1, 2));
console.log(a * b.slice(0, 1));
console.log(a * b)

console.log(a * b[2]);
console.log(a * b[1]);
console.log(a * b[0]);
console.log(a * b);