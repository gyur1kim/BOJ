var [a, b] = `839 237`.split(' ').map(x=> [...x].reverse().join(''));


console.log(a);
console.log(b);


var reverse = function (str){
    str = str.split('').reverse().join('');
    return str;
}
console.log(Math.max(reverse(a), reverse(b)));      //메모리는 좀 더 잡아먹지만(12kb) 시간은 단축됨
console.log(a>b?a:b);                               //메모리는 덜먹는데 10ms 느림