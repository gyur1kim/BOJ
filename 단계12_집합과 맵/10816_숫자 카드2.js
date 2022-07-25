let [n, myCard, m, compareCard] = `10
6 3 2 10 10 10 -10 -10 7 3
8
10 9 -5 2 3 4 5 -10`.split('\n');

myCard = myCard.split(' ');
compareCard = compareCard.split(' ');
const myCard_map = new Map;
const output = [];

for(let card of myCard){
    myCard_map.set(card, myCard_map.get(card)+1 || 1);
}
console.log(myCard_map);
for(let card of compareCard){
    output.push(myCard_map.get(card) || 0);
}
console.log(output.join(' '));

/*
맵 객체에 키와 밸류를 이상하게 할당했더니... 넘 느렸다.
set()과 get() 메서드를 잘 사용하자 시간도 빨라지고 메모리도 훨씬 덜 사용했다.
메모리 : 165380KB, 시간 : 928ms
 */