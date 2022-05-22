var input = `10 10`;
input = input.split(' ');
var h = +input[0];
var m = +input[1];

m = m-45
if(m < 0){
    h -= 1;
    m = 60+m;
}
if(h < 0){
    h = 23;
}
console.log(h, m);