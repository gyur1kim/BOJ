var [a, b, c] = `10 2 5`.split(' ').map(Number);
if(b>=c){
    count = -1;
}
else{
    var count = Math.floor(a/(c-b))+1;
}
console.log(count);
