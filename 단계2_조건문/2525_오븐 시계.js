var input = `23 59
1`
input = input.split('\n');
var h = +input[0].split(' ')[0]
var m = +input[0].split(' ')[1]
var time = +input[1];

m += time;
if(m>=60){
    h += parseInt(m/60);
    m %= 60;
    if(h>=24){
        h -= 24;
    }
}
console.log(h, m);