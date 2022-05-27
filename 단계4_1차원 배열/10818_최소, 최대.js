var input = `5
20 10 35 30 7`;

[n, ...input] = input.split(/\s+/).map(Number);     //전개 연산자 spread operator
console.log(input);
console.log(Math.min(...input), Math.max(...input));