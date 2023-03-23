let [...input] = `0 4 2 5 6`.split(' ').map(Number);
let res = input.reduce((arr, cur)=>arr + (cur**2), 0);
console.log(res%10);