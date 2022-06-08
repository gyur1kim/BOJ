var [m, n] = `1
100`.split('\n').map(Number);

var sum = 0;
var min = 10000;
for(var i=m; i<=n; i++){
    if(i<2){
        continue;
    }
    else if(1<i && i<4){
        sum += i;
        min = min<i? min : i;
    }
    for(var j=2; j<=Math.floor(Math.sqrt(i)); j++){
        if(i%j===0){
            break;
        }
        if(j===Math.floor(Math.sqrt(i))){
            sum += i;
            min = min<i? min : i;
        }
    }
}
if(sum === 0){
    console.log(-1);
}
else{
    console.log(sum);
    console.log(min);
}