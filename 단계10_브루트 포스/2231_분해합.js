var input = `216`;

for(var i=1; i<input; i++){
    i = i+'';
    var i2arr = input.split('');
    var output = i2arr.reduce((a, c)=>a+ +c, +i);
    console.log(output);
    if(output > input) {
        console.log(0);
        break;
    }
    else if(output === input){
        console.log(output);
        break;
    }
}