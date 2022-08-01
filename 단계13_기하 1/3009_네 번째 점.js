const input = `30 20
10 10
10 20`.split(/\s+/);
console.log(input);
const xs = [input[0], input[2], input[4]];
const ys = [input[1], input[3], input[5]];

x4 = []

if(xs[0] === xs[1]){
    x4.push(xs[2]);
}
else if(xs[0] === xs[2]){
    x4.push(xs[1])
}
else{
    x4.push(xs[0])
}

if(ys[0] === ys[1]){
    x4.push(ys[2]);
}
else if(ys[0] === ys[2]){
    x4.push(ys[1])
}
else{
    x4.push(ys[0])
}
console.log(x4)