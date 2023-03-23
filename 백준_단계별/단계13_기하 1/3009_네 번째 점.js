const input = `30 20
10 10
10 20`.split(/\s+/);
console.log(input);
const xs = [input[0], input[2], input[4]];
const ys = [input[1], input[3], input[5]];

x4 = []

if(xs[0] === xs[1]){
    x4.push(xs[2]);
}
else if(xs[0] === xs[2]){
    x4.push(xs[1])
}
else{
    x4.push(xs[0])
}

if(ys[0] === ys[1]){
    x4.push(ys[2]);
}
else if(ys[0] === ys[2]){
    x4.push(ys[1])
}
else{
    x4.push(ys[0])
}
console.log(x4)


// 이거를 xor 연산으로 푸는 사람들이 있던데... 어덯게 하는건지 궁금하다
// 연구해보자!
const [x, y] = line.split(' ').map(Number);
X ^= x;
Y ^= y;

console.log(X, Y);

/*
xor 연산자에서는 숫자 3개가 한 세트가 된다.
이 숫자들을 2진법으로 나타내면, 한 줄에 1이 2개씩 존재한다....
5: 1 0 1
6: 1 1 0
3: 0 1 1
이런 느낌으로... 한 열에 1 2개씩이 세트임!!

신기하다
그니까 숫자 3개가 한 셋트라고 칩시다!!
위에서는 이미 숫자를 2개나 주니깐 나머지 숫자 한 개는 고정이다.
나머지 숫자가 뭐든지간에 상관없이!!!!!!
신기하다.... 이게 3번만 연산하는거라서 되는 것같다.
 */