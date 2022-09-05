let [tc, ...nums] = `5
1 6
3 7
6 2
7 100
9 635`.split('\n');


// 제곱수에서 1의 자리는 반복된다.
// 따라서 반복되는 1의 자리를 찾아서 배열로 만들고,
// b를 배열의 길이로 나누어 나머지값에 따라 어떤 값인지 선택한다.

let ans = ''
for(let i = 0; i<Number(tc); i++){
    let [a, b] = nums[i].split(' ').map(Number);
    let aUnit = a%10;
    let units = [aUnit];

    while(units[0] !== (units[units.length-1] * aUnit)%10){
        units.push((units[units.length-1] * aUnit)%10);
    }

    // let idx = b%(units.length);
    // idx = (idx===0? units.length-1 : idx-1);
    // 위의 2줄을 단축 평가를 통해 줄일 수 있음.
    let idx = (b%(units.length) || units.length)-1

    // ans += (units[idx] === 0? 10 : units[idx]) + '\n';
    // 얘도 단축 평가
   ans += (units[idx] || 10) + '\n';
}
console.log(ans);


// 숏코딩... 이 사람 천재 아닌가?
/*
0: 0
1: 1
2: 2 4 8 6
3: 3 9 7 1
4: 4 6
5: 5
6: 6
7: 7 9 3 1
8: 8 4 2 6
9: 9 1
반복되는 일의 자리 숫자를 구한겁니다...
길이는 1 아니면 2 아니면 4, 즉 4의 약수들이란 말이지
그래서 b가 100이든 1000이든 상관이 없다. 어쨋든 일의 자리는 저기 중에서 하나 나올테니깐..
그래서 4로 나눈 나머지로 한다.
 */
for (let i = 1; i <= input[0]; i++) {
    const [a, b] = input[i].split(" ");
    const result = a ** (b % 4 || 4) % 10 || 10;
    console.log(result);
}
