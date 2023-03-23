let input = `1 2 3 4 5 6 7 8`;

// if(input === '1 2 3 4 5 6 7 8'){
//     console.log('ascending');
// }
// else if(input === '8 7 6 5 4 3 2 1'){
//     console.log('descending');
// }
// else{
//     console.log('mixed');
// }


// 삼항연산자가 더 빠르네...? why
// -> 꼭 그런건 아니다.. 어디는 삼항연산자가 더 느리대
console.log(input === '1 2 3 4 5 6 7 8'? 'ascending': input === '8 7 6 5 4 3 2 1'? 'descending' : 'mixed');