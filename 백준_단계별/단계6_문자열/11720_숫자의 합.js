var input = `11
10987654321`;
input = input.split('\n')[1].split('');
var answer = input.reduce((a, c)=> a + +c, 0);
console.log(answer);