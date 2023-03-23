var input = `71`;
// var answer = input;
// var newNum = '';
// var count = 0;
// do{
//     if(input.length <2){
//         input = 0 + input;
//     }
//     newNum = (+input[0] + +input[1]).toString();
//     if(newNum.length<2){
//         newNum = 0 + newNum;
//     }
//     input = input[1]==='0'? newNum[1] : input[1] + newNum[1];
//     count++;
// }while(input !== answer)
//
// console.log(count);

input = +input;
var answer = input;
var cycle = 0;

while(true){
    input = input%10*10 + (Math.floor(input/10) + input%10)%10;     // /10은 10의자리 숫자를 알아내고, %10은 1의자리 숫자를 알아냄.
    cycle++;
    if(input === answer) break;
}
console.log(cycle);