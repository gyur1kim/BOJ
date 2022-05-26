var input = `2`;
var newNum = '';
var count = 0;
do{
    if(input.length <2){
        input = 0 + input;
    }
    newNum = (+input[0] + +input[1]).toString();
    if(newNum.length<2){
        newNum = 0 + newNum;
    }
    input = input[1] + newNum[1];
    count++;
}while(newNum !== input)