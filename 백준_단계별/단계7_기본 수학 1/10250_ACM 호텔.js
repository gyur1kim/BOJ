var input = `2
6 12 10
30 50 72`;
var [caseN, ...hotel] = input.split('\n');
var answer = '';
for(var i=0; i<caseN; i++){
    var [h, w, n] = hotel[i].split(' ');
    var a = n%h;
    if(a === 0) a=h;
    var b = Math.ceil(n/h);
    b<10? answer += `${a}0${b}\n` : answer += `${a}${b}\n`
}
console.log(answer);