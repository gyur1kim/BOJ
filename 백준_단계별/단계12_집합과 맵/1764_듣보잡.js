var [n, m, ...input] = `3 4
ohhenrie
charlie
baesangwook
obama
baesangwook
ohhenrie
clinton`.split(/\s+/);

const heard = new Set(input.splice(0, +n));
const saw = new Set(input);
const output = [];
for(let val of heard){
    if(saw.has(val)) output.push(val);
}

console.log(output.length);
console.log(output.sort().join('\n'));

// 숏코딩
// 똘똘한 사람(?) 의 코드를 봤다.
// 나는 map이나 set 함수나 생각했는데, 아예 리스트를 다 정렬해버린 다음에
// 앞뒤로 같은게 나오면 그 값을 저장하는 방식이다...;;
// 물론 문제 취지에 맞지는 않지만, 사고방식에서 벗어난 해결법이고 실제로 메모리도 덜 잡아먹었다.
// 그럼 이제 딜레마에 빠진다. 출제자의 의도 파악이냐 빠른 속도냐...