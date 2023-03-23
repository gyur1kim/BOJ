/*
처음에는 이렇게 풀었다
member를 나눠서 2차원 배열을 만들고, 각 배열의 0번째 원소(=나이)를 순서로 정렬
 */
var [n, ...member] = `3
21 Junkyu
21 Dohyun
20 Sunyoung`.trim().split('\n');
member = member.map(x=>x.split(' '))
member = member.sort((a, b)=> a[0]-b[0]);
console.log(member.map(x=>x.join(' ')).join('\n'));

/*
뮬론 틀린건 아닌데, parseInt()는 문자열이 숫자로 시작하면 그 숫자부분만 보고 숫자로 바꿔버린다.
이를 이용해서 더 짧고 빠르게 연산이 가능했다.
 */
var [n, ...member] = `3
21 Junkyu
21 Dohyun
20 Sunyoung`.trim().split('\n');
member = member.sort((a, b)=> parseInt(a)-parseInt(b));
console.log(member.join('\n'));

//parseInt 맛보기
var str = '10hello'
console.log(parseInt(str)); //10 출력
var str2 = 'hello10'
console.log(parseInt(str2));    //NaN
/*
문자열이 숫자로 시작하면, 뒤에 어떤 것이 와도 앞의 숫자를 바꿔준다.
 */