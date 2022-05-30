var input = `1`
input = +input;
function hansoo(n){
    if(n < 100){
        console.log(n);
        return;
    }
    var i = 100;
    var count = 99;
    while(i<=n){
        i = i+'';
        if(i[0]-i[1] === i[1]-i[2]) count++;
        i++;
    }
    console.log(count);
}
hansoo(input);