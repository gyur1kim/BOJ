let [...inputs] = `So when I die (the [first] I will see in (heaven) is a score list).
[ first in ] ( first out ).
Half Moon tonight (At least it is better than no Moon at all].
A rope may form )( a trail in a maze.
Help( I[m being held prisoner in a fortune cookie factory)].
([ (([( [ ] ) ( ) (( ))] )) ]).
 .
.`.split('\n');

// for ... of 이용하기
/*
let pair = {')':'(', ']':'['};
for(input of inputs){
    if(input === '.') break;
    let stack = [];
    let isDone = true;
    for(i of input){
        // console.log(i, stack);
        if(i === '(' || i === '['){
            stack.push(i);
        }
        else if(i === ')' || i === ']'){
            if(stack.length === 0 || stack.pop() !== pair[i]) {
                console.log('no');
                isDone = false;
                break;
            }
        }
    }
    if(isDone){
        console.log(`${stack.length? 'no' : 'yes'}`);
        // 자바스크립트에서 빈 문자열은 false지만, 빈 배열과 빈 객체는 true임!!
    }
}
 */


// for문 이용
/*
let pair = {')':'(', ']':'['};
for(let i=0; i<inputs.length-1; i++){
    let input = inputs[i]
    let stack = [];
    let isDone = true;
    for(let j=0; j<input.length; j++){
        if(input[j] === '(' || input[j] === '['){
            stack.push(input[j]);
        }
        else if(input[j] === ')' || input[j] === ']'){
            if(!stack.length || stack.pop() !== pair[input[j]]) {
                console.log('no');
                isDone = false;
                break;
            }
        }
    }
    if(isDone){
        console.log(`${stack.length? 'no' : 'yes'}`);
        // 자바스크립트에서 빈 문자열은 false지만, 빈 배열과 빈 객체는 true임!!
    }
}
 */

// for문 이용 + log를 한 번만 하기  => log를 한 번만 하니까 시간이 1/2로 줄었다..
let pair = {')':'(', ']':'['};
let ans = ''
for(let i=0; i<inputs.length-1; i++){
    let input = inputs[i]
    let stack = [];
    let isDone = true;
    for(let j=0; j<input.length; j++){
        if(input[j] === '(' || input[j] === '['){
            stack.push(input[j]);
        }
        else if(input[j] === ')' || input[j] === ']'){
            if(!stack.length || stack.pop() !== pair[input[j]]) {
                ans += `no\n`;
                isDone = false;
                break;
            }
        }
    }
    if(isDone){
        ans += `${stack.length? 'no' : 'yes'}\n`;
        // 자바스크립트에서 빈 문자열은 false지만, 빈 배열과 빈 객체는 true임!!
    }
}
console.log(ans);