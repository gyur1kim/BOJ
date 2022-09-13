/*
이 문제도 규칙이 있네..............?
 */

let N = +`100`.trim();
if(N===1) console.log(N);
else console.log((N-2**(Math.floor(Math.log2(N))))*2 || N);

// console.log(Math.log2(N));
