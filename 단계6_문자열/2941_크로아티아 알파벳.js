var alphabet = ['c=', 'c-', 'dz=', 'd-', 'lj', 'nj', 's=', 'z='];
var input = `ddz=z=`
for(var i=0; i<alphabet.length; i++){
    input = input.split(alphabet[i]).join('A');
}
console.log(input.length);

//input에서 글자를 찾아서 그거 기준으로 나누고, 한 글자로 연결하면 된다...
//그니까 여러 글자를 한 글자로 바꿔버리는 것