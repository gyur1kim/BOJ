let [n, m, ...input] = `5 11
baekjoononlinejudge
startlink
codeplus
sundaycoding
codingsh
baekjoon
codeplus
codeminus
startlink
starlink
sundaycoding
codingsh
codinghs
sondaycoding
startrink
icerink`.split(/\s+/);

const setN = new Set(input.splice(0, Number(n)));
let cnt = 0

// forEach, for, for...of, map 중에 제일 빠른건?
//1. map -> 34232KB, 240ms
//input.map(x=> cnt += setN.has(x)||0 );

//2. forEach -> 33708KB, 236ms
//input.forEach(val=> cnt += setN.has(val)||0);

//3. for -> 33436KB, 196ms 제일 빠르다🔥🔥
for(let i=0; i<input.length; i++){
    cnt += setN.has(input[i])||0;
}

//4. for...of -> 34008KB, 236ms
// for(let val of input){
//     cnt += setN.has(val)||0;
// }
console.log(cnt);