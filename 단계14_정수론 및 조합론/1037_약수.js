let [N, divisors] = `14
14 26456 2 28 13228 3307 7 23149 8 6614 46298 56 4 92596`.split('\n');

// 풀이 1 : 정렬해서 맨 앞과 맨 뒤 숫자 -> 9604KB, 136ms
// let orderedDivisors = divisors.split(' ').map(Number).sort((a, b)=>a-b);
// console.log(orderedDivisors[0]*orderedDivisors[N-1]);

// 풀이 2 :  Math.min과 Math.max -> 9600KB, 152ms
divisors = divisors.split(' ').map(Number);
console.log(Math.max(...divisors) * Math.min(...divisors));