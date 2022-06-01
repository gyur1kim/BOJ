var alphabet = ['c=', 'c-', 'dz=', 'd-', 'lj', 'nj', 's=', 'z='];
var input = `nljj`
for(var i=0; i<alphabet.length; i++){
    if(input.includes(alphabet[i])) console.log(alphabet[i], "가 들어있다.");
    else console.log(alphabet[i], "안들어있다.");
}