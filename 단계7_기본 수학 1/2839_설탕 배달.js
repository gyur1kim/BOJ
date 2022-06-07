var input = +`97`;

//내가 생각한 것, 5로 나눠지면 바로 끝내고 아니면 계속 3으로 나누기..
/*
var sugar3 = 0, sugar5 = 0;
if(input%5===0){
    console.log(input/5);
}
else{
    for(var i=Math.floor(input/5); i>=0; i--){
        sugar5 = i;
        var rest = input - i*5;
        if(rest%3===0){
            sugar3 = rest/3;
            console.log(sugar5);
            console.log(sugar3);
            console.log(sugar5+sugar3);
            break;
        }
        if(i===0){
            console.log(-1);
        }
    }
}
 */

//숏코딩에서 발견한 내용
var sugar3 = 0;
while(true){
    if(input%5===0){
        console.log(input/5+sugar3);
        break;
    }
    if(input<0){
        console.log(-1);
        break;
    }
    sugar3++;
    input -= 3;
}