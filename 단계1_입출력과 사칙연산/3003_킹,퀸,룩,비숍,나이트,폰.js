let myPiece = `0 1 2 2 2 7`.split(' ').map(Number);
let piece = [1, 1, 2, 2, 2, 8];
let answer = [];

//내 답
// for(let i=0; i<6; i++){
//     answer.push(piece[i]-myPiece[i]);
// }
// console.log(answer.join(' '));

//다른 사람들 답
/*
들어온 값을 map으로 돌리면서, 답-들어온 값을 함.
map메서드의 첫번째 인자는 값이고 두번째 인자는 인덱스네? 처음알았당..
 */

answer = myPiece.map((v, i)=> v-piece[i]);
console.log(answer);
console.log(answer.join(' '));