var input = `6 2 5`;
input = input.split(' ');
input = input.map(x => +x).sort();
console.log(input);
var prize;
if(input[0] === input[2]){  //셋 다 숫자가 같음
    prize = 10000 + (input[0]*1000);
}
else if(input[0]===input[1] || input[1]===input[2]){
    prize = 1000 + input[1]*100;
}
else{
    prize = input[2]*100;
}
console.log(prize);
