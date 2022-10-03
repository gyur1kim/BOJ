input = 'a'
console.log(`${input === 'N' || input === 'n'? 'Naver D2' : 'Naver Whale'}`);

// if(input === 'N' || input === 'n'){
//     console.log('Naver D2');
// }
// else{
//     console.log('Naver Whale')
// }

/*
삼항연산자에서 input === 'N'||'n'으로 하면 될 줄 알았는데 연산 순서때문인지 틀렸다고 했다..
그래서 input === ('N'||'n')로도 했는데 그래도 틀렸다...
연산자 우선 순위를 잘 알아야겠다..
 */