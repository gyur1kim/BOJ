let [n, myCard, m, compareCard] = `5
6 3 2 10 -10
8
10 9 -5 2 3 4 5 -10`.split('\n')
myCard = myCard.split(' ').map(Number);
compareCard = compareCard.split(' ');

let myCard_object = {}
myCard.forEach((v, i)=>{
    myCard_object[v] = 1;
});
let answer = ''
compareCard.forEach((v)=>{
    answer += myCard_object[v]? '1 ': '0 '
});
console.log(answer)

// 숏코딩 - map을 이용해 풀었다.