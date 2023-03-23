let [n, myCard, m, compareCard] = `5
6 3 2 10 -10
8
10 9 -5 2 3 4 5 -10`.split('\n')
myCard = myCard.split(' ');
compareCard = compareCard.split(' ');

let myCard_object = {}
myCard.forEach((v)=>{
    myCard_object[v] = 1;
});
let answer = ''
compareCard.forEach((v)=>{
    answer += myCard_object[v]? '1 ': '0 '
});
console.log(answer)

// 숏코딩 - map을 이용해 풀었다.
let myCard_map = new Map();
myCard.map(v=> myCard_map.set(v, 1));
let answer2 = compareCard.map(v => myCard_map.get(v) || 0);
console.log(answer2.join(' '))

//object와 map을 쓰고 나서 알게된 점
/*
object보다 map 객체가 더 빠르다.
forEach보다 map이 더 빠르다.
 */